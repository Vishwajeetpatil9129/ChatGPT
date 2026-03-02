import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with database");
    }catch(err){
        console.log("Failed to connect with db", err);
    }
}

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
    connectDB();
});


// import OpenAI from 'openai';
// import 'dotenv/config';

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const response = await client.responses.create({
//   model: 'gpt-4o-mini',
//   input: 'Joke related to computer science',
// });

// console.log(response.output_text);