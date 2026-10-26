// fetch("https://jsonplaceholder.typicode.com.")
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data);
        
//     })
//     .catch((error)=>{
//         console.log(error);
        
//     })

// async function userdata() {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com.")

//         const data = res.json()

//         data.forEach((i)=>{
//             console.log(i.name);
            
//         })
        
//     }catch(error){
//         console.log(error);
        
//     }
// }
// userdata()



// async function name() {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com.")

//     const data = res.json();

//     data.forEach((i)=>{
//         if(i.id > 5){
//             console.log(i.name);
            
//         }
//     })

//     }catch(error){
//         console.log(error);
        
//     } 
// }

// name()


// async function userdata() {
//    try{
//         const res = await fetch("https://jsonplaceholder.typicode.com.")
//         const data = res.json()

//     console.log("name : ", data.name);
//     console.log(`Email : ${data.email} || city : ${data.address.city}`);
    
//    }catch(error){
//     console.log(error);
    
//    }
// }
// userdata()




// -----------Error Handling---------------------

// function check(){
//     try{
//         let age = 20;
//         if(age >= 18){
//             console.log("You are eligible...");
//         }else{
//             console.log("Your are not eligible...");
//         }
//     }catch(error){
//         console.log(error);
        
//     }
// }
// check()



// function devide(a , b){
//     try{
//         if(b == 0){
//             console.log("can not divide bye zero");
//         }else{
//             console.log(`A : ${a} and B :  ${b} || answer : ${a / b}`);
            
//         }
//     }catch(error){
//         console.log(error);
        
//     }
// }
// devide(10 , 0)
// devide(10 ,2)


// function product(price){
//     if(price <= 0){
//         throw new Error("price is zero...")
//     }
//     return "Valid price"
    
// }
// try{
//     console.log(product(0));
    
// }catch(error){
//     console.log(error);
    
// }


const data = new Promise((res , rej)=>{
    const payment = false;
    if(payment){
        res("Payment done...")
    }else{
        rej("Pyament Failed....")
    }
})
data 
    .then((result)=> console.log(result) )
    .catch((error)=> console.log(error))
    .finally(()=> console.log("Payment process finished..."))

