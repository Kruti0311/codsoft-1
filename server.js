// packages import
//const express = require("express");
import express from 'express';
import { fileURLToPath } from 'url';
import open from 'open';
import { Collection } from 'mongodb';
import 'express-async-errors';
//import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
//files imports
import connectDB from './config/db.js';
//routes import
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middelwares/errorMiddleware.js';
import jobsRoutes from './routes/jobsRoutes.js';
import userRoutes from './routes/userRoutes.js';

//dot env config
dotenv.config();
//mongodb connection
connectDB();
//rest object
const app = express();


const users = [];
app.use(express.urlencoded({ extended: false }))


/*
app.get('/',(req,res)=>{
    res.render('Home.js');
});


app.get('/about',(req,res)=>{
    res.render('about.ejs');
});

app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
});

app.get('/Jobs',(req,res)=>{
    res.render('Jobs.js');
});

app.get('/Login',(req,res)=>{
    res.render('Login.js');
});



/*
app.get('/viewcompany',(req,res)=>{
    res.render('view_company.ejs');
});

app.get('/viewjob',(req,res)=>{
    res.render('view_job.ejs');
});*/
//console.log.apply('directory name',__dirname);
//console.log(path.join(__dirname,'/public','Home.html'));
//middelwares

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
//routes
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/job', jobsRoutes);

//validatio middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8000;
//listen
app.listen(PORT, () => {
    console.log(`Node server running In ${process.env.DEV_MODE} mode on port ${PORT}`);
    open(`http://localhost:${PORT}`);
});