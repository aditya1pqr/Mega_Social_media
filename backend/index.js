import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import  connectDB from "./utils/db.js"
dotenv.config({});

const PORT = process.env.PORT || 3000




const app =  express();


app.get('/',(req,res)=>{
   
   return  res.status(200).json({
        message: "Hello i am from backend",
        success: true
    })
})
const corsOptions = {
    origin: "http://localhost:5173",
    credentials:true
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(urlencoded({extended:true}))

app.listen(PORT,()=>{
 connectDB();
    console.log(`server is listen at port ${PORT}`);

})
