




const convertToCelsius = function(temperatureF) {

  //formula to convert fahren. to cels.

  let celsiusTemp = ((temperatureF - 32) * 5)/9

  // round numbers to one decimal
  const roundTempF = (Math.round(celsiusTemp * 10) / 10)
                                                                                           
  return roundTempF;
  
};
  

const convertToFahrenheit = function(temperatureC) {
  
  //formula to convert Cels. to fahren.
  let fahrenheitTemp = (temperatureC * (9/5)) + 32; 

  // round numbers to one decimal
  const roundTempC = (Math.round(fahrenheitTemp * 10) / 10)

  return roundTempC;
  
};










// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
