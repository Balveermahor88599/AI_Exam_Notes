import express from "express"
import dotenv from "dotenv"
dotenv.config()


const app=express()
const PORT = process.env.PORT
app.get("/",(res,req)=>{
    req.json({message:"AI Examnotes running Backend Server"})
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})