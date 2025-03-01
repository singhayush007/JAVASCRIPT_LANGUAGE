// console.log("We are learning objects in javascript")

// Objects

// const person = {
//     name : 'Ayush',
//     age : 23,
//     profession : 'Full stack developer',
//     Education : 'Btech'
// };

// const car ={
//     name: 'Thar',
//     color : 'Black',
//     price : 2000000,
// };

// const smartphone = {
//     name : 'iphone',
//     color : 'yellow',
//     price : 60000
// };

// console.log(smartphone.color)

// Spread Operator


// const smartphone1 ={
//     name : "iphone 15",
//     price : 750000,
//     camera : "20 mp",
//     battery : "5000mah",
//     ram : "4 gb",
//     rom : "64 gb"
// };

// const smartPhone2 = {...smartphone1};
// console.log(smartPhone2)

// const smartphone1 ={
//     name : "iphone 15",
//     price : 750000,
//     camera : "20 mp",
//     battery : "5000mah",
//     ram : "4 gb",
//     rom : "64 gb"
// };

//const smartPhone2 = {...smartphone1 , name : 'iphone16'};
//console.log('smart phone 2 hai ye wala',smartPhone2)

// Object Destructuring 
const smartphone1 ={
    name : "iphone 15",
    price : 750000,
    camera : "20 mp",
    battery : "5000mah",
    ram : "4 gb",
    rom : "64 gb"
};

const {name , price , camera} = smartphone1;
console.log(name , price, camera)