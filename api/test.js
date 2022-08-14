require('dotenv').config()
const express = require("express")
const axios = require("axios")

const router = express.Router()

router.get("/",(req,res)=>{
  console.log("Received request")
  axios({
    url:`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=${process.env.API_KEY}`,
    method:"GET"
  }).then((response)=>{
    console.log(response.data)
    let weatherContent={
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
      name: response.data.name,
      imageUrl:"http://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png",
      weather: response.data.weather[0].description
    }
    res.send(weatherContent)
  })


})

module.exports = router
