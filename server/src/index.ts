import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import compression from "compression"

const app = express();
const PORT = 5000;
app.use(cors({
    credentials:true
}))
app.use(compression());
app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome!");
})

app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}` )
})