const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller')

const {getAllHouses, createHouse, deleteHouse, updateHouse } = ctrl;

app.use(express.json());
app.use(cors());



app.get('/api/houses', getAllHouses);
app.delete('/api/houses/:houseId', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:Id', updateHouse )





const SERVER_PORT = 4004;
app.listen(SERVER_PORT, function(){ console.log( `fonz enters room AYEEEEEEEE in ${SERVER_PORT}` )})