const numbers = [1,2,3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne,numTwo);

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson,fourthPerson);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  console.log(frontEnd);
  console.log(backEnd);

  const namesss = [undefined, 'Brook', 'David']

  let full=[ 
      firstPerson = 'Asabeneh',
      secondPerson,
      thirdPerson,
      fourthPerson = 'John'

  ] =namesss
  console.log(firstPerson,secondPerson);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let [num1,num2,num3, ...rest] = nums
  console.log(num3, num1);
  console.log(rest.sort());


//   Destructuring during iteration
  const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
  for(const [country, city] of countries){
      console.log(country,city);
  }
  const fullStackk = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  for(const[first,second,four,third]of fullStackk){
      console.log(first,second,four,third);
  }
//   Destructuring Object\

