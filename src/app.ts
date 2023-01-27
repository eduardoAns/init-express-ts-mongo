import "dotenv/config"
import express from 'express'
import cors from 'cors'
import {router} from "./routes"
import db from "./config/mongo"

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json()) // para recibir datos en json por body
app.use(router);

db().then(()=>{console.log("conneccion db lista")})
app.listen(PORT, () => console.log('listening on port', PORT));

