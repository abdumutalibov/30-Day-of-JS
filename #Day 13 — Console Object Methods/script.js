console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}
// console.group()
// The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


let a=[['frfrfr', 'rfrfrfr'],
['frfrfr', 'rfrfrfr'],
['frfrfr', 'rfrfrfr']]
console.table(a);

let countriers = [{
    name: "nigeria",
    capital: "fct",
    population: "7billion",
    languages: ["hausa", "igbo", "yoruba"]
},
{
    name: "germany",
    capital: "munich",
    population: "5billion",
    languages: ["german"]
}, {
    name: "italy",
    capital: "rome",
    population: "6billion",
    languages: ["italian", "latin"]
},
{
    name: "france",
    capital: "paris",
    population: "6billion",
    languages: ["french"]
}
]
console.table(countriers)
console.group(countriers)

console.assert(10 > 2 * 10, "incorrect")

console.warn("i'm warning you")

//error message
console.error("this is an error")

const food = ["beans", "rice", "plantain", "egg"]

//while
console.time("while loop")
let i = 0
while (i < food.length) {
    console.log(food[i])
    i++
}
console.timeEnd("while loop")


console.time('Regular for loop')
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}
console.timeEnd('Regular for loop')

console.time("for of")
for (const meal of food) {
    console.log(meal)
}
console.timeEnd("for of")
//forEach
console.time("forEach")
food.forEach(meal => console.log(meal))
console.timeEnd("forEach")