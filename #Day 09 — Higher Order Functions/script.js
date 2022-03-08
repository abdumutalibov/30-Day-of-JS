// const callback = (n) => {
   
//     return n ** n
//   }
//    console.log(callback(2));
// const square=(number)=>{
//     return number * number
//   }
  
//   console.log(square(10))

  
  
//   const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }

//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

//   const numbers = [1, 2, 3, 4]

//   const sumArray = arr => {
//     let sum = 0
//     const callBack = function(element) {
//       sum += element
//     }
//     numbers.forEach(callBack)
//     return sum
  
//   }
//   console.log(sumArray(numbers))

// const number = [1,2,3,4]

// const sumA =arr=>{
//     let sum = 0
//     number.forEach((item,index)=>{
//         sum+=index
//     })
//     return sum
// }
// console.log(sumA());

// const sayHello =()=>{
//     console.log('Hello yopta');
// }
// setInterval(sayHello(), 2000)

let sum =0
const num =[1,2,3,4]
num.forEach(num => sum+=num)
    console.log(sum);
let g =0
let t = [1,2,3,5,6]
t.forEach(y=> console.log(y))

const country = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
country.forEach((e)=>console.log(e.toLocaleLowerCase()))

// map

const number =[1,2,3,4,5]
const numbers=number.map((n)=>n*n)
console.log(numbers);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesE=names.map((e)=>e.toLocaleUpperCase())
console.log(namesE);


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  const c=countries.map((e)=> e.toLocaleLowerCase())
  console.log(c);