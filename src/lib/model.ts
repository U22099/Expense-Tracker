import mongoose from "mongoose";
import { type datatype, type datatype3 } from "@/store";

export interface Expense {
  data: datatype,
  expense: datatype3,
}

export interface UserType {
  _id: mongoose.Types.ObjectId;
  username: string,
  image: string,
  email: string,
  password: string,
  expenses: Expense,
  currency: string,
}

const userSchema = new mongoose.Schema < UserType > ({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  password: {
    type: String
  },
  expenses: {
    type: Object,
    default: {
      data: [],
      expense: [],
    },
  },
  currency: {
    type: String,
    default: "$"
  },
});

export const User: mongoose.Model < UserType > =
  mongoose.models.User || mongoose.model('User', userSchema);