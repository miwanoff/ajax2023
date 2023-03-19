let city = "Kharkiv";
$("#show_weather").click(function () {
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=89ea4480f451ffd24b79617df1ba2bb0`,
    function (result) {
      console.log(result);
      console.log(result.weather[0].main + " " + result.weather[0].description);
      console.log(result.coord.lat + " " + result.coord.lon);
      // $.each(result, function (i, field) {
      //     $("#weather").append(`i ${field.name} ${field.author}  <br>`);
      // });
    }
  );
});
