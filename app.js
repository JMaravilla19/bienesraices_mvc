//Import the packages: OLD WAY
//const express  = require('express'); //COMMON JS
// NEW WAY:
//Ecmascript Modules.
import express from 'express';
import userRoutes from './Routes/UserRoutes.js';

//Create the App:
//This contains all the express values
const app = express();

//Enable PUG
app.set('view engine', 'pug');
app.set('views', './views');

//This will help us to define file upload, cookies, etc.
//This is known as Express Middleware.
//app.use will search fo all routes that start with "/"
app.use('/auth', userRoutes);




//Define a port and run the project
const port = 3000;
app.listen(port, ()=>{
    console.log(`The Server is listening in port: ${port}`);
})

