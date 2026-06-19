const convertToCelsius = function(input) {
  return (Math.round(((input - 32) / 1.8) * 10) / 10)
};

const convertToFahrenheit = function(input) {
  return (Math.round((input * 1.8 + 32)*10)/10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
