//console.log("We are learning function scope...")

// Global Scope

// let diaplay = () => {
//     let globalVar = 10;
//     console.log("Inside the display fun");
//     console.log("Inside the function" , globalVar)
// };
// dislay();
// console.log(globalVar); 

// Block Variable 

let blockVar = 10;
if(true){
    console.log(blockVar)
}
console.log(blockVar) 

