const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const Country = require('./models/Country.js');
const countriesRouter = require('./routes/countriesRouter.js')
const activitiesRouter = require('./routes/activitiesRouter.js')

require('./db.js');

const server = express();

server.name = 'API';
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.use('/', countriesRouter);
server.use('/',activitiesRouter);

server.use('*',(req, res)=>{
  res.status(404).json({error:'Not Found'})// en caso de ir a una ruta no registrada se envia un error 404
})
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// create activities to the country
/*server.post("/addActivities", async (req, res) =>{
  const { nameCountry, activity } = req.body;
  try{
    const newCountry = await Country.create({ nameCountry });
    await newCountry.addActivity(activity);
    res.status(201.).json(newCountry);
    }catch (error){
      res.status(400).json({error: err.message});
    }
});*/

module.exports = server;
