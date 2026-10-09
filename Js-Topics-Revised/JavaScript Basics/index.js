//  let, const, var → Data Types → Operators → if/else → Loops → Type Conversion
// __________________________________________________________________________________________


// var name = "pen"
// var price = 45
// var qty = 3
// var available = true
// console.log("\n Product : ", name , "\n Price : ", price , "\n Qty : ", qty , "\n Total : ", price * qty , "\n Available : ", available);

// __________________________________________________________________________________________

// let name  = "sanjana"
// let age = 23
// let city = "pune"
// console.log("\n Name : ", name , "\n Age : ", age , "\n City : ", city);
// age = 56
// console.log(age);


// __________________________________________________________________________________________
//              DATA TYPE
// __________________________________________________________________________________________

// let username = "abc"
// let age = 23
// let isLoggedIn = true
// let salary = 34000
// let skills = ['sanjna', 'py', 'react']
// console.log("Username : " ,typeof(username) , "\n Age : ", typeof(age) , "\n IsLoggedIn : ", typeof(isLoggedIn) , '\n Salary : ', typeof(salary) , 'Skills : ', typeof(skills));




// __________________________________________________________________________________________
//              Operator
// __________________________________________________________________________________________
// let price = 800
// let qty = 4
// console.log(("Total Price : ", qty * price));
// console.log("Discount 200 : ",qty * price - 200 );
// console.log("Reminder : ", qty * price % 3);

// let marks = 72;
// console.log("Is marks greater than 50", marks > 50);
// console.log("Is marks exactly 72? : ", marks == 72);
// console.log("Is marks less than 40? : ", marks < 40);


// let age = 21;
// let hasLicense = true;
// console.log("age > 18 and have license : ",age > 18 && hasLicense);

// let username = "sanjana";
// let password = "1234";
// console.log(username === "sanjana" && password === "1234");
// if( username ==="sanjana"){
//     console.log("Login sucessfully .....");
    
// }else{
//     console.log("Something wrong...");
    
// }




// __________________________________________________________________________________________
//             If-else
// __________________________________________________________________________________________
// let temprature = 32

// if(temprature > 30){
//     console.log("Hot");
// }else{
//     console.log("Normal");
// }


// let age = 16;

// if(age < 13){
//     console.log(age , "child Ticket");
// }
// else if(age >= 13 && age <= 17 ){
//     console.log("Teen Ticket");
// }else{
//     console.log("Adult");
// }


// let amt = 2500
// let dis = 0
// console.log("Amount : ", amt);

// if(amt >= 5000){
//     dis = amt * 20 / 100
//     console.log("20 % discount : ", dis);
// }else if(amt >= 3000 && amt < 5000){
//     dis = amt * 10 / 100
//     console.log("10 % discount : ",dis);
// }else if(amt >= 1000 && amt < 3000){
//     dis = amt * 5 / 100
//     console.log("5 % Discount : ",dis);
// }
// else{
//     console.log("No discount....");
// }

// let username = "admin"
// let password = "12345"

// if(username === "admin" && password === "1234"){
//     console.log("Login sucessful....");
// }else{
//     console.log("Invalid username & password");
// }



// __________________________________________________________________________________________
//             Type Conversion
// __________________________________________________________________________________________

// let itemPrice = "213.60";
// let qty = "4"

// console.log("Total Bill : ", Number(itemPrice) * Number(qty));
// console.log("_______________________________________");

// let age = 31;
// let score = 35;
// age = String(age)
// score = String(score)
// console.log("type of age : ",typeof(age));
// console.log("type of score : ",typeof(score));
// console.log("_______________________________________");


// console.log("10" + 5);
// console.log("10" - 5);
// console.log(Number("hello"));
// console.log(Boolean(""));
// console.log(Boolean("false"));







// __________________________________________________________________________________________
//             Mixed Practice
// __________________________________________________________________________________________
// let unit = 180
// let cal , other  = 0

// if(unit == 100){
//     cal = 100 * 5
//     console.log("Total : ", cal);
    
// }
// else if(unit > 100){
//     rem = unit - 100
//     cal = 100 * 5
//     other = rem * 8

//     console.log("Total : ", cal + other);
// }

// console.log("_______________________________________");
// let password = "JavaScript123"
// if(password.length < 6){
//     console.log("Weak");
// }else if(password.length >= 6 && password.length <= 10 ){
//     console.log("Medium");
// }
// else{
//     console.log("Strong");
// }

// console.log("_______________________________________");
// let stock = 17;
// for(let i = 17 ; i >= 1 ; i--){
//     if(i % 5 == 0){
//         continue
//     }
//     console.log(i);
// }

console.log("_______________________________________");
let prices = [120, 250, 80, 300];
let t = 0
for(let i = 0 ; i < prices.length ; i++){
    t = t + prices[i] 
}
console.log("Total : ", t);
