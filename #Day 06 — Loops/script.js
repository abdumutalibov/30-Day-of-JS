// const number =[1,2,3,4,5]
// let sum =0
// for(let i =0;i<number.length;i++){
//     sum+=number[i]
// }
// console.log(sum);

// for(let i =0;i<=5;i++){
//     console.log(i);
// }
// for(let i=0;i<=10;i++){
//     console.log(`${i}*${i}=${i*i}`);
// }


// Exercises: Level 1
// const count
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// const newArr =[];
// //   for(let i=0;i<=10;i++){
// // console.log(webTechs);
// //   }
//   let i =0 
//   while (i<=10){
//       console.log(webTechs+'hey hey duzryashki');
//       i++
//   }
//   for(let i=10;i>=0;i--){
//       console.log(i);
//   }
//   for (let i = 0; i < n; i++) { 
//     for (let j = 0; j < n; j++) { 
//         // here i have to use, i, j
//     } 
// } 
// for(let i=1;i<=6;i++){
//     // for(let j=6;j>=1;j--){
        
//     //     console.log('# '.repeat(j));
//     // }
//     console.log('# '.repeat(i));
        
// }
// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

5
for(let i=0;i<=10;i++){
    // console.log(`${i}*${i}=${i*i} `);
}
6
for(let i=0;i<=10;i++){
  // console.log(`${i} ${i**2} ${i**3}`);
}
7
for(let i=0; i<=100;i++){
  if(i%2==0){
    // console.log(i);
  }
}
for(let i=0; i<=100;i++){
  if(i%2==0){
    // console.log(i);
  }
}
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if( num % k == 0){
      return false;
    }
  }
  return true;
}
// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = 2; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        // console.log(i);
    }
}
8
// let sum=0;
// for(let i=0;i<=100;i++){
 
//   console.log(i);
//   sum+=i

 

// }
 
// console.log(sum);
11
let sum =0
for(let i=0;i<=100;i++){
  console.log(i);
   
   sum+=i
  }

// console.log(sum);
let som =0
const arr = []
let sum3 = 0
for (let i=1; i<=100; i++) {
 
    if (i%2==1){
        sum3 +=i
        
    }
    
   
  } 
   for(let j=1;j<=100;j++){
      if(j%2==0){
        som+=j
      }
      
    }
  console.log([som , sum3]);
arr.push(sum3,som)
console.log(arr,'yyy');
console.log([Math.round(Math.random()*10),
    Math.round(Math.random()*10),
    Math.round(Math.random()*10),
    Math.round(Math.random()*10),
    Math.round(Math.random()*10)]);
    
    // var arr3 = []
    // while(arr3.length < 8){
    //   var randomnumber=Math.ceil(Math.random()*100)
    //   if(arr3.indexOf(randomnumber) === -1){arr3.push(randomnumber)}  
    // }
    // console.log(arr3);


    // Exercises: Level 2

    function makeid(length){
      var result ='';
      var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for(var i =0;i<length;i++){
        result+=characters.charAt(Math.floor(Math.random()* charactersLength))
      }
      return result
    }
    console.log(makeid(60));

function make(len){
  var tek ='';
  var tekst='qwertyuooplkjjhgffsazcvb26547568';
  var tekstLength=tekst.length
  for(let i=0;i<len;i++){
    tek+=tekst.charAt(Math.floor(Math.random()*tekstLength))
  }
  return tek
}
console.log(make(50));

2
const random =()=>{
  let n =(Math.random()* 0xfff * 1000000).toString()
  return '#'+ n.slice(0,9);

}
console.log(random());

3

// const randoom =()=>{
//   let m =(Math.random()*0xffffff * 9990).toString()
//   let b =m.slice(0,3)
//   let v =m.slice(0,3)
//   return 'rgb('+b,+', ',+ b+', '+ b+')'
// }
// console.log(randoom());

function get(){
  var num=Math.round(0xffffff * Math.random());
  var r=num >> 16;
  var g =num >> 8 & 255;
  var b = num & 255;
  return 'rgb)'+r+', '+g+' ,'+b+' )'
}
for(var i=0;i<10; i++){
  console.log(get());
}
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'landshaft and WTF!!'
]
const newArr=[]
for(let i=0;i<countries.length;i++){
  newArr.push(countries[i].toUpperCase())
 console.log(newArr);
} 

const Are =[]
for(let i=0;i<countries.length;i++){
 Are.push(countries[i].length)
  
}
console.log(Are);

const AAz =[]
for(let i=0;i<countries.length;i++){
  AAz.push(countries[i].slice(0,3))
}
console.log(newArr,Are,AAz);

const con =[]
for(let i=0;i<countries.length;i++){
  con.push(countries[i],countries[i].slice(0,3),countries[i].length)
}
console.log(con);

7
let withLand =[]
let withoutLand =[]
for (let i=0;i<countries.length;i++){
  if(countries[i].includes('land')){
    withLand.push(countries[i])
  }else{
    withoutLand.push(countries[i])
  }
}
console.log(withLand);
console.log(withoutLand);