const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    requiered: true
  },
  lastname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    requiered: true
  },
  type: {
    type: String,
    enum: [
      'admin',
      'adopter'
    ],
    required: true,
    default: 'adopter'
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 200
  },
  address: {
    type: String,
    requiered: true,
    minlength: 2,
    maxlength: 200
  },
  phone: {
    type: String,
    requiered: true,
    maxlength: 15,
    pattern: /^[0-9]{0-15}$/
  },
  email: {
    type: String,
    requiered: true,
    minlength: 5,
    maxlength: 250,
    unique: true
  },
  age: {
    type: Number,
    requiered: true,
    min: 18
  }
})

module.exports = {
  schema: userSchema,
  model: model('User', userSchema)
}
