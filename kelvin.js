// Input today's weather in Kelvin
const kelvin = 0;

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Convert Fahrenheit to Celsius
let fahrenheit = celsius * (9/5) + 32

// Round Down
fahrenheit = Math.floor(fahrenheit)

// Display the results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert Celsius to Newton
let newton = celsius * (33/100);

// Round Down
newton = Math.floor(newton);

// Display the output
console.log(`The temperature is ${newton} degrees Newton.`)
