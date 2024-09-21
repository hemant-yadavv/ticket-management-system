require('dotenv').config();

// server initialization
const express = require('express');
const app = express();

// load dotenv file
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const ticketRoute = require('./routes/ticket');

// mount the todo API routes
app.use('/api/v1', ticketRoute);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to the database
const dbConnect = require('./config/database');
dbConnect();

// default route
app.get("/", (req, res) => { 
    res.send(`<h1>Analog Powertech Engineering Nodejs task</h1>`);
})