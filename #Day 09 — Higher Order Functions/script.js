// const callback = (n) => {
   
//     return n ** n
//   }
//    console.log(callback(2));
// const square=(number)=>{
//     return number * number
//   }
  
//   console.log(square(10))

  
  
//   const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }

//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

//   const numbers = [1, 2, 3, 4]

//   const sumArray = arr => {
//     let sum = 0
//     const callBack = function(element) {
//       sum += element
//     }
//     numbers.forEach(callBack)
//     return sum
  
//   }
//   console.log(sumArray(numbers))

// const number = [1,2,3,4]

// const sumA =arr=>{
//     let sum = 0
//     number.forEach((item,index)=>{
//         sum+=index
//     })
//     return sum
// }
// console.log(sumA());

// const sayHello =()=>{
//     console.log('Hello yopta');
// }
// setInterval(sayHello(), 2000)

// let sum =0
// const num =[1,2,3,4]
// num.forEach(num => sum+=num)
//     console.log(sum);
// let g =0
// let t = [1,2,3,5,6]
// t.forEach(y=> console.log(y))

// const country = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// country.forEach((e)=>console.log(e.toLocaleLowerCase().slice(0,3)))

// // map

// const number =[1,2,3,4,5]
// const numbers=number.map((n)=>n*n)
// console.log(numbers);

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesE=names.map((e)=>e.toLocaleUpperCase())
// console.log(namesE);


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]

//   const c=countries.map((e)=> e.toUpperCase().slice(0,3))
//   console.log(c);
  
//   const tr =countries.filter((u)=> u.includes('land'))
//   console.log(tr);

//   const r = countries.filter((c)=>c.endsWith('ia'))
//   console.log(r);

// //   const yu = countries.map((e)=>{
// //       return console.log(e.includes('Can'));
// //   })
//   const countriesToUpperCase = countries.filter(country => country.length === 5);
//   console.log(countriesToUpperCase);

//   const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]
  
//   const m = scores.filter((s)=>{
//      return s.score >80})
//   console.log(m);

//   const j = [1,2,3,4,5]
//   const k =scores.reduce((t,acc)=>{
//   if(acc.score <=80){
//       t+=acc.score
//   }
//     return t
//   },0)
//   console.log(k);
  

//   const naames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

//   const all =naames.every((name)=> {
//    return typeof name === 'string'})
//   console.log(all);

//   function getComp(str){
//     return str
//     .toLowerCase()
//     .match(/(.)\1+/gi)
//     .reduce((acc, item)=> acc+ item[0] + item.length, '')

//   }
//   console.log(getComp('aaaAAaaBbbBBbFffFFffF'));

//   //find

//   const ages =  [24, 22, 25, 32, 35, 18]
//   const age = ages.find((e)=> e<20)
//   console.log(age);


//   const namest = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
//   const o = namest.find((e)=> e.length >7)
//   console.log(o);

//   const p=scores.find((e)=>e.score<80)
//   console.log(p);


//   const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const agess = [24, 22, 25,21, 32, 35, 18]

// const l=namess.findIndex((e)=>e=='Brook')
// console.log(l);
// const b=agess.findIndex((e)=>e<33)
// console.log(b);


// const nam = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const d=nam.some((b)=>{
//   return b==='Elias'
// })
// console.log(d);

// const ns = [9.81, 3.14, 100, 37]
// ns.sort((a,v)=> a-v)
// console.log(ns);

// scores.sort((a,b)=>{
//   if(a.score < b.score) return -1
//   if(a.score > b.score) return 1
//   return 0
// })
// console.log(scores);

//Exercises: Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const con = countries.forEach((e,i,a,t)=>{
  return console.log(e,i,a,t)
})
const name1=names.forEach((e)=>{
  return console.log(e);
})
const num=numbers.forEach((e)=>{
  return console.log(e);
})

const k=countries.map((e)=>{
 return console.log(e.toUpperCase());
})
const l=countries.map((e)=>{
  // return console.log(e.length);
})
const n = numbers.map((e)=>{
  return e*2;
})
console.log(n);
const d=names.map((e)=> {
  return e.toUpperCase()
})
console.log(d);

const o=products.map((e)=>{
  return e
})
console.log(o);

const f = countries.filter((e)=>{
  return e.includes('land')
})
console.log(f);
const m=countries.filter((e)=>{
  return e.length <=6
})
console.log(m);

const q =countries.filter((e)=>e.length > 6)
console.log(q);

const w = countries.filter((e)=>e.startsWith('f'))
console.log(w);

const r = products .filter((e)=>{
  return e.price!==''
})
console.log(r);
// const set = new Set(['1','0','3','4','0','5'])
// console.log([...set]);

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength =arr.map((name,index,arr)=>{
// return name.length 
// })

// console.log( arrLength );

// const arr = [ 1, 2, 3, 4, 5 ];

// const getSums = (arr) => {
// return arr.reduce((acc, item, index, array) => {
// if (index === 0) {
// acc.push(item);
// } else {
// acc.push(item + acc[index - 1]);
// }

// return acc;
// }, []);
// }
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

// const arr =[1,1,2,3,4,5,4,5,6,6,7,8,7,9]

// function withoutRepeat(array){
//   const uniqueValue = [];

//   for(let i=0; i<array.length; i++){
//     const currentItem = array[i];
//     let count = 0;
//     for(let j=0;j<array.length; j++){
//       if(currentItem === array[j]){
//         count++;
//       }
//     }
//     if (count ===1) {
//       uniqueValue.push(currentItem)
//     }
//   }
//   return uniqueValue;
// }
// console.log(withoutRepeat(arr));