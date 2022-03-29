//syntax
// localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
// // console.log(localStorage)
// localStorage.setItem('age',200)
// // console.log(localStorage);

// const skills = ['HTML', 'CSS', 'JS', 'React']
// //Skills array has to be stringified first to keep the format.
// const skillsJSON = JSON.stringify(skills, undefined, 4)
// localStorage.setItem('skills', skillsJSON)
// // console.log(localStorage)

// let skills = [
//     { tech: 'HTML', level: 10 },
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }
//   ]
  
//   let skillJSON = JSON.stringify(skills)
//   localStorage.setItem('skills', skillJSON)
//   console.log(localStorage );

// const user ={
//     firstName:'Asabeneh',
//     skills:['HTML', 'CSS', 'JS', 'React']
//     age:250,
// }
// const userText = JSON.stringify(user, undefined,4)
// localStorage.setItem('user',userText)
// // console.log(localStorage);
// let firstName = localStorage.getItem('firstName')
// let age = localStorage.getItem('age')
// let skills = localStorage.getItem('skills')
// console.log(firstName, age, skills)

// let skills = localStorage.getItem('skills')
// let skillsObj = JSON.parse(skills )
// console.log(skillsObj)
// console.log(localStorage.clear());

let profile ={
    firstName :'Victo',
    lastName :'Kenny',
    age:23,
    countr:'Tashkent',
    city: 'lagos',

}
// let txt = JSON.stringify(profile);
// console.log(localStorage);
// localStorage.setItem('user',txt)
// console.log(localStorage.clear());

const student = {
    firstName: "victor",
    lastName: "kenneth",
    age: 19,
    skills: ["html", "css", "javascript", "netlify"],
    country: "nigeria"
}

const txt = JSON.stringify(student, undefined,4)
localStorage.setItem("student", txt)
console.log(localStorage);

const personAccount={
    firstName:'Коля',
    lastName:'Иштван',
    age:23,
    skills:['HTML', 'CSS', 'JS', 'React'],
    countr:'Qibray',
    incomes: '3000🏦'

}