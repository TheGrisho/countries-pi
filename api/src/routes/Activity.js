const { Router } = require('express')
const router = Router();
const { Activity, Country } = require("../db.js");
const { getActivities } = require("../Controllers/getApiInfo.js")

//aqui que?, donde saco las actividades?. 
//son post XDDDDD, ruta de post: name, difficulty, duration, season, countryId  req.BODY<<<<----no olvidar.  

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countryId,  } = req.body
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countryId,
    })
    const countries = await Country.findAll({
        where: {
            id: countryId,
        }
    })
    createActivity.addCountries(countries)
    res.status(200).send(createActivity)

})

router.get('/', async (req, res) => {
    const activities = await getActivities()
    res.status(200).send(activities)
})

module.exports = router;