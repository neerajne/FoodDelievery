import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://neeraj:dbneerajpassword@cluster0.pdxaufl.mongodb.net/FOODDELIEVERY').then(
            ()=>{
            console.log('Connected!');
        })
        
    } catch (error) {
        console.error('Connection error', error);
    }
};
