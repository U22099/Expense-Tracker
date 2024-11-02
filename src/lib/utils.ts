import mongoose from 'mongoose';
import axios from "axios";
import { type datatype, type datatype3 } from "@/store";

const connection: {
    [index: string]: unknown
} = {};

export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.DATABASE_URL as string);
        connection.isConnected = db.connections[0].readyState;
    } catch(e) {
        console.log(e)
        return false;
    }
}

export async function fetchUser(setUser: any){
    try{
      const response = await axios.get('api/user');
      const data = response.data;
      if(response.status === 200) setUser(data.user);
    } catch(e){
      console.log(e);
      return false;
    }
}

export async function fetchData(setData: any) {
  try {
    const response = await axios.get('api/data');
    if(!response.data) return false;
    const data = response.data as {
      data: datatype
    };
    if (response.status === 200 && data.data.length > 0) setData(data.data);
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function fetchExpenseData(setExpense: any) {
  try {
    const response = await axios.get('api/data');
    if (!response.data) return false;
    const data = response.data as {
      data: datatype3
    };
    if (response.status === 200) setExpense(data.data);
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function updateData(data: datatype) {
  try {
    const response = await axios.post('api/data', { data });
    if (response.status === 200) return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function updateUser(data: any) {
  try {
    const response = await axios.post('api/user', { data });
    if (response.status === 200) return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function updateExpenseData(data: datatype3) {
  try {
    const response = await axios.post('api/expense', { data });
    if (response.status === 200) return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
