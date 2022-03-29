// // function with two parameters
// function functionName(parm1, parm2) {
//     //code goes her
//   }
//   functionName(parm1, parm2) // during calling or invoking two arguments needed
//   // Function without parameter doesn't take input, so lets make a function with parameters
//   function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     console.log(sum)
//   }
//   sumTwoNumbers(10, 20) // calling functions
//   // If a function doesn't return it doesn't store data, so it should return
  
//   function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     return sum
//   }
  
//   console.log(sumTwoNumbers(10, 20))
//   function printFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//   }
//   console.log(printFullName('Asabeneh', 'Yetayeh'))

// const someFunc = function three(){
// return arguments
// }
// console.log(someFunc());

// const sayHi =()=> console.log('Hello Yopta');

// setTimeout(sayHi, 1000)

// const timer = setInterval(sayHi, 100)
// console.log(timer);

function toInitials(name){
  return name
  .split(' ')
  .map(function(el){
    return el.slice(0,1).toUpperCase() + '.';
  })
  .join('')
}
console.log(toInitials('hello'));