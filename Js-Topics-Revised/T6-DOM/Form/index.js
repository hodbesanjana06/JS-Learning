let form = document.querySelector("#form")
let nameinput = document.getElementById("name")
let result = document.getElementById("result")

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    if(nameinput.value.trim() === ""){
        result.textContent= "Email is Empty"
    }else{
        result.textContent = nameinput.value
    }
})





let form2 = document.getElementById("form2")
let age = document.getElementById("age")
let checkInfo = document.getElementById("check-info")

form2.addEventListener("submit" , (event)=>{
    event.preventDefault()

    if(age.value < 18){
        checkInfo.textContent = "You Must be at least 18"
        checkInfo.style.color="red"
    }else{
        checkInfo.textContent = "You are eligible"
        checkInfo.style.color = "Green"
    }
})


let form3 = document.getElementById("form3")
let password = document.getElementById("password")
let passwordResult = document.getElementById("password-result")

form3.addEventListener("submit" , (event)=>{
    event.preventDefault()

    if(password.value.length >= 8){
        passwordResult.textContent = "Your Password is Correct !"
        passwordResult.style.color = "green"
    }else{
        passwordResult.textContent = "Weak Password ! plz Try to make strong password .  At least 8 chacter required"
        passwordResult.style.color = "red"
    }
})




let form4 = document.getElementById("form4")
let sname = document.getElementById("sname");
let sage = document.getElementById("sage");
let email = document.getElementById("email");
let course = document.getElementById("course");
let studentInfo = document.getElementById("student-info")

form4.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(sname.value.trim() == "" || sage.value.trim() == "" || email.value.trim() == "" || course.value.trim() == ""){
        studentInfo.textContent = "All Fiedls are required !"
        studentInfo.style.color = "red"
    }else if(Number(sage.value) < 15){
        studentInfo.textContent = "Age At least 18 And Above"
        studentInfo.style.color = "red"
    }else if(!email.value.includes("@")){
        studentInfo.textContent = "Emial Required @ symbol";
        studentInfo.style.color = "red"
    }
    else{
       studentInfo.textContent = `Name : ${sname.value} , Age : ${sage.value} , Email : ${email.value} , Course : ${course.value}`
       studentInfo.style.color = "green"
    }
})



let eventBtn = document.getElementById("eventBtn").addEventListener("click" , (event)=>{
    console.log("Event Type : ",event.type);
    console.log("Event Target : ",event.target);
})


let bubbleDiv = document.getElementById("parent-div").addEventListener("click" , ()=>{
    console.log("Parent div click");
})

let midDiv = document.getElementById("mid-div").addEventListener("click", ()=>{
    console.log("Mid div click");
})

let bubbleBtn = document.getElementById("bubble-btn").addEventListener("click", ()=>{
    console.log("button click");
    
})