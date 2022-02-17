// function areaOf(r) {
//     let area =Math.PI*r*r
//     return area
// }
// console.log(areaOf(100));

// function sumT (parm1,parm2) {
//   let sum =parm1+parm2
//   console.log(sum);  
// }
// sumT(10,20)

// function printFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//   }
//   console.log(printFullName('Asabeneh', 'Yetayeh'))

//   function sumArr(arr) {
//       let sum =0
//       for(let i=0;i<arr.length;i++){
//           sum+=arr[i]
//       }
//       return sum
      
//   }
//   const numbers =[1,2,3,4,5];
//   console.log(sumArr(numbers));

//   const areaOfe=(radius)=>{
//       let area =Math.PI*radius*radius
//       return area
//   }
//   console.log(areaOfe(10));

//   const change =arr =>{
//       const newArr =[]
//       for(const element of arr){
//           newArr.push(element.toUpperCase())
//       }
//       return newArr
//   }
//   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  
//   console.log(change(countries));

  
//   function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
//   }
  
//   console.log(greetings())
//   console.log(greetings('Asabeneh'))


//   function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
//   }
  
//   console.log(generateFullName())
//   console.log(generateFullName('David', 'Smith'))



//   function weightOfObject(mass, gravity = 9.81) {
//     let weight = mass * gravity + ' N' // the value has to be changed to string first
//     return weight
//   }
  
//   console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
//   console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon

  // 💻 Exercises

  // Exercises: Level 1

//   function As(){
// let firstName='Arrow'
// let lastName='Function'
// let full=firstName+lastName

// return full
//   }
//   console.log(As()); 
  
//   3
//   function addNumbers(){
//     let aee= 444;
//     let arr=241
//     let qee=arr+aee
//     return qee
//   }
//   console.log(addNumbers());
//   4
//     var length = prompt("Enter a whole number for the length of your rectangle.");
//     var width = prompt("Enter a whole number for the width of your rectangle.");
//     function area(length,width){
// return length*width;
//     }
//     function primeter(length,width){
//       return 2*(length+width)

//     }
//     alert('The area of your rectangle is ' + area(length, width))
//     alert('The perimeter of your rectangle is ' + primeter(length, width))


    6
//     function volueOfRectPrism(){
//      let l= prompt('enter length ')
//      let w = prompt('enter width')
//      let h = prompt('enter height ')
//      let v = l*w*h
//      return alert(v)
//     }
// volueOfRectPrism()
7
// function Area(){
//   let r = prompt('enter radius')
// let p =3.14
// let area =p*r*r
// return alert(area)
// }
// Area()
8
//  function circle(){
// let r = prompt('enter circle ')
// return alert(2*3.14*r)
// }
// circle()
9
// function density(){
//   let mass = prompt('entrt your mass ')
//   let valume = prompt('enter your volume')
//   let den = mass/ valume
//   return alert( den )
// }
// density()

10 

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// function square(){
//   let num = [342,543,23,54,654,44,2,5,463,53,68,73,89,3];
//   let num2=[]
//   for(let i=0; i<num.length; i++){
//     if(num[i]%2==1){
// num2.push(num[i])
//     }
//   }
//   console.log(num2.sort((a,b)=> a-b));
// }
// square()

// function cal(arr){
//   let num= []
// for(let i=0; i<arr.length;i++){
//   if(arr[i]%2==1){
//  num.push(arr[i])
//   }
// }
// return num
// }
// console.log(cal([5,0,-5,20,88,17,43,-32]));
// const name =(name3)=>{

//   return name3+name3
// }
// console.log(name(10));
// let foo = "bar"
// foo[0]='x'
// console.log(foo[0]);

// let baz ={ x:1}
// baz['x']=2543
// console.log(baz);

// const  names=(firstname, lastname)=>{
//   return `${firstname}${lastname}`
// }
// console.log(names('Azim','Jon'));

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }

// console.log(printFullName('Asabeneh', 'Yetayeh'))

// function  checkSeason(month ){
// let mon =''
// for(let i=0;i<month.length;i++){
// mon+=month[i]
// }
// return mon
// }
// console.log( checkSeason('Autumn, Winter, Spring or Summer.'));

// const sumAllNums = (...args) => {

//   console.log(Math.max(...args))
//  }
 
//  sumAllNums(1, 2, 3, 4)

//  function findMax(...max){
//    Math.max(...max)
//    return max 
//  }

//  console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// function solveQuadratic(n=1){

// return n-n
// }
// console.log(solveQuadratic()) // {0}

const a =(b)=>{
  return b-3
}
console.log(a(1,4,4,));

const b =(c ,d)=>{
  return `${d+4} ${c-2} `
}
console.log(b(1,-2,-2));

function solveQuadratic(c ,d){
return `${d-10} ${c-5}`
}

console.log(solveQuadratic(1, 7, 12)) // {-3, -4}

function solveQuadratic(c ,d){
  return `${d+2} ${c-3}`
  }
console.log(solveQuadratic(1, 0, -4)) //{2, -2}

function printArray([arr]){
return arr.length
}
console.log(printArray(['calculated ']));

function showDateTime (){
const now = new Date()

  console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
}
showDateTime()

function swapValues(x,y){
return `${x} `
}

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5)