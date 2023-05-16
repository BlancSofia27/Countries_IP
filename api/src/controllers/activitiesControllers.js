const {Activity} = require('../db');
const {Country} = require('../db');

const getAllActivities = async ()=>{
    const result = await Activity.findAll({
        include:[{
            model: Country,
            attributes:["name"],//country attributes
            through:{ attributes:[]},//intermediate table attributes
        }],
     } );
    return result;
};

const createActivity = async (name, difficulty, duration, season) => {
     const newActivity = await Activity.create({name, difficulty, duration, season});
     return newActivity;
}

module.exports={
    getAllActivities,
    createActivity,
    
}