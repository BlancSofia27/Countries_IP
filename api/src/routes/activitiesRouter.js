const { Router } = require('express')
const {
    getActivitiesHandler,
    createActivitiesHandler,
} = require('../handlers/activitiesHandlers')
const activitiesRouter = Router()

activitiesRouter.get('/activities', getActivitiesHandler)

activitiesRouter.post('/activities', createActivitiesHandler)


module.exports= activitiesRouter;


