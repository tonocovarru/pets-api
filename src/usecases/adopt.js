const { model: Pet } = require('../models/pet')

const getAll = async () => {
  const allPets = await Pet.find({ isAdopted: true }).lean()
  const cleanPets = allPets.map((pet) => {
    const { ...cleanPet } = pet
    return cleanPet
  })

  return cleanPets
}

const adopted = (petId, petData) => Pet.findByIdAndUpdate(petId, petData)

module.exports = {
  getAll,
  adopted
}
