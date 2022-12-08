const express = require('express');
const router = express.Router();
const CoinController= require("../controllers/coinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/exchanges", CoinController.getCoins)






module.exports = router;