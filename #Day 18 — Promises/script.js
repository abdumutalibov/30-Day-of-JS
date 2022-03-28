// const doSomething = callback =>{
//     setTimeout(()=>{
//         const skills =['HYML',"CSS","JS"]
//         callback( ' It did not go well ',skills)
//     },2000)
// }
// const callBack =(err,result)=>{
//     if(err){
//         return console.log(err);

//    }
//     return console.log();
// }
// doSomething(callBack)

// const doSomething = callback=>{
//     setTimeout(()=>{
//         const skills = ['HTML', 'CSS','JS']
//         callback(false,skills)
//     },2000)
// }

// doSomething((err,result)=>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })

// const doPromise  = new Promise((resolve, reject)=>{
//  setTimeout(()=>{
//      const skills =['HTML','CSS',"JS"]
//      if(skills.length > 0){
//          resolve(skills)
//      }else {
//          reject('Somethig wrong hsa happened')
//      }
//  },2000)
// })

// doPromise
// .then(result=>{
//     console.log(result);
// })
// .catch(error => console.log(error))

// const doPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const skills =['HTML',"CSS",'JS']
//         if(skills.indexOf('Node') !==-1){
//             resolve('fullstack developer')
//         }else{
//             reject('Somethig wrong has happened' )
//         }
//     }, 2000)
// })

// doPromise
// .then(result =>{
//     console.log(result);
// })
// .catch(error => console.log(error))


// const url = 'https://restcountries.eu/rest/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => { // getting the data
//     console.log(data)
//   })
//   .catch(error => console.log(error))

// Async and Await
// const square = async function (n) {
//     return n * n
//   }
//   const value = await square(2)

// const url = 'https://restcountries.eu/rest/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.log(error))


// const fetchData = async () => {
//     try {
//       const response = await fetch(url)
//       const countries = await response.json()
//       console.log(countries)
//     } catch (err) {
//       console.log(err)
//     }
//   }
// //   console.log('===== async and await')
//   fetchData()
//   fetch('http://example.com/movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


//country api using async awaitc
let countries;
let languages = [];
let largestCountries = [];
// largestCountries.length = 10;
const url = 'https://restcountries.eu/rest/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        //logging the country name,capital,languages,population
        countries.forEach(country => {
            console.log(`country:${country.name} capital:${country.capital} languages:${country.languages} population${country.population}`)
        })

        //total number of languages in the world;
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languages.indexOf(language.name) === -1) {
                    languages.push(language.name)
                }
            })
        })

        //largest countries
        let highestCountry = 0;

        countries.forEach(country => {
            if (country.area >= highestCountry) {
                highestCountry = country.area;
                largestCountries.push(country)
            }
        })
        console.log(`the total number of languages in the world is ${languages.length}`)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();

// countries.forEach(country => {
//     console.log(`country:${country.name} capital:${country.capital} languages:${country.languages} population${population}`)
// })

//cat api using promise
let catNames = [];
let cats = []
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(cat => {
            cat.push(cat);
        })
    })
    .catch(error => console.log(error))

if (catNames) {
    cats.forEach(cat => {
        catNames.push(cat.name)
    })
    console.log(catNames)
}