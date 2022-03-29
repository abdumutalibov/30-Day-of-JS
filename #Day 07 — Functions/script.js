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

// const a =(b)=>{
//   return b-3
// }
// console.log(a(1,4,4,));

// const b =(c ,d)=>{
//   return `${d+4} ${c-2} `
// }
// console.log(b(1,-2,-2));

// function solveQuadratic(c ,d){
// return `${d-10} ${c-5}`
// }

// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}

// function solveQuadratic(c ,d){
//   return `${d+2} ${c-3}`
//   }
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}

// function printArray([arr]){
// return arr.length
// }
// console.log(printArray(['calculated ']));

// function showDateTime (){
// const now = new Date()

//   console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
// }
// showDateTime()

function swapValues(x,y){
return (`${x} ${y} `)
}

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5)

function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

// console.log('Age: ', calculateAge(1819))


function reverseArray(rev){
  let emp = []
  for(let i=rev.length;i>-1;i--){
    emp.push(rev[i])
  }
  
  return emp
}

// console.log(reverseArray([1, 2, 3, 4, 5]))

const reverseArra =(arr)=>{
  const emp =[]
  for(let i=arr.length;i>-1;i--){
    emp.push(arr[i])
  }
  return emp
}
// console.log(reverseArra(['A', 'B', 'C']))
// let fruts=[1,2,3,4,5,6,7] 
// for(let i=fruts.length;i>=0;i--){
//   console.log(fruts[i]);
// }

const up =(to)=>{
  const str=[]
for(let i=0;i<to.length;i++){
  str.push(to[i].toUpperCase())
}
return str
}
// console.log(up(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']));

const addItem =(add)=>{
  const item =['Apple']
  for(let i=0;i<add.length;i++){
    item.push( add[i])
  }
return item
}
// console.log(addItem(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']));


const removeItem =(remov)=>{
  const item = 'Sweden'
  remov = remov.filter(e => e !== item)
  return remov
}

console.log(removeItem(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'])); 



const sumOfNumbers =(...sum)=>{

  let as = 0
  // for( const ele of sum){
  //   as+=ele
  // }
  for(let i=0;i<sum.length;i++){
as+=sum[i]
  }
  return as
}
console.log(sumOfNumbers(1,2,3));


const sumOfOdds=(sum)=>{
let num = []
for(const ele of sum){
  if(ele%2==1){
    num.push(ele)
  }
}
return num
}
console.log(sumOfOdds([23,45,23,68,87,34,85,33,3,6,8,8,423,23]));


const evensAndOdds =(a)=>{
  let num=[]
for(let i=0;i<a.length;i++){
  if(a[i]%2==1){
    num.push(a[i].length)
  }
}
console.log(num);
return num
}
console.log(evensAndOdds([100])); ;




  function cal(arr){
      let num= 0
    for(let i=0; i<arr.length;i++){
      if(arr[i].length%2==1){
     num+=arr[i].length
      }
    }
    return num
    }
    console.log(cal(100));

  let k=0
for(let i=0;i<=100;i++){
if(i%2==0){
  // console.log(k+=[i].length);
}
}

const sum =(...n)=>{
let k=0
for(let i=0;i<n.length;i++){

  k+=n[i]
}
return k
}

console.log(sum(1, 2, 3));



const suma =(...m)=>{
  let p=0
  for(const ele of m){
    p+=ele
  }
  console.log(p);
  return p
}
suma(1, 2, 3, 4) 

const randomUserIp = ()=>{
  var ip = (Math.floor(Math.random() * 255) + 1)+"."+
  (Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255)
  )+"."+(Math.floor(Math.random() * 255));
  console.log(ip)
}
randomUserIp()


const evenAndOdds = (num) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
          even++
      } else if (i % 2 !== 0) {
          odd++
      }
  }
  return  console.log(`the number of odds are ${odd} \n the number of even are ${even}`);
}
evenAndOdds(100)
const randomMacAddress =(mac)=>{
  let result = ''
  let result1 = ''
  let result2 = ''
  let result3 = ''
  let result4 = ''
  let result5 = ''
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0'
  let charactersLength =characters.length
  for (let i = 0; i < mac; i++)  result +=characters.charAt(Math.floor(Math.random() * charactersLength))
  for (let i = 0; i < mac; i++)  result1 +=characters.charAt(Math.floor(Math.random() * charactersLength))
  for (let i = 0; i < mac; i++)  result2 +=characters.charAt(Math.floor(Math.random() * charactersLength))
  for (let i = 0; i < mac; i++)  result3 +=characters.charAt(Math.floor(Math.random() * charactersLength))
  for (let i = 0; i < mac; i++)  result4 +=characters.charAt(Math.floor(Math.random() * charactersLength))
  for (let i = 0; i < mac; i++)  result5 +=characters.charAt(Math.floor(Math.random() * charactersLength))
  
  let random =(Math.floor(Math.random() * 10))+`${result}:`+(Math.floor(Math.random() * 10))+`${result1}:`+(Math.floor(Math.random()*10))+`${result2}:`+(Math.floor(Math.random() * 10))+`${result3}:`+(Math.floor(Math.random() * 10))+`${result4}:`+(Math.floor(Math.random() * 10))+`${result5}:`
  console.log(random);
}
randomMacAddress(1)

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log(`#${randomColor}`);
}

