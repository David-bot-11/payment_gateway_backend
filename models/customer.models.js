import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const customerSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4, 
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    merchantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Merchant",
      required: true,
    },
    address: {
      type: String,
      default: "",
    },
    metadata: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);
