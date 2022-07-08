import express from 'express'
const app = express()
import cors from 'cors'
import { router } from "./routes/weatherRoute.js";


app.use(express.json())
app.use(cors())



app.use('/weather' ,router)

const port =4000

app.listen(port, () => {
    console.log(`server connected at ${port}`);
  });