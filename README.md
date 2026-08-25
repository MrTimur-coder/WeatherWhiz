# WeatherWhiz
A simple and modern weather dashboard built with HTML, CSS, and JavaScript. This project fetches real-time weather information from the OpenWeatherMap API and displays the current temperature, feels-like temperature, and weather icon for a selected city.


![Weather App Preview](./imgs/weatherApp.png)

## Demo

Search any city to see its current weather conditions, including:
- temperature
- feels-like temperature
- weather icon
- loading and error states

## Features

- Search weather by city name
- Display current temperature in Celsius
- Show feels-like temperature
- Fetch live weather data from an API
- Display a weather icon for the current condition
- Loading indicator while data is being fetched
- Error message when a city is invalid or the API request fails
- Responsive layout for different screen sizes

## Tech Stack

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Project Structure

```text
Weather-App/
├── index.html
├── styles.css
├── weather.js
├── imgs/
│   ├── weather-bg.jpg
│   ├── weatherApp.png
│   └── feels-like-icon.png
├── README.md
└── .gitignore
```

## How It Works

1. The user enters a city name in the search field.
2. The app sends a request to the OpenWeatherMap API.
3. If the request succeeds, the page updates with:
   - city name
   - current temperature
   - feels-like temperature
   - weather icon
4. If the request fails, an error message is displayed.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/MrTimur-coder/Weather-App.git
```

### 2. Open the project
Open the folder in VS Code and run it with a local server such as Live Server.

### 3. API key
The project uses an API key in `weather.js`:

```js
const APP_ID = "6c92493c697ada635929c84c405d69a7";
```

If you want to use your own API key, replace this value with your OpenWeatherMap API key.

## Run the App

You can run the app in either of these ways:

- open `index.html` directly in a browser, or
- use Live Server in VS Code

## Usage

1. Type a city name, for example: `London`, `Paris`, or `Istanbul`
2. Click the Search button
3. The weather data for that city will appear on the screen

## Learning Goals

This project is useful for practicing:
- DOM manipulation
- JavaScript events
- `fetch()` API requests
- `async/await`
- conditional rendering
- form handling and UI states

## License

This project is intended for educational purposes.

## Author

Created by Timur as a frontend learning project.
