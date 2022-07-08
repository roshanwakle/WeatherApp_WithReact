import axios from "axios";
import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

router.get("/", async (req, res) => {
  let API_KEY = process.env.API_KEY;
  let location = req.query.city;

  console.log(location, ">>>>>>>>>>>>>>");

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    console.log("-------------->>>>>>>>>", response.data);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

export { router };
