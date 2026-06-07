let lst = [1,2,3,4,5]
console.log("origin ", lst);
let newlst = lst.map(lst => lst * lst)
console.log("Square ", newlst);



console.log("___________________________________________");
let name = ["ram", "shyam", "mohan"]
console.log("origin ", name);
let newname = name.map(name => name.toUpperCase())
console.log('Uppercase ',newname);
let change = name.map(name => "Mr."+name)
console.log("Add Mr. ",change);



console.log("___________________________________________");
let nums = [10, 20, 30, 40];
let newnum = nums.map(nums => nums * 2)
console.log(nums, "=> ", newnum);



console.log("___________________________________________");
let prices = [100, 200, 300];
let newprice = prices.map(prices => (prices * 18 / 100))
console.log(newprice);



console.log("___________________________________________");
let words = ["apple", "hi", "banana", "ok"];
let newword= words.filter(words => words.length > 3)
console.log(newword);



console.log("___________________________________________");
let students = [
    {name: "Ram", marks: 80},
    {name: "Shyam", marks: 35},
    {name: "Mohan", marks: 90},
    {name: "Ravi", marks: 40}
];
let mark = students.filter(students => students >= 40)
console.log(mark);
let names = students.map(students => students.name);
console.log(names);
let [name,marks] = students
console.log(name);

let add = [...students, {name:'sita', marks:96}]
console.log(add);
