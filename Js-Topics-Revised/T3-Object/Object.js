// let student={
//     name : "python",
//     age : 34 ,
//     course : "BCA",
//     marks : 43
// }
// console.log("________________________________________________");
// console.log(student.marks);
// console.log(student["name"]);



// console.log("________________________________________________");
// let employee = {
//   name: "Riya",
//   salary: 20000
// };
// employee.department = "HR"
// employee.salary = 25000
// console.log(employee);



// console.log("________________________________________________");
// let product = {
//   name: "Laptop",
//   price: 50000,
//   brand: "HP"
// };

// let key = "price";
// console.log(key);



// console.log("________________________________________________");
// let book={
//     title : "sanjana python",
//     author : "sanjaa kdsjd s",
//     price :809
// }
// delete book.price
// console.log(book);



//---------------------------object method()------------------
// console.log("________________________________________________");
// let student = {
//     name : "sanjana",
//     address : {
//         city : "Pune",
//         state : "Maharashtra"
//     },
//     marks :{
//         js : 45,
//         py : 67
//     }
// }
// console.log(student.address.city);
// console.log(student.marks.py);


// console.log("________________________________________________");
// let employee = {
//   name: "Rahul",
//   job: {
//     role: "Developer",
//     salary: 35000
//   }
// };
// console.log(employee);

// console.log("emp role : ", employee.job.role);
// console.log("update salary :", employee.salary = 40000);


// console.log("________________________________________________");
// let calculator = {
//     a : 10 ,
//     b : 20 ,
//     add : function(){
//         console.log("sum : ",this.a + this.b);
//     },
//     product: function(){
//         console.log("Product : ", this.a * this.b);
//     }
// }
// calculator.add()
// calculator.product()





//---------------------------object destructuring------------------

// console.log("________________________________________________");
// let product = {
//   name: "Laptop",
//   price: 50000,
//   brand: "HP"
// };

// let {name , price , brand} = product;
// console.log(name , price , brand);

// let {name : empname} = product;
// console.log(empname);



// console.log("________________________________________________");
// let user = {
//   username: "rahul123"
// };
//  let { username , role = "guest"} = user;
//  console.log(username , role);
 


// console.log("________________________________________________");
// let student = {
//   name: "Amit",
//   marks: {
//     JavaScript: 88,
//     Python: 92
//   }
// };

// let {marks : {Python}} = student;
// console.log(Python);

 


// console.log("________________________________________________");
// let frontend = ["HTML", "CSS"];
// let backend = ["Python", "Django"];

// let skills = [...frontend , ...backend]
// console.log(skills);



// let employee = {
//   name: "Riya",
//   department: "HR",
//   salary: 25000
// };
// let updateemp = {...employee , salary : 30000}
// console.log(updateemp);



// console.log("________________________________________________");
// let colors = ["Red", "Blue", "Green", "Yellow"];
// let  [first , ...others] = colors
// console.log(first);
// console.log(others);


// console.log("________________________________________________");
// function calculateTotal(...numbers){
//     return numbers.reduce((t , n)=> n + t , 0)
// }
// console.log(calculateTotal(1 ,2 ,3, 4, 5));



//---------------------------mixed------------------

// console.log("________________________________________________");
// let employee = {
//     name : "rahul",
//     age : 34 , 
//     dept : "computer"
// }
// console.log(employee);



// console.log("________________________________________________");
// let product = { name: "Keyboard", price: 1000 };
// product.price = 1200
// product.stock = 15
// console.log(product);


// console.log("________________________________________________");
// let user = {
//     name : "riya",
//     address : {
//         city : "pune"
//     },
//     education : {
//         course : "react"
//     }
// }
// console.log(user.address.city);
// console.log(user.education.course);



// console.log("________________________________________________");
// let employee = {
//     name : "amit",
//     salary : 49999
// }
// let {name : empname , salary} = employee
// console.log(empname , salary);



// console.log("________________________________________________");
// let person = {
//     name: "neha",
//     getDeatils : function(){
//         console.log(`my name is ${this.name}`);
//     }
// }
// person.getDeatils()



// console.log("________________________________________________");
// function showskills(...skills){
//     let [name , ...skill] = skills
//     console.log(name);
//     console.log(skill); 
// }
// showskills("riya", "py" , "js" , "django")




// console.log("________________________________________________");
// let user = { 
//     name: "Amit",
//      city: "Pune" 
// };
// let extra = { 
//     city: "Mumbai",
//      role: "Developer" 
// };

// let merge = {...user , ...extra}
// console.log(merge);



console.log("________________________________________________");
let student = {
    name : "riya", 
    marks : {
        js : 56 ,
        py : 45
    }
}
let {marks : {py}} = student
console.log(py);
