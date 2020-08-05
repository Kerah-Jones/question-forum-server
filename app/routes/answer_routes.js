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

// CREATE
// POST /answers/
router.post('/answers/:questionId', requireToken, (req, res, next) => {
  // get the answer data from the body of the request
  req.body.answer.owner = req.user.id
  const answerData = req.body.answer
  // get the question id from the body
  const questionId = req.params.questionId
  // find the question by its id
  Question.findById(questionId)
    .then(handle404)
    .then(question => {
      // add answer to question
      question.answers.push(answerData)
      // save question
      return question.save()
    })
    // send responsne back to client
    .then(question => res.status(201).json({question: question}))
    .catch(next)
})
module.exports = router
