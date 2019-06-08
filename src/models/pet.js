const { Schema, model } = require('mongoose')

const petSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  ageinMonths: {
    type: Number,
    min: 1,
    required: true
  },
  size: {
    type: String,
    enum: [
      'small',
      'medium',
      'large'
    ],
    required: true
  },
  species: {
    type: String,
    requiered: true
  },
  breed: {
    type: String,
    pattern: /^[a-zA-z]{2-50}$/,
    required: true
  },
  description: {
    type: String,
    required: false,
    maxlength: 300
  },
  photo: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300
  },
  isAdopted: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    requiered: true
  },
  adopterUserId: {
    type: String,
    required: false
  }
})

module.exports = {
  schema: petSchema,
  model: model('Pets', petSchema)
}
