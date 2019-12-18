document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "32687440704c232d18b7a627d8419872";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily%27";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  makeRequest(URL, ctx)
  
});
