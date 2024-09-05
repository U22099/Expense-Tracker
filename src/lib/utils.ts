import mongoose from 'mongoose';

const connection: {
    [index: string]: unknown
} = {};

export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.DATABASE_URL);
        connection.isConnected = db.connections[0].readyState;
    } catch(e) {
        console.log(e)
        throw new Error(e);
    }
}