// -------------------  Smart Shopping Bill--------------------------

// let prices = [1749, 1299, 450, 2199, 899];

// console.log("______________________________");
// console.log("Shoping Bill");
// let total = 0
// let dis = 0

// for(let i = 0 ; i< prices.length ; i++){    
//     total = total + prices[i]    
// }

// console.log("Prices : ", prices);
// console.log("Total : ", total);

// if(total >= 4000){
//     dis = total * 10 / 100
//     let finalPrice = total - dis

//     if(finalPrice <= 3000){
//         console.log("Add  ₹99 delivery charges : ");
//         console.log(`final price : ${finalPrice + 99}`);
//     }
//     console.log("Discount 10 % : ",dis);
//     console.log("After Discount : ", finalPrice);
      
// }else if(total >= 6000){
//     dis = total * 15 / 100
//     console.log("discount 15 % ", dis);
// }else{
//     console.log(`total : ${total}`);
    
// }





// ------------------- Task 2: Cinema Ticket Pricing-------------------------
console.log("______________________________");
console.log("Cinema ticket Pricing");
let age = 10;
let amt = 250
console.log(`total price : ${amt} and Age : ${age}`);

if(age <= 12){
    console.log(` After Discount : 40 % ||   ${amt * 40 / 100} `);
}else if(age >= 60){
    console.log(` After Discount : 30 % ||   ${amt * 30 / 100} `);
}else if (age >12 && age <= 25){
   console.log(` After Discount : 20 % ||   ${amt * 20 / 100 } `);
}else{
    console.log("Everyone Price : ", amt);
    
}

