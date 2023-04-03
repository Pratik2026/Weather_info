var temp = document.getElementById('temp');
var cloud_pct = document.getElementById('cloud_pct');
var feels_like = document.getElementById('feels_like');
var humidity = document.getElementById('humidity');
var min_temp = document.getElementById('min_temp');
var max_temp = document.getElementById('max_temp');
var wind_speed = document.getElementById('wind_speed');
var wind_degrees = document.getElementById('wind_degrees');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17baed8b5bmsh2501b993a4d2d2ep105271jsne5c3070d4b6f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const weather = (city)=> {
	if (city == ""){
		city = "Jabalpur";
	}
    addcity.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
  .then((response) => {
	   return response.json();
  })
  .then((response) => {
    console.log(response);
    
    temp.innerHTML = response.temp
	cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees

})
  .catch((err) => console.error(err));
}

btn.addEventListener("click",(e)=>{
    e.preventDefault()
	weather(cityname.value)
})

weather("Jabalpur");

function control(e){
	if (e.keyCode === 13){
	   weather(cityname.value);
	}
}

document.addEventListener("keydown",control);