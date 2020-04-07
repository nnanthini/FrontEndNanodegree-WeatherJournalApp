// Setup empty JS object to act as endpoint for all routes
var projectData = {};

// Require Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =  require('cors')
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
app.listen(port, listening);

function listening() {
    console.log(`Server is running... localhost:${port}`);
}

//GET route
app.get('/all', sendData);

function sendData(request, response) {
    console.log(`Inside GET route... 
    Sending projectData... ${projectData}`);
    response.send(projectData);
}

//POST route
app.post('/addData', receiveData);

function receiveData(request, response) {
    console.log('Inside POST route...' + 
    'Received data from client', request.body);
    projectData = {
        temperature: request.body.temperature,
        date: request.body.date,
        userResponse: request.body.userResponse
    };
    console.log('projectData populated after POST route... ', projectData);
}