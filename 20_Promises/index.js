// console.log("We are learning promises right now")

// Proise 
// Pending => Shyam ne request kia
// Fulfilled => Ram ne 100 de diye => resolve => .then
// Rejected => Ram  ne 100 nhi diye => reject => .catch

let promise = new Promise((resolve, reject) => {
    let num = '10'
    if (num == 10) {
        resolve('num is a number')
    } else {
        reject("num is not a number")
    }
})

promise.then((msg) => console.log(msg)).catch((msg) => console.log(msg));

 