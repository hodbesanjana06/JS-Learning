// function getUser(data){
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//             res(data)
//         },2000)
//     })
// }

// async function show() {
//     try{
//         const result = await getUser({ id: 1, name: "Sanjana", role: "Developer" })
//         console.log(result);
        
//     }catch(error){
//         console.log(error);
        
//     }
// }
// show()



// function login(username , password){
//     return new Promise((res , rej)=>{
//         const user = username
//         const pass = password

//         if(user === "admin" && pass === "1234"){
//             res("Login sucessfuly....")
//         }else{
//             rej("Invalid Credentials.....")
//         }
//     })
// }
// async function show() {
//     try{
//         let answer = await login("admin" , "1234")
//         console.log(answer);
        
//     }catch(error){
//         console.log(error);
        
//     }
// }
// show()


const p1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("result one")
    }, 1000);
})

const p2 = new Promise((res)=>{
    setTimeout(()=>{
        res("result two")
    }, 2000)
})


const p3= new Promise((res)=>{
    setTimeout(()=>{
        res("result three")
    }, 3000)
})


Promise.all([p1 , p2 , p3])
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})