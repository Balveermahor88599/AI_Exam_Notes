import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MoNGODB_URI)
    } catch (error) {
        
    }
}