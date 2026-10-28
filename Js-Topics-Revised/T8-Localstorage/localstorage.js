// localStorage.setItem("language", "JavaScript");

// localStorage.getItem("language");

// localStorage.setItem("level", "beginner");

// localStorage.removeItem("level");

// localStorage.getItem("level");

// let skills = ["snajana" , 'samja', "yashwant"]

// localStorage.setItem("Skills", JSON.stringify(skills))

// let skill = JSON.parse(localStorage.getItem("skills"))
// console.log(skill);
// console.log(skill[0]);





// ---------------------------------------------------
//                  Username save
// ---------------------------------------------------

// let savebtn = document.getElementById('savebtn')
// let clearbtn = document.getElementById('clearbtn');
// let input = document.getElementById("input")

// savebtn.addEventListener("click", ()=>{
//         if(input.value === ""){
//             alert("something enter ...")
//         }else{
//             localStorage.setItem("username", input.value)
//         }
        
//     })
// clearbtn.addEventListener("click", ()=>{
//     localStorage.removeItem("username")
//     input.value = ""

// })



let input = document.getElementById("inputvalue");
let btn = document.getElementById("save")
let result = document.getElementById("result");

btn.addEventListener("click",()=>{
    let li = document.createElement("li")
    li.textContent = input.value
    result.append(li)
    localStorage.setItem("Task", input.value)
    input.value=""
})