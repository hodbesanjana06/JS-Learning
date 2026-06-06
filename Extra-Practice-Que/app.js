console.log("   1. Create an object for a student. ");
let student = {
    name : 'sanjana',
    class : 'sybca',
    age : 23
}
console.log(student);



console.log("_____________________________________________________");
console.log("       2. Create an array of 5 subjects.      ");
sub = ['data science', 'DSA', 'python','java','c#']
console.log("Total subjects : ", sub);



console.log("_____________________________________________________");
console.log("       3. Use map() to double [1,2,3,4].      ");
let lst = [1,2,3,4]
console.log("Original ", lst);
let newlst = lst.map(lst => lst *2)
console.log("Updated : ", newlst);


console.log("_____________________________________________________");
console.log("       4. Use filter() to get numbers greater than 10 from [5,12,8,20].   ");
let l = [5,12,8,20]
console.log("Original ", l);
let newl = l.filter(l => l > 10)
console.log("Updated : ", newl);



console.log("_____________________________________________________");
console.log("       5. Create an arrow function to calculate square of a number.  ");

let square = (n)=>{console.log("Square of", n , "is ", n * n);
}
square(5)



console.log("_____________________________________________________");
console.log("       6. Use destructuring to extract name and age.      ");

let des = {name : 'sanjana', age : 20}
let  {name, age }=des
console.log("Name :", name, "| age :", age);



console.log("_____________________________________________________");
console.log("       7. Use spread operator to merge two arrays.        ");
let ary1 = [1,2,3]
let ary2 = [4,5]
console.log(ary1, ary2);

let newary = [...ary1, ...ary2]
console.log("Merge : ",newary);



console.log("_____________________________________________________");
console.log("   8. Write an if-else to check voting eligibility.       ");
let a = 19
console.log("Your Age : ", a);

if(a >= 18){
    console.log("your eligible for voting...");
    
}else{
    console.log("Not eligible for voting....");
    
}


console.log("_____________________________________________________");
console.log("      9. Print numbers 1–20 using a loop.      ");
for(let i = 1; i <= 5; i++){
    console.log(i);
    
}


console.log("_____________________________________________________");
console.log("       10. Create a function that returns the sum of two numbers.      ");
function sum(a ,b){
    return a + b
}
let ans = sum(10,20)
console.log("Sum : ",ans);

