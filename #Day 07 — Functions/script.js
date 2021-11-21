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

  function As(){
let firstName='Arrow'
let lastName='Function'
let full=firstName+lastName

return full
  }
  console.log(As()); 
  
  3
  function addNumbers(){
    let aee= 444;
    let arr=241
    let qee=arr+aee
    return qee
  }
  console.log(addNumbers());
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