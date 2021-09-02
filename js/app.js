// the weather api key
const API_KEY = `3077b8530089d4e162d071e6e83b154f`;

// in this function we are fetching the weather api data
const temperatureSearch = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}

// taking input of id and text for the innertext value
const setHtmlInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// in this function we are displaying the weather temperature details.
const displayTemperature = weather => {
    console.log(weather);
    // set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', iconUrl);

    setHtmlInnerText('show-city-name', weather.name);
    setHtmlInnerText('temperature', weather.main.temp);
    setHtmlInnerText('weather-condition', weather.weather[0].main);

    //display the weather information
    const displayInformation = document.getElementById('display-information');
    displayInformation.style.display = "block";
}