import express from 'express';
import http from 'http';
import bodyparser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

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



