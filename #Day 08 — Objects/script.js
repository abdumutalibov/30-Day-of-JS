// let dog = {
//     name :'Azim',
//     logs:'legs',
//     color:'red',
//     age:23,
//    dog:bark= function(){
//     // console.log("woof woof woof")
//     },
// }
// console.log(Object.values(dog));
// dog.breed = "german shepherd";
// dog.getDogInfo = function () {
//     // console.log(Object.values(this));
// }
// Exercises: Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
  
}
let winner;
let max = 0
let bal = 50
let win=[];

for(let property in users){
if(users[property].skills.length > max){
max = users[property].skills.length;
winner = property
}
}
// console.log(winner);
for(let key in users){
    if(users[key].points >=50){
bal = users[key].points
win.push([key])
    }
}
console.log(win.join());

// let userInfo={
//       name:'Olya',
//       age:45,
//        address:{
//       city:'Tashkent', 
//     street:'Yoshlik' 
//        }
//      }
//      for(let key in userInfo){
//        console.log(key)
//        console.log(userInfo[key])
//      }
//      for(let key in userInfo.address){
//        console.log(key)
//        console.log(userInfo.address[key])
//      }