setBg();


const userIdGenerator =()=>{

  const random = Math.floor(Math.random()* 167772158).toString(16).toUpperCase()
  console.log(random);
}
userIdGenerator()


// const userIdGeneratedByUser =()=>{
//   let chars ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
//   let noId = Number(prompt('Enter how many id do you want to genereate'))
//   let noChars = Number(prompt('in how many chars'))
//   let ids = []
// for(let i =0; i<noId; i++){
//   ids[i] = ""
//   for(let k=0;k<noChars;k++){
//     ids[i]+=chars[Math.floor(Math.random()* chars.length)]
//   }
// }
//   console.log(ids);
//   ids.forEach(function (id){
//     console.log(id);
//   })
// }
// userIdGeneratedByUser()

const rgbColorGenerator =()=>{
  let r1 = Math.floor(Math.random() * 255)
  let r2 = Math.floor(Math.random() * 255)
  let r3 = Math.floor(Math.random() * 255)
  console.log(`rgb(${r1},${r2},${r3},)`);
}

rgbColorGenerator()



const arrayOfHexaColors =()=>{
  let chars ="0123456789ABCDEF"
  let hex =[]
  for(let i=0;i<3;i++){
    hex[i]='#'
    for(let j=0;j<6;j++){
      hex[i]+= chars[Math.floor(Math.random() * chars.length)]
    }
  }
  console.log(hex);
  return hex
}
arrayOfHexaColors()


const arrayOfRgbColors =(type,arrLength)=>{
  let chars ="0123456789ABCDEF"
  let colors = []

  if(type ==='rgb'){
    for(let i =0; i<arrLength;i++){
      colors[i] = 'rgb';
      colors[i] +=`(${Math.floor(Math.random()* 255)},`
      colors[i] +=`${Math.floor(Math.random()* 255)},`
      colors[i] +=`${Math.floor(Math.random()* 255)})`
      
    }
  }
  else if(type === "hex"){
    for(let j=0; j< arrLength;j++){
      colors[j] ='#';
      for(let k =0;k<6;k++){
        colors[j]+= chars[Math.floor(Math.random()* chars.length)]
      }
    }

  }
  console.log(colors);
  return colors
}
arrayOfRgbColors('rgb',1)

const shuffleArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      let rand = Math.floor(Math.random() * arr.length -1);
      if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
          newArr.push(arr[rand]);
      }
  }
  console.log(newArr);
  return newArr
}
shuffleArray([1, 2, 3,4,5,6,7,8,9,10,11,12,23]);




const array = (type, arraylength)=>{
  let empty = []
  let char = '1234567890ABCDEF'
  if(type =='name1'){
    for(let i=0;i<arraylength;i++){
empty[i]='rgb'
empty[i]+= `(${Math.floor(Math.random() * 255)},`
empty[i]+= `${Math.floor(Math.random() * 255)},`
empty[i]+= `${Math.floor(Math.random() * 255)})`


    }

  }else if(type = 'name2'){
    for(let i=0;i<arraylength;i++){
      empty[i]='#'
      for(let j=0;j<6;j++){
        empty[i]+=char[Math.floor(Math.random() * char.length)]
      }
    }
  }

  console.log(empty,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheee');
  return empty
}

array('name2',4)


shuffleArray([1, 2, 3]);

const factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    console.log(factorial);
    return factorial;
}
factorial(5);

const isEmpty =(val)=>{
  if(val === undefined){
    console.log('its empty');
  }else{
    console.log('its not empty');
  }
}
isEmpty(5)

const summ =(...args)=>{
  let summ =0;
  args.forEach(arg=>{
    summ += arg
  })
  console.log(summ);
  return summ
}
// summ(1,2,3,4,5,1)


const sumOfArrayItems = (arr)=>{
let sum =0
arr.forEach(function(ar){
  if (typeof ar === "number") {
    sum +=ar;
    sum = arr.length / sum
  }else{
    console.log('its string');
  }
})
console.log(sum);
return sum
}
sumOfArrayItems([1,2,3,4,])


const average = (arr) => {
  let sum = 0;
  arr.forEach(function (ar) {
      if (typeof ar === "number") {
          sum += ar;
          sum = arr.length / sum;
      } else {
          sum = `it's a string`;
      }
  })
  console.log(sum);
  return sum;
}
average([1, 2, 3]);


const modifyArray =(arr)=>{
 if(arr.length>=6){
   for(let i=0;i<arr.length;i++){
    if(i = 5){
      arr.splice(5)
    }
   }
   console.log(arr);
   return arr
 } else {
   console.log(arr);
   return 'its not found'
 }
}
modifyArray([1,2,3,'jhk',4,5,54,5345,543])





const modif =(val)=>{
  if(val.length >=6){
    for(let i =0;i< val.length;i++){
      if(i = 5){
        val.splice(5)
      }else{
        console.log('its String');
      }
    }
   }
   console.log(val);
   return val
}
modif([1,2,3,4,5,6,7])


