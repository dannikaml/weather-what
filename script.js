var weatherApiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={ad2690ad151ff6761fbeae33f5d42464}";


var weatherIs = {
    apiKey: "ad2690ad151ff6761fbeae33f5d42464",
    fetchWeather: function(city) {
        fetch(
            "api.openweathermap.org/data/2.5/forecast?lat="
            + city 
            + "{lat}&lon={lon}&appid="
            + this.apiKey
        )
           .then((response) => response.json())
           .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};