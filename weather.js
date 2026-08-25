// 0.1 Must get your App id/key from the weather app!
const APP_ID = "6c92493c697ada635929c84c405d69a7";   

// 1.Need to find elements from the html page
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const fulfilledResult = document.getElementById("fulfilledResult");
const rejectedResult = document.getElementById("rejectedResult");

const cityWeatherCelsius = document.querySelector(".cityDegreeCelcius");
const cityName = document.querySelector(".cityName");
const weatherIcon = document.querySelector("#CityWeatherIcon");

const feelsLikeDegree = document.querySelector(".feelsLikeDegreeCelsius");

const rejectedResultTitle = document.querySelector(".rejectedResultTitle");
const rejectedResultSubTitle = document.querySelector(".rejectedResultSubTitle");

// 2. Create Event Listener on click button
searchBtn.addEventListener("click", getWeather);//чтобы запустить следующую функцию

async function getWeather(event) {
   event.preventDefault();

   const city = cityInput.value.trim(); //берем инпут, трим поможет убрать пробелы 

   // If input is empty alert
   if(city === ""){
      alert("Enter the city please!");
      return
   }

   loading.style.display = "block"; //показать загрузку и заблок. кнопку пока грузится 
   searchBtn.disabled = true;

   //вставили универсальную формулу для поиска 
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`;

   const response = await fetch(url);
   const data = await response.json();
   if (response.ok) {
      // Clear and Reset inputs to default
      rejectedResult.style.display = "none"; // hide the error
      loading.style.display = "none"; // hide loading
      searchBtn.disabled = false;

      // Get specific data from API
      let cityWeatherCelsiusFromAPI = data.main.temp;
      let cityFromAPI = data.name;
      let weatherIconFromAPI = data.weather[0].icon;
      let feelsLikeDegreeFromAPI = data.main.feels_like;

      // Show that data in the page
      cityWeatherCelsius.textContent = `${cityWeatherCelsiusFromAPI}°C`
      cityName.textContent = `${cityFromAPI}`;
      weatherIcon.src = `http://openweathermap.org/img/w/${weatherIconFromAPI}.png`;
      feelsLikeDegree.textContent = `${feelsLikeDegreeFromAPI}°C`;

      fulfilledResult.style.display = "flex"; //show the weather
   } else {
      // Reset and Clear Inputs
      fulfilledResult.style.display = "none"; // Hide fulfilled result
      loading.style.display = "none"; // hide loading
      searchBtn.disabled = false;

      // Get Specific Error Message from API
      let rejectedResultSubTitleFromAPI = data.message;
      let rejectedResultCodeFromAPI = data.cod;

      // Show those messages in thr page
      rejectedResultTitle.textContent = `API Error: ${rejectedResultCodeFromAPI}`;
      rejectedResultSubTitle.textContent = `${rejectedResultSubTitleFromAPI.toUpperCase()}!`;

      rejectedResult.style.display = "flex"; // show an error
   }
}