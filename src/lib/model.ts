import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    password: {
        type: String
    },
    expenses: {
        type: Object,
        default: {}
    },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);