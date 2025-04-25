const convertToCelsius = function(valueInF) {
  const exact = (valueInF - 32) * (5/9);
  const rounded = Math.round(exact * 10) / 10; // Best method
  return rounded;
};

const convertToFahrenheit = function(valueinC) {
  const exact = (valueinC *(9/5)) + 32;
  const rounded = Math.round(exact * 10) / 10; // Best method
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
