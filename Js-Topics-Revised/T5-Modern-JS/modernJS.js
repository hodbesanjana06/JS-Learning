// ____________________SPread and rest_____________________
// console.log("----------------------------------");
// let fruits = ["Apple", "Mango", "Banana"];
// let newFruit = [...fruits , "Oraange"]
// console.log(newFruit);



// console.log("------------------------------------");
// numbers1 = [1, 2, 3]
// numbers2 = [4, 5, 6]
// number3 = [...numbers1 , ...numbers2]
// console.log(number3);



// console.log("------------------------------------");

// let student={
//     name : "python",
//     age :23,
//     city : "pune"
// }
// console.log(student);

// let person = {...student , age : 30}
// console.log(person);




// console.log("------------------------------------");
// function calculateTotal(...number){
//     let sum = number.reduce((s , n)=> s + n , 0)
//     console.log(sum);
// }
// calculateTotal(100, 200  , 300)


// console.log("------------------------------------");
// scores = [80, 90, 75, 95, 85];
// let [topscore , ...othersocre] = scores
// console.log(topscore);
// console.log(othersocre);







// ____________________Template Literals_____________________

// console.log("------------------------------------");
// let name = "sanjana"
// let age = 34
// console.log(`my name is ${name} and i am ${age} old`);




// ____________________Optional Chaining_____________________
// console.log("------------------------------------");
// let employee = {
//   name: "Amit",
//   department: {
//     name: "IT"
//   }
// };
// console.log(employee.department?.name);




// console.log("------------------------------------");
// let user = { name: "Riya" };
// console.log("property not defined : ", user.address?.city);



// console.log("------------------------------------");
// let account={}
// console.log("Without function : ", account.logout?.());



// console.log("------------------------------------");
// let colors = ["Red", "Blue"];
// console.log(colors?.[1]);



// console.log("------------------------------------");
// let response = {
//   data: {
//     profile: {
//       username: "Sanjana"
//     }
//   }
// };
// console.log(response.data.profile?.username);







// ____________________optional chaining____________________

// console.log("------------------------------------");
// let username = null
// console.log(username ?? "guest");



// console.log("------------------------------------");
// let price = 0 ;
// console.log( price ?? 100);



// console.log("------------------------------------");
// let settings = {
//   theme: "dark",
//   notifications: false
// };
// console.log(settings.theme ?? "light");
// console.log(settings.notifications ?? true);



// console.log("------------------------------------");
// let user = {
//     profile : {
//         city : null
//     }
// }
// console.log(user.profile?.city ?? "City not found");







// ____________________mixed_____________________
// console.log("------------------------------------");
// let student = {
//     name : "riya",
//     age : 34 ,
//     city : "pune"
// }
// let {name , age , city} = student
// console.log(`my name is ${name} . my age is ${age} and i live in the ${city}`);




// console.log("------------------------------------");
// let skills = ["HTML", "CSS", "JavaScript"];
// let copy = [...skills , "Recat"]
// console.log(skills);
// console.log(copy);




// console.log("------------------------------------");
// let user = {
//     name : "user",
// }
// console.log(user.address?.city ?? "City not provided");



// console.log("------------------------------------");
// function calculteTotal(...marks){
//     let total = marks.reduce((t , n)=> (t + n ), 0)
//     console.log(total);
    
// }
// calculteTotal(80 , 90 , 75 , 85)



// console.log("------------------------------------");

// let employee = {
//   name: "Amit",
//   age: 24,
//   department: "IT"
// };

// let newemp ={...employee , age : 90}
// console.log(newemp);




console.log("------------------------------------");
console.log("          Student Report Generator             ");

let student = {
    name : "Riya",
    city : null,
    marks : [20 , 30 , 40, 50]
}
let {name , city , marks} = student
console.log("Student details : ", name , city , marks);
let total = marks.reduce((n , t)=> n + t , 0)
console.log("Total marks : ", total);
console.log(city ?? "City not provided");




