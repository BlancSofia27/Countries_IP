const { Router } = require('express');
const {
    getCountriesHandler,
    getCountryNameHandler,
    getCountryIdHandler,
} = require('../handlers/countriesHandlers')
const countriesRouter = Router()
const validate = require('../middlewares/validations')


countriesRouter.get('/countries', getCountriesHandler)

countriesRouter.get('/countries/name', validate, getCountryNameHandler)

countriesRouter.get('/countries/:idPais', validate, getCountryIdHandler)


module.exports = countriesRouter;


