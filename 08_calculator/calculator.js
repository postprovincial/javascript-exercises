const add = function(firstValue, secondValue) {
	const result = firstValue + secondValue;
  return result;
};

const subtract = function(firstValue, secondValue) {
  const result = firstValue - secondValue;
  return result;
	
};

const sum = function(values) {
  let sum = 0;

  for(let i = 0; i < values.length; i++){
    sum += values[i];
  }

  return sum;
};

const multiply = function(values) {
  let sum = values[0];

  for(let i = 1 ; i < values.length; i++){
    sum *= values[i];
  }

  return sum;
};

const power = function(value, power) {
  let sum = Math.pow(value, power);

	return sum;
};

const factorial = function(value) {
  let sum = 1; for (let i = 1; i <= value; i++) { sum *= i; }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
