import express, { json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app =  express();
const PORT = 3000;

app.get('/',(req,res)=>{
   
   return  res.status(200).json({
        message: "Hello i am from backend",
        success: true
    })
})
const corsOptions = {
    origin: "http://localhost:5173",
    Credential:true
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);

})
