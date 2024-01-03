// Write a function 'convertTemperature' that takes two parameters:
// the first is a numerical value representing a temperature,
// and the second is a string representing the temperature scale to be converted
// to('C' for Celsius, 'F' for Fahrenheit).
// The function should return the converted temperature as a
// numerical value, rounded to two decimal places.

function convertTempreture(temp, unit) {
  if (unit === "C") {
    return ((temp * 9) / 5 + 32).toFixed(2);
  } else if (unit === "F") {
    return (((temp - 32) * 5) / 9).toFixed(2);
  }
}

console.log(convertTempreture(100, "F"));
console.log(convertTempreture(37, "C"));
console.log(convertTempreture(0, "C"));
console.log(convertTempreture(0, "F"));
