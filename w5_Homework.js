function getTemperature(cityName) {
  let apiKey = "90806a3fd896ea3247944decfe54f180";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response);
  let temperature = document.querySelector("#degree");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let curCity = document.querySelector("#search-input");
  let userCity = document.querySelector("#cityName");
  userCity.innerHTML = `${curCity.value}`;
  let humidity = document.querySelector("#curHumidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#speedWind");
  wind.innerHTML = response.data.wind.speed;
  let myLocation = document.querySelector("#cityName");
  myLocation.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
}
function getCity(city) {
  city.preventDefault();
  let cityName = document.querySelector("#search-input").value;
  getTemperature(cityName);
}
let cityName = document.querySelector("#searchForm");
cityName.addEventListener("submit", showTemperature);
let searchButtuon = document.querySelector("#inputButton");
searchButtuon.addEventListener("click", getCity);

let now = new Date();

function nowDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let formatedDate = `${day} ${hour}:${minute}`;
  return formatedDate;
}

let currentDate = document.querySelector("#dateTime");
currentDate.innerHTML = nowDate(now);

function showPosition(position) {
  let myLat = position.coords.latitude;
  let myLon = position.coords.longitude;
  let apiKey = "90806a3fd896ea3247944decfe54f180";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let curLocation = document.querySelector("#locationButton");
curLocation.addEventListener("click", getLocation);
