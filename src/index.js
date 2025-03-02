/*

require('dotenv').config({path: './env'})

this will run but the consistency of the code is getting hindered as instead of import we are using the require syntax
*/

//has the same consistency as the entire code
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js";

connectDB();

/*FIRST aprroach , do everything in the index file
                doesnt create modularity but is easier to read

import express from "express"
const app=express()


;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR : ",error)
        throw err
    }
})()
    */