// const isPrime =(num)=>{
//   for(let i=2;i>num;i++){
//     if(num % i===0 && num>1){
//       return `${num} its prime number`
//     }else{
//     return('its not prime numbers');
//   }
//   }

// }
// isPrime(5)
// const isPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//       if (num % i === 0 && num > 1) {
//           return `${num} is a prime number`;
//       } else {
//           return `not prime`
//       }
//   }
//   console.log(num);
//   return num
// }
// isPrime(5);
function* Prime(number) { 
  const infinit = !number && number !== 0;
  const re = /^.?$|^(..+?)\1+$/;  
  let actual = 1;
 
  while (infinit || number-- ) {
      if(!re.test('1'.repeat(actual)) == true) yield actual;
      actual++
  };
};

let [...primers] = Prime(101); //Example
console.log(primers, 'здесс');



function isPrime(num) {
  var prime = num != 1;
  for(var i=2; i<num; i++) {
      if(num % i == 0) {
          prime = false;
          break;
      }
  }
  console.log(num);
  return prime;
}

function checkUnique(array)
{ var i,obj={};
  for(i=0;i<array.length;i++)
  { if(obj[array[i]])
      return false;
    obj[array[i]]=true;
  }
  return true;
}
console.log(checkUnique([1,2,3,4]));
console.log(checkUnique([1,2,1,4]));

const isUnique = (arrToTest) => 
  arrToTest.length === new Set(arrToTest).size

console.log(isUnique([1,1,2,3]));
console.log(isUnique([1,2,3]));



const isValidVariable =()=>{
  var ᾩ = "something";
  var ĦĔĽĻŎ = "hello";
  var 〱〱〱〱 = "less than? wtf";
  var जावास्क्रिप्ट = "javascript"; // ok that's JavaScript in hindi
  var KingGeorgeⅦ = "Roman numerals, awesome!";
  return console.log( ᾩ,〱〱〱〱,जावास्क्रिप्ट,KingGeorgeⅦ , ĦĔĽĻŎ  );
}
isValidVariable()



const sevenRandomNumbers =()=>{
let c =` ${Math.floor(Math.random()*9)},${Math.floor(Math.random()*9)},${Math.floor(Math.random()*9)},${Math.floor(Math.random()*9)},${Math.floor(Math.random()*9)},${Math.floor(Math.random()*9)},${Math.floor(Math.random()*9)}`
console.log(c);
}
sevenRandomNumbers(4)

const reversCountries =()=>{
let goo = ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM'].reverse()
return console.log(goo);
}
reversCountries()
// const gen =(hey)=>{
// let a =0
// let b =0
// for(let i=0 ;i<=hey;i++){
//   if(i%2===0){
//     a++
//   }else if(i%2!==0){
//     b++
//   }
// }
// return console.log(`${a}, ${b}`);
// }

// gen(100)
// function getBla(arr) {
//   const a = arr.map((value)=>{
//     return value.length
//   })
//   arr.forEach(val => {
//     if (val.length>= Math.max(...a)) {
//       console.log(val);
//     }
//   });
// }
// getBla(["Aleksey", "Kartoshka", "Margarita", "Morgenshtern", "Monica"]);










// let arr =[1,2,false,'hello', 24,'world',undefined,null,'error',22]
// for(let i=0;i<arr.length;i++){
//   emp+=(arr[i])
//   console.log(typeof arr[i]);
// }


// console.log(is(), 2);
// const arrayOfHexaColors =()=>{
//  let chars = "0123456789ABCDEF "
//  let hex =[]
//  for(let i =0; i<3;i++){
//    hex[i]='#'
//    for(let j=0;j<6;j++){
//      hex[i]+= chars[Math.floor(Math.random()* chars.length)]
//    }
//  }
//  console.log(hex);
//  return hex
// }
// arrayOfHexaColors()

// const userIdGeneratedByUser = () => {
//   let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//   let noId = Number(prompt("how many id do you want to generate"));
//   let noChars = Number(prompt("in how many chars"));
//   let ids = [];
//   for (i = 0; i < noId; i++) {
//       ids[i] = "";
//       for (k = 0; k < noChars; k++) {
//           ids[i] += chars[Math.floor(Math.random() * chars.length)];
//       }
//   }
//   console.log(ids)
//   ids.forEach(function (id) {
//       console.log(id);
//   })
// }
// userIdGeneratedByUser();



// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }

// console.log(makeid(6));


// const first = [1,2,3,4,]
// const second = [3,4,5,6]
// function intersection (a, b){
//   let r=[]
//   for(let i=0;i< a.length;i++){
//     if(a[i]===3){
//     r.push(a[i] )
//     }
//   }
//   for(let i=0;i< b.length;i++){
//     if(a[i]===4){
//     r.push(a[i] )
//   }
// }
// console.log(r);

// return a, b
// }
// intersection(first, second)

// for(var i =0;i<10; i++){
//   setTimeout(function (){
//     console.log(i);
//   }, 10)
// }