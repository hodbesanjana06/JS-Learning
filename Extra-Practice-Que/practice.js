// console.log("Arrow Functions");

// let add = (a,b)=>{ console.log("Addition : ",a + b);}
// add(1,2)




// let calculator = (a,b)=>{
//     console.log("Addition : ", a + b);
//     console.log("Substraction : ", a - b);
//     console.log("Multiplication : ", a * b);
//     console.log("Division : ", a / b);

// }
// calculator(10,2)



// let EvenOdd = num =>(num % 2 == 0 ? "even": "Odd")
// console.log(EvenOdd(10));
// console.log(EvenOdd(1));



// let Largest = (a,b,c)=>{if(a > b && a > c)return a; if(b>a && b>c)return b; return c};
// console.log("Largest : ",Largest(10,30,4));



// let names = (name)=>{console.log("Lenght of str : ", name.length);}
// names('sanjana')


// console.log("-------------------------------------------------");

console.log("       Array       ");
let nums = [10,20 ,80 ,40 ,50]

// s=0
// for(let i = 1; i<nums.length; i++){
//     s = s +nums[i];
// }
// console.log("Sum of array : ",s);


// max = nums[0]
// min = nums[0]
// for(let j =1 ; j <nums.length ; j++){
//     if(nums[j]> max )  {
//         max = nums[j];
//     }
//     if(nums[j]< min){
//         min = nums[j];

//     }
// }
// console.log("Maximum from array : ",max);
// console.log("Maximum from array : ",min);
// for(let a = nums.length ; a>=0 ; a--){
//     console.log(nums[a]);
    
// }

// console.log("Total elements : ", nums.length);


// console.log("-------------------------------------------------");

/*console.log("           Objects         ");
let students = {
    name : 'Rahul',
    age : 29,
    marks : 90
};

console.log(students);
students.address = 'pune'
students.marks = 80
delete students.age
console.log("AFter adding address | update marks | delte age | ", students);


for(let i = 1 ; i <= students.length ; i++){
    console.log(students[i]);
    
}*/




// console.log("-------------------------------------------------");
/*console.log("       4. Map()     &&     filter ()       ");
let Nums = [1,2,3,4,25]
console.log("Original : ", Nums);

let double = Nums.map(Nums => Nums * 2)
console.log("Doubles : ", double);

let triple = Nums.map(Nums => Nums * 3)
console.log("Triple : ", triple);

let square = Nums.map(Nums => Nums * Nums)
console.log("Squares : ", square);

let conversion = Nums.map(Nums => ""+Nums)
console.log("string : ",conversion);

let greter = Nums.filter(Nums => Nums > 2)
console.log("Greter that 2 :", greter);

let less = Nums.filter(Nums => Nums < 2)
console.log("Less than 2 : ",less);

let even = Nums.filter(Nums => Nums % 2 == 0)
console.log("Even : ",even);

let odd = Nums.filter(Nums => Nums % 2 != 0)
console.log("Odd : ",odd);

let multi = Nums.filter(Nums => Nums % 5 == 0)
console.log("Multiples of 5 : ",multi);
*/


// console.log("-------------------------------------------------");
/*console.log("       6. Destructuring        ");

let user = {
    name :'rohit',
    city : 'mumbai',
    age :29
}

let {name,city}=user
console.log("Extract Name & city : ", name , city);
let {name : firstname } = user ;
console.log("Rename for name : ",firstname);

*/





// console.log("-------------------------------------------------");
/*console.log("       7. Spread Operator      ");
let arr1 = [1,2]
let arr2 = [3,2]
let result = [...arr1, ...arr2]
console.log("Merge : ", result);
let copy = [...arr2]
console.log("Copy : ", copy);
let addfirst = [10, ...arr1, ...arr2]
console.log("Add First : ", addfirst);
let addLast = [...arr1, ...arr2, 1000]
console.log("Add Last : ", addLast);

let users = {
    name : 'sanjana'
}
let admin = {
    number : '75656557'
}
let add = {...users, age : 23}
console.log("add age : ", add);
let update = {...users, name :'rahul'}
let merge = {...users, ...admin}
console.log("Merge : ", merge);
console.log("update name : ", update);

*/

// console.log("-------------------------------------------------");
/*console.log("       8. forEach()        ");

let numbers = [1,2,3]
let names = ['sanjana', 'radha', 'krishna']

names.forEach(i =>{console.log(i);})

numbers.forEach(i =>{console.log(i);
})
let t = 0
numbers.forEach(i => {t = t + i})
console.log("Total sum : ", t);

*/


// console.log("-------------------------------------------------");
/*console.log("       9. find()           ");
let numset = [10,20,30 ,40]
let firsteven = numset.find(i => i % 2 == 0)
let maxnum = numset.find(i => i > 50)
console.log("First Even : ",firsteven);
console.log("greter than 50 : ", maxnum);
*/



// console.log("-------------------------------------------------");
/*console.log("       10. Template Literals       ");
let sname = 'radha'
console.log(`Hello Good Morning ${sname}`);
let studentdetails = {
    name : 'radhakrishna', age :3 , marks : 345
}
console.log(`name ${studentdetails.name} , Age ${studentdetails.age}, Marks ${studentdetails.marks}`);


*/

// console.log("-------------------------------------------------");
console.log("       JavaScript Challenge      ");
let student = [
  {n:"Rahul", marks:80},
  {n:"Aman", marks:45},
  {n:"Riya", marks:90},
  {n:"Priya", marks:30}
]
student.forEach(i => {console.log(`Name ${i.n}`);
})

let pass = student.filter(j => j.marks > 45)
console.log(pass);

let markArray = student.map( s => s.marks)
console.log(markArray);

let newstudent = [...student, {n: 'radha', age: 23}]
console.log(newstudent);

let topper = student.find(i => i.marks >80)
console.log(topper);

