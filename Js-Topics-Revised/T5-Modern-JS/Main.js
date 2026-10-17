import { calculatePrice, multiply , taxrate, username } from "./calculation.js";

console.log("------------------------------------");
console.log("Multiply : ", multiply(1 ,2));


console.log("------------------------------------");
console.log(username("Riya"));


console.log("------------------------------------");
console.log(`Tax Rate ${taxrate}%`);
console.log("Total Price : ", calculatePrice(1000));
