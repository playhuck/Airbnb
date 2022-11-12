import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

require('dotenv').config()

const port = 3000 || process.env.PORT

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/' , (req : Request, res : Response, next : NextFunction) => {
    res.send("안녕하세요 최윤지는 말미잘입니다.")
})

app.listen(port, () => {
    console.log(`This Server Start Port : ${port}`);
});