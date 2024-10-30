import mongoose from 'mongoose';
import axios from "axios";

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
        throw new Error(String(e));
    }
}

export async function fetchUser(setUser: any){
    try{
        const response = await axios.get('api/user');
        const data = response.data;
        if(response.status === 200.) setUser(data.user);
    } catch(e){
        console.log(e);
    }
}