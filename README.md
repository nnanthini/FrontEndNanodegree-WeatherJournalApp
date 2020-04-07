# Weather Journal App

## About

This Weather Journal app will display the following, when user clicks on the Generate button.
	- Temperature and date fetched from OpenWeatherMap API based on the pincode entered by the user.
	- User response entered in the feelings textarea.

## Implementation Details

### Server

1. The server is listening at localhost:8000
2. The server has POST route to receive and store data from the browser.
3. The server has GET route to send stored data to the browser.

### Application

1. Application fetches temperature and date from OpenWeatherMap API, based on the pincode.
2. Temperature conversion from Kelvin to Celsius format.
3. Date conversion from milliseconds to MM-DD-YYY format.
4. Temperature and date from the API and the user input details in textarea are stored in server and fetched to populate the Most Recent Entry section.

### Style changes in JavaScript and CSS

1. On clicking the textarea, the placeholder text vanishes.
2. Flex display added for some of the elements.
3. Background, border and font changes done in CSS.


## API Details

OpenWeatherMap API - By ZIP code