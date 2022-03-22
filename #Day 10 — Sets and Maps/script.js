// // const companies = new Set()
// // console.log(companies)


// const languagess = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]

//   const setOf = new Set(languages)
//   console.log(setOf);
//   const setOfLangauges = new Set(languages)
//   for (const languages of setOfLangauges){
//       console.log(languages);
//   }
//   const companies = new Set()
//   console.log(companies.size)
//   companies.add('Google')
//   companies.add('heyy')
//   companies.add('Facebook')
//   companies.add('Amazon')
//   companies.add('Oracle')
//   companies.add('Microsoft')
//   console.log(companies.size);
//   console.log(companies);

//   const companiess = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
//   const setOfCom = new Set()
//   for(const company of companiess){
// setOfCom.add(company)
//   }
//   console.log(setOfCom.delete('Google'));
//   console.log(setOfCom);
//   console.log(setOfCom.has('Amazon'));
//   setOfCom.clear()
//   console.log(setOfCom);


//   const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
//   const langSet = new Set(languages)
//   console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
//   console.log(langSet.size) // 4
  
//   const counts = []
//   const count = {}
  
//   for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang) // ["English", "English", "English"]
//     counts.push({ lang: l, count: filteredLang.length })
//   }
//   console.log(counts)

//   const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
//   const sum = new Set(numbers)
  
//   console.log(sum);

//   let a = [1,2,3,4,6,7]
//   let b = [1,4,6,8,9,7]
//   let c =[...a, ...b]
// //   console.log(c);
// let C = new Set(c)
// console.log(C);

// let A = new Set(a)
// let B = new Set(b)
// let g =a.filter((num)=> B.has(num))
// let M =new Set(g)
// console.log(g);

// let aa = [1, 2, 3, 4, 5]
// let bb = [3, 4, 5, 6]

// let AA = new Set(aa)
// let BB = new Set(bb)
// let cc = aa.filter((num)=> !BB.has(num))
// let CC = new Set(cc)

// console.log(CC);

// //Map

// // const map = new Map()
// // console.log(map);

// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]
//   const map = new Map(countries)
//   console.log(map);
//   console.log(map.size);
//   //Adding values to the Map
//   const countriesMap = new Map()
//   console.log(countriesMap.size);
//   countriesMap.set('Finland', 'Helsinki')
//   countriesMap.set('Sweden', 'Stockholm')
//   countriesMap.set('Norway', 'Oslo')
//   console.log(countriesMap);

// //Getting a value from Map

// console.log(countriesMap.get('Finland'));


// //Checking key in Map

// console.log(countriesMap.has('Finland'));

// //Getting all values from map using loop

// for(const country of countriesMap){
//     console.log(country);
// }
// for(const [country, city] of countriesMap){
//     console.log(country, city);
// }
//Exercises:Level 1

const companies = new Set()
console.log(companies);

for(let i=0; i<=10;i++){
    companies.add(i);
}
console.log(companies);
companies.delete(2)
console.log(companies);
companies.clear()
console.log(companies);
const languages = [
    'English',
    'Finnish',
    'Spanish',
    'Russian',
    'Ispanish'
  ]
const setOfLangauges = new Set(languages)
console.log(setOfLangauges);

const countr = [
    [1,'Kolya', 'Helsinki'],
    [2,'Ishtvan', 'Stockholm'],
    [3,'Vasya', 'Oslo'],
]
const maps =new Map(countr)
console.log((maps.size));
console.log((maps));
maps.set('Noyember', 'December')
console.log((maps));


let countries = ["nigeria", "U.S.A", "germany", "england", "italy"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);

// Exercises:Level 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countriess = ['Finland', 'Sweden', 'Norway']

const c= [...a, ...b].sort((a,b)=>a-b)

let A = new Set(a)
let B = new Set(b)

let C = new Set(c)

let v = a.filter((num) => B.has(num))
let f = a.filter((num) => !B.has(num))
let V = new Set(v)
let F = new Set(f)
console.log(C);
console.log(V);
console.log(F);


// Exercises:Level 3
const country=[
    { English: 91 },
    { French: 45 },
    { Arabic: 25 },
    { Spanish: 24 },
    { Russian: 9 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ]
const most =(num)=>{
    let empty = new Set()
country.forEach((element, index)=>{
    if(index < num){
        empty.add(element)
    }
})

return empty
}
console.log(most(3));