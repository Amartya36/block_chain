const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/cowin/getByPin", CowinController.getByPin)

////////////////////-2-/////////////////////////

router.get("/getweather", CowinController.getweather)
router.get("/weather", CowinController.weather)

///////////////////-3-////////////////////////////

router.get("/getallmemes", CowinController.getallmemes)
router.post("/creatmemes", CowinController.creatmemes)




module.exports = router;