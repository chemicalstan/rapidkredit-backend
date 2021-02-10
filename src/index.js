import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(process.env.PORT, ()=>{
    console.log(`Application running on port ${process.env.PORT}`);
})

export default app