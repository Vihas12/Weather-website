
const url = 'http://api.weatherapi.com/v1/current.json?key=0703127a299c462b990153039242306&q=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0703127a299c462b990153039242306',
        'x-rapidapi-host': 'api.weatherapi.com'
    }
};

const getWeather = (city)=> {
cityName.innerHTML = city
fetch(url + city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        

        feelslike_c.innerHTML = response.current.feelslike_c
        humidity.innerHTML = response.current.humidity
        humidity1.innerHTML = response.current.humidity
        temp_c.innerHTML = response.current.temp_c
        temp_c1.innerHTML = response.current.temp_c
        precip_mm.innerHTML = response.current.precip_mm
        dewpoint_c.innerHTML = response.current.dewpoint_c
        wind_degree.innerHTML = response.current.wind_degree
        vis_km.innerHTML = response.current.vis_km
        wind_kph.innerHTML = response.current.wind_kph
        wind_kph1.innerHTML = response.current.wind_kph
        press.innerHTML = response.current.pressure_in

    })
    .catch(err => console.error(err));
}
// let city = document.getElementById('search')
// console.log(city)

search.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("New Delhi")