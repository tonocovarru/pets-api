
const express = require('express')

const pet = require('../usecases/adopt')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const pets = await pet.getAll()
    res.json({
      success: true,
      message: 'All adopted pets',
      payload: {
        pets
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot get pets',
      error: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newPetData = req.body
    const updatedPet = await pet.adopted(id, newPetData)
    res.json({
      success: true,
      message: 'Pet adopted',
      payload: {
        pet: updatedPet
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot adopted pet',
      error: error.message
    })
  }
})

module.exports = router
