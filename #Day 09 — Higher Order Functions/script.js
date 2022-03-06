const callback = (n) => {
   
    return n ** n
  }
   console.log(callback(2));
const square=(number)=>{
    return number * number
  }
  
  console.log(square(10))

  
  
  const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }

    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  const numbers = [1, 2, 3, 4]

  const sumArray = arr => {
    let sum = 0
    const callBack = function(element) {
      sum += element
    }
    numbers.forEach(callBack)
    return sum
  
  }
  console.log(sumArray(numbers))

const number = [1,2,3,4]

const sumA =arr=>{
    let sum = 0
    number.forEach((item,index)=>{
        sum+=index
    })
    return sum
}
console.log(sumA());

const sayHello =()=>{
    console.log('Hello yopta');
}
setInterval(sayHello(), 2000)
setInterval(sayHello(), 2000)