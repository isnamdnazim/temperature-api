const API_KEY = `3077b8530089d4e162d071e6e83b154f`;

const temperatureSearch = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}

const setHtmlInnerText = text => {

}

const displayTemperature = weather => {
    console.log(weather);
}