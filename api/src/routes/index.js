const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 const countriesRouter= require("./Countries");
const activityRouter =require("./Activity");

router.use("/countries", countriesRouter); 
router.use("/activity", activityRouter)


module.exports = router;
