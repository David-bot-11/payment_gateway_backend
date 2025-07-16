import dotenv from "dotenv"
//import {app} from './app.js'
import { connect_to_DB } from './database/db.database.js';

dotenv.config({
    path:'./.env'
})

connect_to_DB()
try {
    const checkConnection = await app.listen(process.env.PORT, () => {
       console.log(`Server is running on port ${process.env.PORT}`, checkConnection.address().port); 
    });
} catch (error) {
    throw new Error("Mongo DB connection failed",error)
}