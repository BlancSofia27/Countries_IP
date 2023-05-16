const { Op } = require('sequelize');
const { Country } = require('../db');
const axios = require ('axios');




const databaseCountries =  async () =>{
    try{
    const {data} = await axios(`https://restcountries.com/v3/all`);
    console.log(data[0])
    const allCountries =[] 
    await data.map(country => {
        allCountries.push({
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continent: country.continents[0],
            capital: country.capital? country.capital[0] : 'este pais no tiene capital',
            subregion: country.subregion,
            area: country.area,
            population: country.population
        })
        });

        
        await Country.bulkCreate(allCountries);
    } catch(error) {
        throw Error(`error:${error.message}`)
    }

    
    return 'ok';
}

const getAllCountries = async ()=>{
    const result = await Country.findAll()
    return result;
}


const getCountryByName = async (name)=>{
    return await Country.findAll({ where: {
        name: {[Op.iLike]: `%${name}%` },
    }});
    
}

const getCountryById = async (id)=>{
    const result = await Country.findAll({ where:{
        id: {[Op.iLike]: `%${id}%` },
}})
    return result;
}



module.exports= {
    databaseCountries,
    getAllCountries,
    getCountryByName,
    getCountryById,
};
