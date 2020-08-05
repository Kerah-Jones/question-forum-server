const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  answerer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = answerSchema
