//------------------------VARIABLES----------------------

/* 
let name ='javascrip'
name ='sanjana'

console.log(name);

// const not reassign 
const age = 22
console.log(age);


console.log("1. Create a variable called city and store pune");
let city = "pune"
console.log("City : ", city)


console.log("2. Create a constant called country and store india");
const country = 'india'
console.log("Country : ", country);

print("3. Change the value of:")
let s = 50
console.log("Before changing : ", s);
s= 100
console.log("After changing : ", s);

*/



//------------------------OPERATORS----------------------
/*
console.log("Create a variable storing your age.");
let age = 34
console.log("age : ", age);

console.log("Create a boolean variable called isLoggedIn.");
let isLoggedIn = true
console.log("Login", isLoggedIn);

console.log("What is the datatype of:");
let n = "Hello"
console.log(typeof(n));

*/


//------------------------OPERATORS----------------------
/*console.log("   SUM of Variables    ");

let a = 10;
let b = 20;
console.log("SUM : ", a+b);

console.log("a :", a , " |b :",b,"| a > b = ", a > b);
console.log((10==='10'));
*/


//------------------------IF ELSE----------------------
/*console.log("       is positive or negative.");

let n = 10

if(n > 0){
    console.log("positive",n);
}else{
    console.log("negative",n);
    
}


console.log("       Check if a student passed.");
m = 40
if(m >= 35){
    console.log("Student passed..", "Marks :", m);
    
}else{
    console.log("Student Fail...", "Marks :", m);
    
}

console.log("       Check whether a number is even or odd.");
num = 3
if(num % 2 == 0){
    console.log("Even number ...", num);
    
}else{
    console.log("Odd number...", num);
    
}

*/

//------------------------FUNCTION----------------------

/*function welcome(name){
    console.log("Welcome this is js.....");
    console.log("My name is : ", name);
    
    
}
welcome('sanjana')

function add(a,b){
    console.log("a:",a," |b :",b," |Addition : ", a + b)
}
add(1,2)
*/

//------------------------Arrow Function ()=> {} ----------------------

/*let sayHi = ()=>{  console.log("hiii");}
sayHi()


const mul = (a,b)=>{console.log("Multiplication : ", a *b);}
mul(1,2)


const city = (name)=>{console.log("City : ", name);}
city('pune')*/


//------------------------Array ----------------------

/*color = ['orange','yellow', 'blue']
console.log(color);
console.log("SEcond One : ", color[2]);
color.push('pink')
console.log(color);
*/

//------------------------Objects ----------------------

/*let storing = {
    name : "sanjana",
    age : 23,
    city : 'pune'
}
console.log((storing));
console.log("age : ", storing.age);
storing.city = 'mumbai'
console.log("After updating city : ", storing);
*/




//------------------------Loops ----------------------
/*
for (let i =1 ; i <= 10 ; i++){
    console.log(i);
    
}
console.log("       Print even numbers from 2 to 20.    ");

for(let j =1; j<=20 ;j ++){
    if (j % 2 == 0){
        console.log(j);
        
    }
}
*/


//----------------------- Array Methods map() , filter()----------------------
/*let ary = [1,2,3]
let str = ['a', 'b', 'c']
let num = [10,50,60,55,2]

let convert = ary.map(ary => ary * 10);
console.log("Original ", ary);
console.log("change : ",convert)

let change = str.map(str => str.toUpperCase());
console.log("Original ", str);
console.log("Chnage uppercase(): ",change);


let check = num.filter(num => num > 50);
console.log("Original ", num);
console.log("change > 50",check);
*/





//------------------------Destructuring ----------------------
/*
const student = {
    name : 'rahul',
    marks : 200
}
const {name,marks}= student
console.log(marks);
*/


//------------------------Spread Operator ----------------------
const ary1 = [1,2]
const ary2 = [3,4]
const result = [...ary1, ...ary2]
console.log("Merge : ",result);
const cpy = [...ary2]
console.log("Copy : ", cpy);


let obj1 = {name : 'sanjana'}
let newObj = {...obj1, city:'pune'}
console.log("ADD : ", newObj);

