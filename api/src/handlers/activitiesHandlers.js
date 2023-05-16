const {createActivity, getAllActivities} = require('../controllers/activitiesControllers')


const getActivitiesHandler = async (req, res)=> {
        try {
            const allActivities = await getAllActivities();
            res.status(200).json(allActivities)
        } catch (error) {
            res.status(400).send(`err: ${error.message}`)
        }
    };
    

const createActivitiesHandler = async (req, res)=> {
    
    const {name, difficulty, duration, season, countries} = req.body;
    try{
    const newActivity = await createActivity(name, difficulty, duration, season, countries);
    await newActivity.addCountries(countries)
    res.status(201).json(newActivity);
} catch(error){
        res.status(404).json(`err: ${error.message}`);
    }
};

module.exports={
    getActivitiesHandler,
    createActivitiesHandler,
}