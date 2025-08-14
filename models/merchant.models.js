import mongoose from "mongoose"
import { v4 as uuidv4 } from 'uuid';

const merchantSchema = new mongoose.Schema({  id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        
    },
    apiKey: {
        type: String,
        required: true
    },
    secretKey: {
        type: String,
        required: true
    },
    webhookUrl: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    metadata: {
        type: Object,
        default: {}
    }
},{timestamps: true})

export const Merchant = mongoose.model("Merchant",merchantSchema)