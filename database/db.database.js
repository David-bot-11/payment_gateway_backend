import express from 'express';
import mongoose from 'mongoose';




const connect_to_DB =async () => {
    
    try {
        const connectionStart= await mongoose.connect(`${process.env.MONGODB_URI}`);-
        console.log("Connected to the database successfully:", connectionStart.connection.host);
        
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);

    }
    
}


export default connect_to_DB