let axios = require("axios")




let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//////////////////////////////////-2-///////////////////////////////////



let getweather = async function (req, res) {
    try {
        let Id = req.query.appId
        let Q = req.query.Q
        console.log(`query params are: ${Id} ${Q}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${Q}&appid=${Id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let weather = async function (req, res) {

    try {
        let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let xyz=[]
        for(let i=0;i<cities.length;i++){
          let abc ={city :cities[i]}  
        
        let Id = req.query.appId
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${Id}`
        }
        let result = await axios(options);
        console.log(result.data.main.temp)
        abc.temp = result.data.main.temp
        xyz.push(abc)
    }
    let ans =xyz.sort(function(a,b){
        let arr =a.temp-b.temp
    return arr})
        return res.status(200).send({ msg:ans })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ msg: err.message })
    }
}

/////////////////////////////////////////-3-////////////////////////////////////////////////

let getallmemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let creatmemes = async function (req, res) {

    try {
        let meme=req.query.memeId
        let text0=req.body.text0
        let text1=req.body.text1

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${meme}&text0=${text0}&text1=${text1}&username=amartya36&password=amartya36`
        }
        let result = await axios(options);
        console.log(result.data.data)
        let data = result.data.data
        return res.status(200).send({ data: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}








module.exports.getByPin = getByPin

module.exports.getweather = getweather
module.exports.weather = weather

module.exports.getallmemes = getallmemes
module.exports.creatmemes = creatmemes