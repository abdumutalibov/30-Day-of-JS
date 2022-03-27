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

const obj = JSON.stringify(skills,['skills'])
console.log(obj);
// const usersObj = JSON.parse(txt, (key, value) => {
//     let newValue =
//       typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//     return newValue
//   })
//   console.log(usersObj)