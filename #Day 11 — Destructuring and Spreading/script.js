// const numbers = [1,2,3]
// let [numOne, numTwo, numThree] = numbers
// console.log(numOne,numTwo);

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
// console.log(firstPerson,fourthPerson);

// const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
// let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

// console.log(e,pi,gravity, bodyTemp, boilingTemp)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   const [frontEnd, backEnd] = fullStack
//   console.log(frontEnd);
//   console.log(backEnd);

//   const namesss = [undefined, 'Brook', 'David']

//   let full=[ 
//       firstPerson = 'Asabeneh',
//       secondPerson,
//       thirdPerson,
//       fourthPerson = 'John'

//   ] =namesss
//   console.log(firstPerson,secondPerson);

//   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//   let [num1,num2,num3, ...rest] = nums
//   console.log(num3, num1);
//   console.log(rest.sort());


// //   Destructuring during iteration
//   const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
//   for(const [country, city] of countries){
//       console.log(country,city);
//   }
//   const fullStackk = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   for(const[first,second,four,third]of fullStackk){
//       console.log(first,second,four,third);
//   }
// //   Destructuring Object\

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let {width, height, area, perimeter}=rectangle
//   console.log(width, height, area, perimeter);
// //   Renaming during structuring

// const rectanglee = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width: w, height: h, area: a, perimeter: p } = rectanglee
  
//   console.log(w, h, a, p)


//   const rect = {
//     width: 20,
//     height: 10
//   }
//   const calculatePerimeter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
//   }
  
//   console.log(calculatePerimeter(rect)) // 60

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }

  
// const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length -1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
  
//   console.log(getPersonInfo(person))


//   const todoList = [
//     {
//       task:'Prepare JS Test',
//       time:'4/1/2020 8:30',
//       completed:true
//     },
//     {
//       task:'Give JS Test',
//       time:'4/1/2020 10:00',
//       completed:false
//     },
//     {
//       task:'Assess Test Result',
//       time:'4/1/2020 1:00',
//       completed:false
//     }
//     ]
    
//     for (const {task, time, completed} of todoList){
//       console.log(task, time, completed)
//     }

//     const user = {
//         name:'Asabeneh',
//         title:'Programmer',
//         country:'Finland',
//         city:'Helsinki'
//       }
      
//       const copiedUser = {...user, blabla:'instructor'}
//       console.log(copiedUser)

//       const age =(...num)=>{
//           console.log(num);
//       }
// age(1,2,3,4,5,6)

// Exercises: Level 1
// const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
// let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

// console.log(e,pi,gravity, bodyTemp, boilingTemp)
const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let [e,pi,gravity, humanBodyTemp,waterBoilingTemp] =constants
console.log(e);
// let [fin,est,sw,den,nor] =countries
// console.log(fin);
let {width,height,area,perimeter}= rectangle
console.log(rectangle);

// Exercises: Level 2
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    for(const {name, scores, skills,age} of users){
        // console.log(name, scores,skills,age);
    }
    for(const{name,scores,skills,age} of users){
if(skills.length <=2){
    console.log(name, scores,skills,age);
}
    }
    // Exercises: Level 3

    const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
    const students = [
      ['David', ['HTM', 'CSS', 'JS', 'React'],
          [98, 85, 90, 95]
      ],
      ['John', ['HTM', 'CSS', 'JS', 'React'],
          [85, 80, 85, 80]
      ]
  ]
  let mm = new Set(students)
  console.log(mm);

  const convertArrayToObject = (arr) => {
    let { name, skills, scores } = arr;
  }
  console.log(convertArrayToObject(students));
    // new Promise((resolve, reject)=>{
    //   setTimeout(()=>{
    //     resolve('Gotovo')
    //   }, 2000)
    // })
    // .then(data => console.log(data))
    // .catch(error => console.log(error))