import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const orderSchema = new mongoose.Schema({
    id: { 
        type: String,
        default: uuidv4
    },
    merchantId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Merchant",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: "INR"
    },
    razorpayOrderId: { 
        type: String
    },
    status: {
        type: String,
        enum: ["created", "processing", "paid", "failed", "refunded"],
        default: "created"
    },
    customerDetails: { 
        name: String,
        email: String,
        phone: String
    },
    metadata: { 
        type: Object,
        default: {}
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);