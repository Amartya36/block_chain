const axios=require("axios");
const coinModel = require("../models/coinModel.js");


exports.getCoins=async function(req,res){
  try
   { let options={
        method:"get",
        url:"https://api.coincap.io/v2/assets"
    }
    let result= await axios(options)
    let data=result.data.data.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr})

    let a=[];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let uniqueName= await coinModel.findOneAndUpdate({name:element.name},{$set:element},{upsert:true,new:true})
        a.push(uniqueName)
    }  
    await coinModel.deleteMany({_id: { $nin: a.map((i) => i._id), },})
    return res.status(200).json({status:true,msg:a})}
    catch (error) {return res.status(500).send({msg:error.message})
}}
