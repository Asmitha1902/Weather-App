const apiKey ="04e6db70c28f0f5b7c4d351f44b43409";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWheather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "*C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

        if(data.weather[0].main =="Clouds"){
            weatherIcon.src = "img/clouds.png";
            document.body.style.backgroundImage = "url('img/cloudy-bg.jpg')";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png";
            document.body.style.backgroundImage = "url('img/clear-bg.jpg')";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.png";
            document.body.style.backgroundImage = "url('img/rainy-bg.jpg')";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.png";
            document.body.style.backgroundImage = "url('img/drizzle-bg.jpg')";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.png";
            document.body.style.backgroundImage = "url('img/mist-bg.jpg')";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "img/snow.png";
            document.body.style.backgroundImage = "url('img/snow-bg.jpg')";
        }
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
});

checkWheather();

