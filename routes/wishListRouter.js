const express = require('express')
const wishListRouter = express.Router()
const {getCountries, getCountry, addCountry, editCountry, deleteCountry} = require('../callbackFunctions/callbackFunctions')

wishListRouter.get('/', getCountries)
wishListRouter.get('/:code', getCountry)
wishListRouter.post('/', addCountry)
wishListRouter.put('/:code', editCountry)
wishListRouter.delete('/:code', deleteCountry)

module.exports = wishListRouter