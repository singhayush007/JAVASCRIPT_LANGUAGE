// console.log("We are learning callback function")

// const print = () =>{
//     console.log("printing press")
// }

// const test = (callback) => {
//     console.log("Inside the test function")
//     callback();
// }

// test (print) 

const print = () => {
    console.log("printing press")
}
const test = (name , callback) =>{
    console.log("Inside the test function" , name )
    callback();
}

test ('suman' , print)