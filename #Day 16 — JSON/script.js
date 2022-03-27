const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    // const usersObj = JSON.parse(usersText, (key, value) => {
    //   let newValue =
    //     typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    //   return newValue
    // })
    // // console.log(usersObj)

    const user = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        country: 'Finland',
        city: 'Helsinki',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
        age: 250,
        isLoggedIn: false,
        points: 30
      }

    //   const txt = JSON.stringify(user,['firstName','lastName','country','city','age'],4)
    //   console.log(txt);


      const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}


const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
let max = 0;
let winner ={};
let length =[]
let parsedSkill = JSON.parse(txt, ["skills"])

for(let wor in parsedSkill){
    if(parsedSkill[wor].skills.length >max){
max = parsedSkill[wor].skills.length;

 length.push(parsedSkill[wor].skills.length) 
     winner=(wor)
    }
}

console.log(winner);
// console.log(parsedSkill)

// const obj = JSON.stringify(skills)
// console.log(obj);
// const obje = JSON.stringify(age)
// console.log(obje);
// const object = JSON.stringify(isMarried)
// console.log(object);
// const objectjon = JSON.stringify(student,['firstName'])
// console.log(objectjon);

// const usersObj = JSON.parse(txt, (key, value) => {
//     let newValue =
//       typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//     return newValue
//   })
//   console.log(usersObj)