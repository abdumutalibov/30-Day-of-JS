//let you = prompt('Enter your age:');

let you = prompt("Enter your age:");

// if(you>=18){
//     console.log('You are old enough to drive.');
// }else if(you !== 'number'){
//     console.log('Raqam kiriting');
// }
// else{
//     console.log(`You are left with ${18-you} years to drive.`);
// }
// you>=18 ? console.log('You are old enough to drive.'): console.log(`You are left with ${18-you} years to drive.`);

// 2
// const me =prompt('Enter yor age:')
// const you = prompt('Enteeeeeer your age:')

//  const tosh= 2021-you
//  const yosh = 2021 -me
// if(me<you){
//     console.log(`I am ${yosh} older then you ${tosh}`)
// }else{
//     console.log(`You are ${tosh} older then me ${yosh}`);
// }
//function abbos(son) {

//     let string=" "
//          for(i=1;i<=10;i++){
//     string=`${son}*${i}=${son*i}`
//     console.log(  string);
//          }
//      }
//      abbos(40)

// let a = [1,10,55,66,68,85,256,254]
// let low = 0
// let high = a.length-1
// let mid = (low + high)
// if(mid%2!==0) {
//     console.log(a[parseInt(mid/2)]);
// }
// else if(mid%2==0) {
//     console.log(a[mid/2]);
// }

// let a = prompt('Enter number')
// let b = prompt('Enter number')

// a>b ? console.log(`${a} is greater then ${b}`):console.log(`${b} is greater then ${a}`);

// let a = prompt('Enter a number:' )
// if(a%2==0){
//     document.writeln(`${a} is an even number`)
// }else{
//     document.writeln(`${a} is an odd number`)
// }
//Exercises: Level 2

// let a = prompt('Balll')
// if(a>=80){
//     console.log(`${a},A`);
// }
// else if(a>=70){
// console.log(`${a},B`);
// }
// else if(a>=60){
// console.log(`${a},C`);

// }
// else if(a>=50){
//     console.log(`${a},D`);
// }
// else if(a>=0){
//     console.log(`${a},F`);
// }else{
//     console.log('Idi jopu');
// }

// let a =prompt('Enter the season ')
// switch(a){
//     case '12':
//     case '1':
//     case '2':
//         console.log('winter');
//         break;

//         case '3':
//         case '4':
//         case '5':
//             console.log('spring');
//             break;

//             case '6':
//             case '7':
//             case '8':
//                 console.log('summer');
//                 break;
//                 case '9':
//                 case '10':
//                 case '11':
//                     console.log('fall');
//                     break;
//                     default:
//                         console.log("Sorry, we are not find of Season");
// }

// function getSeason() {
//     month = document.forms.date.month.value;
//     season = '';
//     switch(month) {
//         case '12':
//         case '1':
//         case '2':
//             season = 'winter';
//         break;
//         case '3':
//         case '4':
//         case '5':
//             season = 'spring';
//         break;
//         case '6':
//         case '7':
//         case '8':
//             season = 'summer';
//         break;
//         case '9':
//         case '10':
//         case '11':
//             season = 'fall';
//         break;
//     }
//     alert(season);
// }

// var d = new Date();
// var n = d.getDay();
//  if( n == 4 )
// console.log("Its weekend!!");
// else
// console.log("Its not weekend");
// const day = yourDateObject.isoWeekday();
// // or const day = yourDateObject.get('isoWeekday');
// const isWeekend = (day === 6 || day === 7);

// var dayOfWeek = yourDateObject.getDay();
// var isWeekend = (dayOfWeek === 6) || (dayOfWeek  === 0);

let a = prompt("What is the day today ?").toLowerCase();
//  let b = a.toLowerCase().prompt('heheheh')
switch (a) {
  case "monday":
  case "Tuesday":
  case "Wednezday":
  case "Thursday":
  case "Friday":
    document.writeln("Working day");
    break;
  case "Saturday":
  case "Sunday":
    document.writeln("Weekend");
    break;
  default:
    document.writeln("Что за хрен");
}
// Exercises: Level 3
let month = prompt("Enter month").toLowerCase();
switch (month) {
  case "december":
    document.writeln("December ");
  case "1":
  case "2":
    season = "winter";
    break;
  case "3":
  case "4":
  case "5":
    season = "spring";
    break;
  case "6":
  case "7":
  case "8":
    season = "summer";
    break;
  case "9":
  case "10":
  case "11":
    season = "fall";
    break;
}

let me = prompt("Enter your age:");
let yosh = me - 2021;
if (yosh >= 18) {
  console.log(`I am ${yosh} older then you `);
} else {
  console.log(`You are ${yosh} older then me`);
}
