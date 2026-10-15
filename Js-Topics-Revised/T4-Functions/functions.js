// ----------------Normal Function-------------------------------


// function welcome(name){
//     console.log(`welcome ${name}`);
// }
// welcome("sanjana")




// console.log("_________________________________________");
// function discount(price ,amt ){
//     console.log("Price : ", price , "\n", "Discount amt : ", amt);
    
//     return price - amt
// }
// console.log("After discount : ", discount(2000 , 500));





// console.log("_________________________________________");
// function largest(a , b ,c){
//     console.log("Your values : ", a , b ,c);
    
//     if(a > b && a > c){
//         console.log(`${a} is greater`);
//     }else if(b > a && b > c){
//         console.log(`${b} is greater`);
//     }else{
//         console.log(`${c} is grater`);
        
//     }
// }
// largest(10 , 56 , 2)




// console.log("_________________________________________");
// function rectangle(length , width){
//     console.log(`lenght : ${length} || width : ${width}`);
    
//     return length * width
// }
// console.log("Area : ", rectangle(3 , 5));





// ---------------Arraow Function-------------------------------
// console.log("_________________________________________");

// let cube = n => n * n * n
// console.log("Cube : ",cube(3));




// console.log("_________________________________________");
// let isAdult = age => age >= 18;
// console.log(`check :  age is 18 or more`, isAdult(13));



// console.log("_________________________________________");
// let multiply = (a , b) => a * b
// console.log("Multiply : ", multiply(2 , 3));



// console.log("_________________________________________");
// let prices = [100, 200, 300, 400];

// let newprice = prices.map(n => n + (n * 20 / 100))
// console.log(newprice);



// ---------------Default and Rest Paramether------------------------------
// console.log("_________________________________________");
// function welcome(name = "guest"){
//     console.log(`hello ${name}`);
// }
// welcome()
// welcome("sanjaba")


// console.log("_________________________________________");
// function calculatePrice(price  , tax=5){
//     console.log("Total : ", price + tax);
// }
// calculatePrice(2000)
// calculatePrice(100 , 10)



// console.log("_________________________________________");
// function sumAll(...numbers){
//     let sum  = numbers.reduce((n , numbers)=> n + numbers , 0)
//     console.log(`Total of array values ${sum}`)
// }
// sumAll(10 , 20 , 30 , 40)



// console.log("_________________________________________");
// function displaySkills(name , ...skills){
//     console.log("Name : ", name);
//     console.log("skills : ", skills); 
// }
// displaySkills("sanjana", "react" , "JS")



// ----------------Mixed questions-------------------------------
// console.log("_________________________________________");
// function salary(sal , bonus){
//     console.log("Total salary : " , sal + bonus);    
// }
// salary(30000, 4000)



// console.log("_________________________________________");
// let temperarure = c => (c * 9 / 5) + 32
// console.log(temperarure(0));
// console.log(temperarure(25));



// console.log("_________________________________________");
// function getCourse(course = "javascript"){
//     console.log("Course : ", course);
// }

// getCourse()
// getCourse("react")



// console.log("_________________________________________");
// function sum(...number){
//     console.log("Original : ", number);
    
//     let total = number.reduce((t , n)=> t + n , 0)
//     console.log("Total of array : ", total);
    
// }
// sum( 5, 10 , 15 , 20)




// console.log("_________________________________________");
// function square(n){
//     return n * n
// }
// let result = square(6)
// console.log(result);



console.log("_________________________________________");
let getavrage = (name , ...number)=>{
    var total= number.reduce((s , t)=> s + t , 0)
    var avg = total / number.length   
    
    return {
        name : name,
        avg : avg
    };
    
}
console.log(getavrage("riya", 80 , 90 ,100));
