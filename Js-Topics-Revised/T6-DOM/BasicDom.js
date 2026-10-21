// // let heading = document.getElementById("heading")
// // heading.textContent= "i change the text"

// // heading.style.color ="red";
// // heading.style.backgroundColor ='yellow'
// // heading.style.fontsize = "200px"

// // let txt = document.querySelector("p");
// // txt.textContent = "Create a paragraph with class info. Use querySelector() to change its text."


// // let info = document.getElementsByClassName("info")
// // for(let i =0 ; i< info.length ; i ++){
// //     info[i].style.color = "green"
// //     info[i].style.backgroundColor = "silver"
// //     info[i].style.fontsize="600px"
// // }


// // let name = document.getElementById("name");
// // name.textContent= "Radhakrishna"

// // let skills = document.getElementById("skills")
// // skills.textContent = "Django"

// // let city = document.getElementById("city");
// // city.textContent = "vrindavan"


// let counthead = document.getElementById("heading")
// let btn = document.getElementById("btn")

// btn.addEventListener("click" , ()=>{
//     counthead.textContent = Number(counthead.textContent) + 1
// })



// let txt = document.getElementById("info")
// let button = document.getElementById("button")

// button.addEventListener("click", ()=>{
//     if(txt.style.display === "none"){
//         txt.style.display = "block"
//         button.textContent = "hide"
//     }else{
//         txt.style.display = "none"
//         button.textContent = "show"
//     }
// })


// let colorbtn = document.getElementById("colorbtn")
// let color = ['blue', 'orange' , 'yellow']
// let index = 0
// colorbtn.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = color[index]
//     index ++

//     if(index === color.length){
//         index = 0
//     }
// })


// let name = document.getElementById("name")
// let text = document.getElementById("text")
// let changeName = document.getElementById("changeName");

// changeName.addEventListener("click", ()=>{
//     text.textContent = name.value
// })




// // __________________DOM MANIPULATION________________________________________
// let input = document.getElementById("input");
// let addbtn = document.getElementById("addbtn")
// let container = document.getElementById("container")

// addbtn.addEventListener('click', ()=>{
//     let p = document.createElement("p")
//     p.innerHTML = input.value
//     container.append(p)
//     input.value=""

// })


// let para1 = document.getElementById("para1")
// let btn1 = document.getElementById("btn1")

// btn1.addEventListener('click', ()=>{
//     para1.remove()
// })


// let para2 = document.getElementById("para2")
// let btn2 = document.getElementById("btn2")

// btn2.addEventListener('click', ()=>{
//     para2.remove()
// })


// let para3 = document.getElementById("para3")
// let btn3 = document.getElementById("btn3")

// btn3.addEventListener('click', ()=>{
//     para3.remove()
// })



// let listtxt = document.getElementById("listtxt")
// let add = document.getElementById('add')
// let ul = document.getElementById('list')

// add.addEventListener('click', ()=>{
//     let li = document.createElement("li")
//     li.textContent=listtxt.value
//     ul.appendChild(li)
//     listtxt.value=""

//     let removebtn = document.createElement("button")
//     removebtn.textContent = "Remove"
//     ul.appendChild(removebtn)
//     removebtn.addEventListener('click',()=>{
//         li.remove()
//         removebtn.remove()
//     })
// })



let user = [
    {name : "sanjana" , age : 23},
    {name : "sanjana" , age : 23}
]
console.table(user)