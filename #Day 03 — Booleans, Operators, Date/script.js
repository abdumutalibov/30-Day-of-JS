
// const now = new Date()
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getTime())



// //Exercises: Level 1
// let firstName ='Boop'
// let lastName = 'Dirt'
// let country = 'AQSH'
// let city = 'Tashken'
// let isMarried= false
// let age = 23
// let fullinfo = firstName +lastName +country +city +isMarried+age
// console.log(typeof firstName,lastName);
// console.log(typeof fullinfo  );
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log('10'==10);
// console.log(parseInt('9.8') ==10);
// console.log(Math.round(9.8)===10);

// //Boolean value is either true or false.
//i
// console.log(3==3);
// let  a = 3
// b =2
// console.log(`${a} is greater than ${b}: `,a>b)
// console.log('abds'=='abds');
// //ii
// console.log(50+50==90);
// console.log('asdasd'==="adadada");
// console.log(`${a} is  greater than ${b}: `,a<b)

// 5

// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4<3);
// console.log(4<=3);
// console.log(4==4);
// console.log(4===4);
// console.log(4!=4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// console.log('python'.length!=='jargon'.length,'');

// //6 Figure out the result of the following expressions first without using
// //  console.log(). After you decide the result confirm it by using console.log()
// console.log(4>3&&10<12,'i');
// console.log(4>3&&10>12);
// console.log(4<3 || 10>12);
// console.log(4>3||10>12);
// console.log(!(4>3),'v');
// console.log(!(4<3));
// console.log(!(false));
// console.log(!(4>3 && 10<12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === '4'));
// console.log('dragon'.includes('on')!=='python'.includes('on'));

// //7 Use the Date object to do the following activities

// // let naw = new Date()
// // console.log(naw.getFullYear());
// // console.log(naw.getMonth());
// // console.log(naw.getDate())
// // console.log(naw.getUTCDay())
// // console.log(naw.getHours());
// // console.log(naw.getMinutes());
// // console.log(naw.getSeconds());
// // const allSeconds=Date.now()
// // console.log(allSeconds);
// // console.log(naw.getTime(milliseconds, since ,January, 1,1980));

// // Exercises: Level 2
// 1
// // let base= prompt('Enter the base of a triangle: ');
// // let height=prompt('Enter the height of a triangle: ');
// // let all= base*height
// // console.log(`The area of triangle is ${all}`);

// // 2avaScript program to find the area of a triangle
// // let A = parseInt( prompt('Enter side a: '))
// // let B =parseInt( prompt( 'Enter side b: '))
// // let C =parseInt( prompt('Enter side c: '))
// // let abc= (A+B+C)
// // console.log('The perimeter of the triangle is:',abc);


// 3
// // var length = parseInt(prompt("Enter a whole number for the length of your rectangle."));
// // var width = parseInt(prompt("Enter a whole number for the width of your rectangle."));
// // function area(length, width) {
// //     return length * width;
// // }
// // function perimeter(length, width) {
// //     return 2*( length + width);
// // }

// // console.log('The area of your rectangle is ' + area(length, width));         
// // console.log('The perimeter of your rectangle is ' + perimeter(length, width));

// 4
// // let pi = parseInt(prompt('Enter a whole number for the pi of your circle: '))
// // let pi = 3.14
// // let r = parseInt(prompt('Enter a whole number for the radius of your circle: '))
// // function are(pi,r){
// //   return pi*r**3
// // }
// //  function per(pi,r){
// //    return 2 *pi *r
// //  }
// // console.log('calculate the area of a circle ',are(pi,r));
// // console.log('circumference of a circle',per(pi,r));
//  5
// // let a = 1
// // let b = 2
// // let c=Math.round( Math.sqrt((a**2+b**2)));
// // console.log('lenght',c);

9 
let hours = parseInt(prompt('Enter hours: '));
let rate =parseInt(prompt('Enter rate per hour: '))
let earning = hours*rate;
console.log(`Your weekly earning is:${earning}`);

// function test(name ,age, email ){
//   name.length<=4 ? console.log('error'):console.log('kelingiz')
// age <=15 ? console.log('yoqol'):console.log('welcom')
// email.length<=10 ? console.log('noto`g`ri'): console.log('to`g`ri')
// } 
// test('AZree',17,'abdumu@gmail')
 //10 
// // let name = prompt('write your name: ')
// // // if(name.length<=7){
// // console.log('short');
// // }else{
// //   console.log('long');
/// // 
//11
//  let first = prompt('write your first  Name: ')
// let last = prompt('write your family  Name: ')
// if(first.length<=4){
//   console.log(`Your first name ${first} is short then your family name ${last}`);
// }else{
// console.log(`Your family name ${last} is long then your first name ${first}`);
// }
//12
// let myAge = prompt('write your age: ')
// let yourAge= prompt('wrie another age: ')
// if(myAge>=100){
//   console.log(`I am ${myAge} years older then you `);
// }else{
//   console.log(`You are ${yourAge} years older then me`);
// }

// var birth = prompt("Please input your Birth year")
// var now = new Date()
// var age = now.getYear() - birth + 1900

// if(age<18)
//     console.log('minor')
// else if(age>=18 && age<36)
//     console.log('youth')
// else console.log('elder')

//13

// let yosh= prompt('enter your birth: ')
// let yosh2=2021-yosh
// if(yosh2>=18){
//   document.writeln(`siz ${2021-yosh} ruxsat bpr`)
// }else{
//   document.writeln(`siz ${yosh2} yoshdasiz ruxsat olishingizga xali ${18-yosh2}`)
// }
14
// let now = new Date;
// let age  = now.getFullYear()-1998
//  console.log(age);
//  var sec = 23 * 365 * 24 * 60 * 60;
//  console.log(`you lived ${sec} secunds`);


// var date = new Date('2010-08-10 00:00:00');
// date = date.toLocaleDateString(undefined, {day:'2-digit'}) + '-' + date.toLocaleDateStr

// function init(){
//   var d = new Date();
//   var day = d.getDate();
//   var x = d.toDateString().substr(4, 3);
//   var year = d.getFullYear();
//   document.querySelector("#mydate").innerHTML = day + '-' + x + '-' + year;
// }
// window.onload = init;

15
//  const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${year}-${month}-${date} ${hours}:${minutes}`) // 4/1/2020 0:56
// console.log(`${date}-${month}-${year} ${hours}:${minutes}`) // 4/1/2020 0:56
// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

//Exercises: Level 3

let now  =  new Date;
let year = now.getFullYear()
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
 const hours = now.getHours() // return number (0 - 23)
 const minutes = now.getMinutes() // return number (0 -59)

 console.log(year,`0${month}:${date}:${hours}:${minutes}`);