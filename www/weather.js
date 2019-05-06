function retreiveForecast(lat, lon) {
    console.log('retreive Forecast function');
    //laikapstāļu atslēga
    var weatherAppKey = "";

    var query = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + weatherAppKey + '&units=imperial';
    $.getJSON(query, function (data) {
        if (data.weather.length) {
            console.log("data request");
            $('#description').text("Location: " + data.name);
            var valNum = parseFloat(data.main.temp);
            var convertToCelcius = (valNum - 32) / 1.8;
            var rounded = convertToCelcius.toFixed(1);
            $('#temperature').text("Temperature: " + rounded + " C");
            $('#wind').text("Wind: " + data.wind.speed + " m/s");
            $('#humidity').text("Humidity: " + data.main.humidity + " %");
            $('#weather').text("Weather: " + data.weather[0].main);
            var sunriseDate = new Date(data.sys.sunrise);
            var sunriseCon = timeConverter(sunriseDate);
            $('#sunrise').text("Sunrise: " + sunriseCon);
            var sunsetDate = new Date(data.sys.sunset);
            var sunsetCon = timeConverter(sunsetDate);
            $('#sunset').text("Sunset: " + sunsetCon);
        } else {
            console.log("Error getting data!");
        }
    });
}