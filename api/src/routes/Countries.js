const { Router } = require('express')
const router = Router();
const { Country, Activity } = require('../db.js');
const { getDbInfo } = require("../Controllers/infoApi.js")
//pendientes:
//starwith=empieza con para las req...googlear      
//  uso  normalize googlea
//Filter
const matches=(countryName, requestName)=>{
   countryName= countryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
   requestName= requestName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if( countryName.toLowerCase()==requestName.toLowerCase()
    || countryName.toLowerCase().startsWith(requestName.toLowerCase()))
    {
        return true;
    }else{
        return false; 
    }
}

router.get('/', async (req, res) => {
    const {name} = req.query
    let countriesTotal = await getDbInfo();
    if (name) {
        let countryName = await countriesTotal.filter(el => 
        matches(el.name, name));

        countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send("Pais no encontrado");
    } else {
        res.status(200).send(countriesTotal);
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    let countriesTotal = await getDbInfo();
    if(id.length!==3){
        res.status(404).send("El id de pais solo son 3 caracteres");
        return; 
    }
    if (id) {
        let countryId = await countriesTotal.filter(el =>
            matches(el.id, id));   
        countryId.length ?
            res.status(200).send(countryId) :
            res.status(404).send("Pais no encontrado");
    }
})

module.exports = router;

