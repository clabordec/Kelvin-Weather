// Input today's weather in Kelvin
const kelvin = 0;

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Calculate the Fahrenheit
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)

// Display the results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Calculate Newton
// Convert celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)
