const mongoose = require('mongoose')
const answerSchema = require('./answer')

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  answers: [answerSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('Question', questionSchema)
