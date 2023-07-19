const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2870210322msh947f4712f39c262p1cf107jsn4c48efe0ed53',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const getWeather = (city) => {
    headerCity.innerHTML = city
    fetch(`${url}?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        // console.log(response)

    })
    .catch(err => console.error(err))
} 

// let city = prompt("Enter City name: ")
// city = 'Delhi'

// getWeather(city)
submit.addEventListener('click', (e)=>{
    e.preventDefault()
    getWeather(searchCity.value)
})


getWeather("Delhi")
