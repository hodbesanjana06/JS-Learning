// async function showGreeting() {
//     return "welcome to javasvript"
// }
// showGreeting().then((result)=>{
//     console.log(result);
    
// })



// function Task(){
//     return new Promise((res , rej)=>{
//         setTimeout(() => {
//             res("Task Completed !")
//         }, 2000);
//     })
// }
// async function show() {
//     console.log("Loading...");
    
//     const result = await Task()
//     console.log(result);
    
// }
// show()



// function studentMarks (){
//     return new Promise((res , rej)=>{
//         let m = 2
//         if(m >= 40){
//             res("Student passed...")
//         }else{
//             rej("Student failed...")
//         }
//     })
// }
// async function show() {
//     try{
//         let res = await studentMarks()
//         console.log(res);
//     }catch(error){
//         console.log(error);
        
//     }
// }
// show()


// function login(){
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//             res("Login Sucessful...")
//         }, 1000)
//     })
// }

// function fetchProfile(){
//     return new Promise((res , rej)=>{
//         setTimeout(() => {
//             res("Profile loaded....")
//         }, 1000);
//     })
// }

// function showDashboard(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("Dashboard display.......")
//         }, 1000)
//     })
// }

// async function showAll() {
//     const r1 = await login()
//     console.log(r1);

//     const r2 = await fetchProfile()
//     console.log(r2);

//     const r3 = await showDashboard()
//     console.log(r3);
// }

// showAll()


function product(){
    return new Promise((res , rej)=>{
        let amt = 10

        if(amt > 0){
            res(`Order Placed sucessfully.... : amt is ${amt}`)
        }else{
            rej("Invalid order amount...")
        }
    })
}
async function show() {
    try{
        const result = await product()
        console.log(result);
    }catch(error){
        console.log(error);    
    }finally{
        console.log("order process finished.....");
        
    }
}
show()