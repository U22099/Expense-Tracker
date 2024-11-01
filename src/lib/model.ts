import mongoose from "mongoose";
import { type datatype, type datatype2 } from "@/store";

export interface Expense {
  data: datatype;
  days: datatype2;
  weeks: datatype2;
  months: datatype2;
}

export interface UserType {
  _id: mongoose.Types.ObjectId;
  username: string;
  image: string;
  email: string;
  password: string;
  expenses: Expense;
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
      days: [],
      weeks: [],
      months: [],
    },
  },
});

export const User: mongoose.Model < UserType > =
  mongoose.models.User || mongoose.model('User', userSchema);