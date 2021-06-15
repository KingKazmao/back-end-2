const houses =  require('./db.json')

let id = 4;

module.exports = {
 getAllHouses: function (req, res){
     res.status(200).send(houses)
     },
 
 createHouse: function (req, res){ 
     const {address, price, imageURL } =  req.body;
     const newHouses = { id, address, price, imageURL} 

     houses.push(newHouses);
     id++;
     res.status(200).send(houses); 
},
 
 deleteHouse: function (req, res){
   const tgtIndex = houses.findIndex(function(houseObj){
       return houseObj.id === +req.params.houseId});

   houses.splice(tgtIndex,1)
   
   res.status(200).send(houses);
 },
 
 updateHouse: function (req, res){
    let { type } = req.body;
    //let {id} = req.params;
    const index = houses.findIndex(function(houseObj){
        return houseObj.id === +req.params.id});

        if(houses[index].price <= 10000 && type === 'minus'){
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        }  else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else{
            res.sendStatus(400)
        }

    //
    
    
    
    //for(let i = 0; i < price.length; i++)

     //const tgtIndex = house/findindex(function(houseObj){
        // return houseObj.id === +req.params.houseId});

     
     
     
        }
}


// 