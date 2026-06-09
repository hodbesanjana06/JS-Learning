/*console.log("       Calculator      ");
let c= " ";
while(c !== 'exit'){
    
let operator = prompt("Enter operator (+, -, *, /):");
    let num1 = Number(prompt("Enter first number : "))
    let num2 = Number(prompt("Enter second number : "))
    let result;

    switch(ope){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break
        case "%":
            result = num1 % num2
            break
        case "/":
            result = num2 !== 0 ? num1 /num2 : "Cannot divide bye zero"
            break
        default:
            result ='Invalid operator'

    }

    console.log("Result :", result);
    alert("result :", result)


    c = prompt("Types 'exit' to quite or press OK to continue :")
}

console.log("Calculator closed ,....");
*/


/*console.log("       Student Grade System        ");
console.log("-----------------------------------------------------");

let percentage =68
console.log("Your Marks : ",percentage ,"%");

if(percentage >= 85){
    console.log("O Grade");
    
}else if (percentage >= 60 && percentage <80) {
    console.log("A+ Grade");
    
}else if(percentage > 35 && percentage < 60)
    console.log("B grade");
    
else {
    console.log("Fail");
    
}

*/


/*console.log("       Number Guessing Game        ");

let generatonumber = Math.floor(Math.random() * 10)+ 1

let guess = 1

if(guess === generatonumber){
    console.log("Correct ! U Guessed correct number ",generatonumber);
    
}else{
    console.log("Wrong number : ", generatonumber);
    
}
*/


console.log("       TODO LIST       ");
let todo = []
function Add(task){
    todo.push(task)   
    show() 
}

function remove(index){
    todo.splice(index,1);
    show()
}

function show(){
    console.clear();
    console.log("Todo List");

    todo.forEach((task,index)=>{
        console.log(index + ":" + task);
        
    })
    
    
}

Add("ready to learn JS")
Add("ready to learn HTMP")
Add("REACTJS")

remove(1)