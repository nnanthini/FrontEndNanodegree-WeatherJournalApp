/* Global Variables */
// API URL format - http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
var zip = 0;
const apiKey = '&appid=bf0c75e548c5f34840f100d04f018c64';

// Remove the placeholder text in inupt boxes
document.getElementById('zip').addEventListener('click', removePlaceHolderOnClick);
document.getElementById('feelings').addEventListener('click', removePlaceHolderOnClick);

// Click event on Generate button
document.getElementById('generate').addEventListener('click', getZip);

function getZip(event) {
    zip = document.getElementById('zip').value;
    getDataFromAPI(baseURL, zip, apiKey)
    .then(function(dataFromAPI){
        var dataFormatToBeSent = {};
        console.log(`Data from API : 

        `);
        
        dataFormatToBeSent.temperature = (parseFloat(dataFromAPI.main.temp) - 273.15).toFixed(2) + ' C';
        let d = new Date(dataFromAPI.dt);
        let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();        
        dataFormatToBeSent.date = newDate;
        dataFormatToBeSent.userResponse = document.getElementById('feelings').value;

        console.log(dataFormatToBeSent);
        
        pushDataToServer('/addData', dataFormatToBeSent);
        updateUI();
    });
}

// Get data from OpenWeatherMap API
var getDataFromAPI = async (baseURL, zip, apiKey)=>{
    const url = baseURL + zip + apiKey;
    console.log(`URL is ${url}`)
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log('Data from webAPI ');
        console.log(data);
        return data;
    }catch(error) {
        console.log('Error in getDataFromAPI() ' + error);
    }
};

var pushDataToServer = async (url = '', data = {})=>{
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const data = await response.json();
        return data;

    }catch(error) {
        console.log('Error in pushDataToServer() ' + error);
    }

};

const updateUI = async () => {
    const response = await fetch('/all');
    try {
        const fetchedDataFromServer = await response.json();
        document.getElementById('temp').innerText = `Temperature is : ${fetchedDataFromServer.temperature}`;
        document.getElementById('date').innerText = `Date is : ${fetchedDataFromServer.date}`;
        document.getElementById('content').innerText = `User Response is : ${fetchedDataFromServer.userResponse}`;
        document.getElementById('entryHolder').style.background = '#3b4a6b';
    }catch(error) {
        console.log('Error in updateUI() ' + error);
    }
};

function removePlaceHolderOnClick(event) {
    document.getElementById(event.target.id).removeAttribute('placeholder');
}