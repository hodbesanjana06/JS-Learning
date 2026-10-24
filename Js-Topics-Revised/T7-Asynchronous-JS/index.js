// console.log("a");
// console.log("b");
// console.log("c");
// setTimeout(()=>{
//     console.log("d");
    
// }, 1000)



// console.log("start");
// setTimeout(()=>{
//     console.log("Timer 1");
    
// }, 2000)

// setTimeout(()=>{
//     console.log("Timer 2");
    
// }, 1000)

// console.log("End");


// let name = "sanjana"
// console.log("loading.........");
// setTimeout(()=>{
//     console.log(`Hello ! Good Afternoon ${name}`);
    
// }, 2000)



// setTimeout(() => {
//     console.log("3");
    
// }, 1000);

// setTimeout(()=>{
//     console.log("2");
    
// }, 1000)

// setTimeout(() => {
//     console.log("1");
    
// }, 1000);

// setTimeout(() => {
//     console.log("Go !");
    
// }, 4000);





// ---------------CALLBACK-----------------------

// function greetUser(name , callback){
//     callback(name);
// }

// function greeting(name){
//     console.log(`Hello ${name} ! Welcome`);
    
// }
// greetUser("Rahul" , greeting)



// function calculate(a , b , callback){
//     callback(a , b)
// }
// function add(a , b){
//     console.log(`addition ${a} and ${b} is `, a+b);
// }

// function sub(a , b){
//     console.log(`substraction ${a} and ${b} is `, a-b);
// }

// function multi(a , b){
//     console.log(`multiplication ${a} and ${b} is `, a*b);
// }
// calculate(10 , 20 , add)
// calculate(100 , 20 , sub)
// calculate(10 , 20 , multi)


// _____________________PROMISES______________________

// let loginCheck = new Promise((resolve  , reject)=>{
//     let login = false;

//     if(login){
//         resolve("Login sucessful")
//     }else{
//         reject("Something wrong ! try again")
//     }
// })


// loginCheck
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error))



// let ageCheck = new Promise((resolve , reject)=>{
//     let age = 18
//     if(age >= 18){
//         resolve("Eligible to vote")
//     }else{
//         reject("Not eligible to vote")
//     }
// })
// ageCheck
//     .then((result)=> console.log(result))
//     .catch((error)=> console.log(error))


// let msg = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("Data Loaded sucessfully !");
//     }, 3000);
// })
// console.log("Loading............");

// msg 
//     .then((result)=> console.log(result))




let paymentcheck = new Promise((resolve , reject)=>{
    let amt = 0

    if(amt > 0){
        resolve("Paymet successful")
    }else{
        reject("Invalid payment amount")
    }
})
paymentcheck
    .then((result)=> console.log(result))
    .catch((error)=> console.log(error))
    .finally(()=> console.log("Payment process complted"))
