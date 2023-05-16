// const getCountriesHandler = (req, res)=> {
//     res.send('ruta para obtener un arreglo de objetos(paises)');
// };
const  {getAllCountries, getCountryByName, getCountryById} = require('../controllers/countriesControllers')


const getCountriesHandler = async (req, res)=> {
    
    try {
        const allCountries = await getAllCountries();
        res.status(200).json(allCountries)
    } catch (error) {
        res.status(400).send(`err: ${error.message}`)
    }
};


const getCountryNameHandler = async (req, res)=> {
     const { name } = req.query;
     let countries;
        try {
            if (name){
                countries =  await getCountryByName(name)
                res.status(200).send(countries)
                
            } 
            
            }catch(error){
                res.status(400).send(`err: ${error.message}`)
            }

        }

const getCountryIdHandler = async (req, res)=> {
    const { id } = req.params;
    let countries
    try {
        if (id){
            countries =  await getCountryById(id)
            res.status(200).send(countries)
        } 
        }catch(error){
            res.status(400).send(`err: ${error.message}`)
        }

    }

module.exports={
   getCountriesHandler,
   getCountryNameHandler,
   getCountryIdHandler, 
}