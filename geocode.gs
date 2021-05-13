
function geocode(address) {
  Utilities.sleep(1500);
var response = Maps.newGeocoder().geocode(address);
for (var i = 0; i < response.results.length; i++) {
  var result = response.results[i];
  Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,
      result.geometry.location.lng);
      return result.geometry.location.lat+","+result.geometry.location.lng;
}}
