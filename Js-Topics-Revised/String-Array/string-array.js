// __________________________________________________________________________________________
//             String
// __________________________________________________________________________________________

// let email = "  SANJANA@GMAIL.COM   ";
// console.log(email.trim().toLowerCase());

// console.log("_________________________________________");
// let product = "Wireless Bluetooth Headphones";
// console.log("Number of characters : ", product.length);
// console.log("Bluetooth includes or not : ", product.includes("Bluetooth"));
// console.log("UpperCase : ", product.toUpperCase());

// console.log("_________________________________________");
// let orderId = "ORD-2026-458"
// let fullname = "sanjana , patil"
// console.log(orderId.slice(4,8));
// console.log(fullname.split(" - "));


// console.log("_________________________________________");
// let word = "hello";
// let rev = word.split("").reverse().join("")
// console.log(rev);


// console.log("_________________________________________");
// let word = "javascript"
// let vowel = "aeiou";
// console.log("word : ", word);

// for(let i = 0 ; i < word.length ; i++){
//     if(vowel.includes(word[i])){
//         console.log(word[i]);
        
//     }
// }



// console.log("_________________________________________");
// let name = "sanjana";
// let other = name;
// let rev = name.split("").reverse().join("")
// if(name === rev){
//     console.log("Palindrom string");
// }else{
//     console.log("Not palindrom string");
    
// }






// __________________________________________________________________________________________
//              Array
// __________________________________________________________________________________________


// let cart = ["Shirt", "Shoes", "Watch"];
// cart.push("Bag")
// console.log("add Bag - end", cart);
// cart.pop()
// console.log("pop - end", cart);


// console.log("_________________________________________");
// let scores = [45, 60, 75, 90, 55];
// console.log((scores.slice(0,3)));
// scores.splice(2,1)
// console.log(scores);


// console.log("_________________________________________");
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// console.log(products.includes("Mouse"));
// console.log("Index of monitor : ", products.indexOf("Monitor"));
// products.unshift("Webcam")
// console.log(products);
// products.splice(1,1,"new")
// console.log(products);


// console.log("_________________________________________");
// let prices = [100, 250, 400, 150];
// let result = prices.map(n => n + 50)
// console.log(result);

// let prices = [120, 450, 80, 700, 250];
// let filterd = prices.filter(n => n > 200)
// console.log("Greater that 200 : ", filterd);


// let students = [
//   { name: "Amit", marks: 65 },
//   { name: "Riya", marks: 88 },
//   { name: "Neha", marks: 92 }
// ];
// let search = students.find(n => n.name === "Riya")
// console.log("serach riya : ",search);


// let expenses = [250, 100, 450, 200];
// let total = expenses.reduce((t , expenses)=> t + expenses , 0)
// console.log("Total : ", total);






// __________________________________________________________________________________________
//              Array +  STring
// __________________________________________________________________________________________

// let name = [' sanjana', "RIYA", "Priya"];
// for(let i = 0 ; i < name.length ; i++){
//     name[i] = name[i].trim().toUpperCase()   
// }
// console.log(name);

// console.log("_________________________________________");
// let words = ["apple", "banana", "cat", "orange", "grapes"];
// let other = words.filter(n => n.length > 5)
// console.log(other);


// console.log("_________________________________________");
// let fullName = "Rahul Sharma";
// console.log(fullName.slice(0 , 1) , fullName.slice(6 ,7));


// console.log("_________________________________________");
// let prices = [200, 500, 800, 1000];
// let discount = prices.map(n =>n + (n * 10 /100))
// console.log(discount);


//  console.log("_________________________________________");
// let students = [
//      {name: "Amit", marks: 45}, 
//      {name: "Riya", marks: 82},
//      {name: "Neha", marks: 60},
//      {name: "Raj", marks: 35}
//     ];

// let check = students.filter(n => n.marks > 60)
// console.log(check);


// console.log("_________________________________________");
// let prices = [299, 150, 450, 100];
// let total = prices.reduce((t , prices)=> t + prices , 0)
// console.log("Total : ",total);


// console.log("_________________________________________");
// let products = [
//     {name: "T-shirt", category: "Clothing"},
//     {name: "Headphones", category: "Electronics"},
//     {name: "Laptop", category: "Electronics"}
// ];
// let findp = products.find(n => n.category == "Electronics")
// console.log(findp);



console.log("_________________________________________");
let scores = [72, 95, 61, 88, 79, 99];
let score = scores.sort((a, b)=> b - a).slice(0,3)
console.log(score);


