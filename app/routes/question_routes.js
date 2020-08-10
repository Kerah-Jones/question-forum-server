const express = require('express')
const passport = require('passport')
const router = express.Router()
const requireToken = passport.authenticate('bearer', { session: false })
const removeBlanks = require('../../lib/remove_blank_fields')
const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership

// require question model
const Question = require('../models/question')
const handle404 = require('../../lib/custom_errors')

// INDEX
// GET /questions
router.get('/questions', requireToken, (req, res, next) => {
  Question.find()
    .then(questions => {
    // `examples` will be an array of Mongoose documents
    // we want to convert each one to a POJO, so we use `.map` to
    // apply `.toObject` to each one
      return questions.map(question => question.toObject())
    })
    .then(questions => res.status(200).json({ questions: questions }))
    .catch(next)
})

// SHOW
// GET /questions/:id
router.get('/questions/:id', (req, res, next) => {
  const id = req.params.id
  Question.findById(id)
    .populate('owner')
    .populate('answers.answerer')
    .then(handle404)
    .then(question => res.json({question: question}))
    .catch(next)
})

// CREATE
// POST /questions/
router.post('/questions', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.question.owner = req.user.id
  console.log(req.user)
  console.log(req.body.question)

  Question.create(req.body.question)
    // respond to succesful `create` with status 201 and JSON of new "example"
    .then(question => {
      res.status(201).json({ question: question.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /questions/:id
router.patch('/questions/:id', requireToken, removeBlanks, (req, res, next) => {
  Question.findById(req.params.id)
    .then(handle404)
    .then(question => {
    // pass the `req` object and the Mongoose record to `requireOwnership`
    // it will throw an error if the current user isn't the owner
      requireOwnership(req, question)

      // pass the result of Mongoose's `.update` to the next `.then`
      return question.updateOne(req.body.question)
    })
  // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /questions/:id
router.delete('/questions/:id', requireToken, (req, res, next) => {
  Question.findById(req.params.id)
    .then(handle404)
    .then(question => {
      // throw an error if current user doesn't own `question`
      requireOwnership(req, question)
      // delete the question ONLY IF the above didn't throw
      question.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
