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
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let winner;
let max = 0;
let bal = 50;
let bals = "MongoDB";
let win = [];
let wins = [];
let empty ={}

for (let property in users) {
  if (users[property].skills.length > max) {
    max = users[property].skills.length;
    winner = property;
  }
}
console.log(winner);
for (let key in users) {
  if (users[key].points >= 50) {
    bal = users[key].points;
    win.push([key]);
  }
}
console.log(win.join());

for (let keys in users) {
  if (users[keys].skills.includes("MongoDB")) {
    wins.push([keys]);
  }
}
console.log(wins.join());



const copy = Object.assign({},users)
// console.log(copy.Azimjonnnn === users.Paul);
// 
const keys = Object.keys(users)
// console.log(keys);
const values = Object.values(users)
// console.log(keys);
const entries = Object.entries(users)
// console.log(entries)

let country ={
  name:'Azim',
  capital:"?",
  population:'31 billion',
  languages:["Uzb","Rus"]
}


let personAccount ={
  firstName: 'Victor',
  lastName: 'Kenny',
  income: {
          freelancing: 10000,
          menialLabour: 2000
      },
      expenses:{
        data:500,
        food:1000,
        transport:500
      },
      totalIncome:function(){
        let  tIncome = 0;
        let values = Object.values(this.income);
        for(let i =0;i<values.length;i++){
          tIncome+=values[i]
        }
        
        return tIncome;
      },
      totalExpense:function(){
        let tExpenses = 0;
        let values = Object.values(this.expenses);
        for(let i=0; i<values.length;i++){
          tExpenses+=values[i]
        }
        return tExpenses
      },
      accountInfo:function(){
        return `name ${this.firstName}  lastName ${this.lastName} incomes:${Object.entries(this.income)}
        expenses:${Object.entries(this.expenses)}
        `
      },
      addIncome:function(){
        let money = Object.assign(personAccount.income,{key:656})
        return money
      },
      addExpense :function(){
        let total= Object.assign(personAccount.expenses,{tot:654})
        return total
      },
      accountBalance :function(){
        return this.totalExpense() - this.totalIncome()
      }
        }
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.addIncome());
console.log(personAccount.addExpense());
console.log(personAccount.accountBalance() );




const user = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const signUp = (username, email, password) => {
    users.forEach(user => {
        if (user.username === username && user.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    console.log(users[users.length - 1]);
}
// let personAccount = {
//   firstName: "victor",
//   lastName: "kenneth",
//   income: {
//       freelancing: 10000,
//       menialLabour: 2000
//   },
//   expenses: {
//       data: 500,
//       food: 1000,
//       transport: 500
//   },

//   totalIncome: function () {
//       let tIncome = 0;
//       let values = Object.values(this.income);
//       for (let i = 0; i < values.length; i++) {
//           tIncome += values[i]
//       }
//       return tIncome;
//   },
//   totalExpenses: function () {
//       let tExpenses = 0;
//       let values = Object.values(this.expenses);
//       for (let i = 0; i < values.length; i++) {
//           tExpenses += values[i]
//       }
//       return tExpenses
//   },
//   accountBalance: function () {
//       return this.totalIncome() - this.totalExpenses();
//   },
//   accountInfo: function () {
//       return `name:${this.firstName} ${this.lastName}\n
//               incomes:${Object.entries(this.income)}
//               expenses: ${
//                   Object.entries(this.expenses)
//               }
//               totalIncome: ${this.totalIncome()}
//               totalExpenses: ${this.totalExpenses()}
//               accountBalance: ${this.accountBalance()}

//               `

//   }
// }

// function callBack(add, a, b) {
//   return console.log(add(a, b));
// }
// console.log(personAccount);



// console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`);

// for( let key in users){
//   if(users.Paul){
//     let user=Object.assign({},users)
//     user.Azim=user.Paul
    
//     console.log(user)
//   }
// }




// let userInfo={
//   name:'Kolya',
//   age:30,
// }
// let user=Object.assign({},userInfo)
//  user.year=user.age
// console.log(userInfo)
// console.log(user)
// variable declared using let


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
