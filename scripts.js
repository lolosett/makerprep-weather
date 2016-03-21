$(".city-one").on("click", function(){
  $.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=LosAngeles,us&units=imperial&appid=e42d32af9555a899db7106b67e9e5aae",
  method:"GET",
  success: function(weatherData){
    var descriptionEl = $("<div>");
    descriptionEl.html("description: " + weatherData.weather[0].description + " , current temp: " + weatherData.main.temp + " , high temp: " + weatherData.main.temp_max + " , high temp: " + weatherData.main.temp_min + " , current wind speed: " + weatherData.wind.speed + " mph" + " sunrise: "  );
    $(".weather-display").html(descriptionEl);
      }
  });
});


$(".submit-button").on("click", function(){
  var cityName = $("input").val();
  $.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",us&units=imperial&appid=e42d32af9555a899db7106b67e9e5aae",
  method:"GET",
  success: function(weatherData){
    var descriptionEl = $("<div>");
    descriptionEl.html("description: " + weatherData.weather[0].description + " , current temp: " + weatherData.main.temp + " , high temp: " + weatherData.main.temp_max + " , high temp: " + weatherData.main.temp_min + " , current wind speed: " + weatherData.wind.speed + " mph");
    $(".weather-display").html(descriptionEl);
      }
  });
});
  