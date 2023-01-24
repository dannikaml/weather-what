var weatherApiUrl = 'https://api.openweathermap.org';
var searchHistory = [] ;
var weatherApiKey = "2426dafbf5650e058600143b6991df39";

var searchInput = document.querySelector('#search');
var todayBlock = document.querySelector('#today');
var forecastBlock = document.querySelector('#forecast');
var searchHistoryList = document.querySelector('#history');



// weather variable for api and api key
var todayBlock = {
    apiKey: "2426dafbf5650e058600143b6991df39",
    //fetching weather parameter info from api url
    fetchWeather: function(city) {
        fetch(
            "api.openweathermap.org/data/2.5/forecast?q="
            + city 
            + "&units=standard&appid="
            + this.apiKey
        )
           .then((response) => response.json())
           .then((data) => this.displayWeather(data));
    },
    //to display weather text to page
    displayWeather: function(data) {
        var { name } = data;
        var { icon, description } = data.todayBlock[0];
        var { temp, wind, humidity } = data.main;
        console.log(name, description, temp, icon, wind, humidity)
        document.querySelector("city").innerText - "Weather in " + name;
        document.querySelector(".icon").src = "" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";

    },

    //search button to display city searched
    search: function() {
        this.fetchWeather(document.querySelector(".searchBtn").value);
    },
};

document.querySelector(".searchBtn").addEventListener("click", function() {todayBlock.search();
     console.log("pandas")
});

