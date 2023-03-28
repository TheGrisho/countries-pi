const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 const countryRouter= require("./Countries");
const activityRouter =require("./Activity");

router.use("/countries", countryRouter); 
router.use("/activity", activityRouter)


module.exports = router;
