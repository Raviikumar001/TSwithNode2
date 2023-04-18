import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import mongoose, { Mongoose } from 'mongoose';
const app = express();

app.use(cors({
    credentials: true
}));


app.use(compression());
app.use(cookieParser());
app.use(bodyparser.json());

const server = http.createServer(app);
server.listen(5000, ()=> {
    console.log("server running on 5000");
});

const MONGO_URL ="mongodb+srv://ravisite1:ravi1234@cluster0.ggluuhi.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error)=>{
    console.log(error);
})      

app.use("/",router());

