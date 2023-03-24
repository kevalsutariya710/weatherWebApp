const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'Enter API key',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
         
            temp.innerHTML = response.temp
            humidity.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

// getWeather(city)
