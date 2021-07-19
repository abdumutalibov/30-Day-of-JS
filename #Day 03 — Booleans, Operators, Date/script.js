
const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime())



//Exercises: Level 1
let firstName ='Boop'
let lastName = 'Dirt'
let country = 'AQSH'
let city = 'Tashken'
let isMarried= false
let age = 23
let fullinfo = firstName +lastName +country +city +isMarried+age
console.log(typeof firstName,lastName);
console.log(typeof fullinfo  );
console.log(typeof age);
console.log(typeof isMarried);
console.log('10'==10);
console.log(parseInt('9.8') ==10);
console.log(Math.round(9.8)===10);

//Boolean value is either true or false.
//i
console.log(3==3);
let  a = 3
b =2
console.log(`${a} is greater than ${b}: `,a>b)
console.log('abds'=='abds');
//ii
console.log(50+50==90);
console.log('asdasd'==="adadada");
console.log(`${a} is  greater than ${b}: `,a<b)

5

console.log(4 > 3);
console.log(4 >= 3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length!=='jargon'.length,'');

//6 Figure out the result of the following expressions first without using
//  console.log(). After you decide the result confirm it by using console.log()
console.log(4>3&&10<12,'i');
console.log(4>3&&10>12);
console.log(4<3 || 10>12);
console.log(4>3||10>12);
console.log(!(4>3),'v');
console.log(!(4<3));
console.log(!(false));
console.log(!(4>3 && 10<12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log('dragon'.includes('on')!=='python'.includes('on'));

//7 Use the Date object to do the following activities

let naw = new Date()
console.log(naw.getFullYear());
console.log(naw.getMonth());
console.log(naw.getDate())
console.log(naw.getUTCDay())
console.log(naw.getHours());
console.log(naw.getMinutes());
console.log(naw.getSeconds());
const allSeconds=Date.now()
console.log(allSeconds);
