import mongoose from "mongoose";

let isConnected = false

export const connectDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("mongodb is already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'share_prompt'
        })
        isConnected = true
        console.log("mongodb connected")
    } catch (error) {
        console.log(error.message)
    }
}