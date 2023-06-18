import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import Routes from './routes/route.js';

// const express = require('express');

// import { Connection } from '../app/src/service/database/db.js';
// import pkg from '../app/src/service/database/db.js';
// const { Connection } = pkg;

// const Connection = async () => {
//     const URL = 'mongodb://0.0.0.0:27017/users';
//     try{
//         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
//         console.log('Database connected succesfully'); 
//     } catch(error){
//         console.log('Error while connecting to database');
//     }
// }


const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded( { extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = 8000;

// const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/user-management", { useNewUrlParser: true, useUnifiedTopology: true } )
.then( () => console.log("Connection Successful"))
.catch( (err) => console.log(err) );

// Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));