import dotenv from "dotenv"
import  connect_to_DB from './database/db.database.js';
import express from 'express';
dotenv.config({
    path:'./.env'
})

connect_to_DB()
.then((result) => {
 app.listen(process.env.PORT|| 3000,()  => {
    console.log(`Server is running at port:${process.env.PORT}`);
 })
    
}).catch((err) => {
    console.log("MongoDB connection failed:", err);
    
});