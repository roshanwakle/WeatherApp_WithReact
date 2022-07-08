// import axios from "axios";
// import express from "express";
// const route = express.Router();

// const API_KEY  = "74f8cf364bb8557c47cbb569d5dad64f"


// route.get('/',async (req,res) => {
//     const location = req.body.city
//     console.log(location);
//     try {
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
//         console.log(response);
//       } catch (error) {
//         console.error(error);
     
//     }
// })

// module.exports = route


import express from 'express';
import axios from "axios";
const router = express.Router();
const API_KEY  = "74f8cf364bb8557c47cbb569d5dad64f"



router.post('/', async (req, res) => {
    res.send("Response");
    // const location = "pune"
    let location = await req.body.city;

    console.log(location,">>>>>>>>>>>>>>>>>>>>>>>>>>");
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
        console.log(response);
        // res.json(response);
        // res.json.stringify(response);

      } catch (error) {
        console.error(error);
     
    }
        
        
   
})


export { router }
