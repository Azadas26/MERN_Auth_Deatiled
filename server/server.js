import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import {connectDB}  from './config/mongodb.js';
import UserRouter from '../server/routes/userRoute.js'

const app = express();
const port = process.env.PORT || 4000;



app.use(express.json());
app.use(cookieParser())
app.use(cors({credentials:true}));
connectDB();

app.use('/',UserRouter);

app.listen(port,()=>console.log("Server running on Port",port));