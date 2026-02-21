import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MoNGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

export default connectDb;