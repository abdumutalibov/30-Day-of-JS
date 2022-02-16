let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
let set=string.length
console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('yo'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
console.log(string.lastIndexOf('JavaScript')) // 38
//console.log(string.length()) // 38
console.log(set) // 38
let pattern = /love/gi
console.log(string.match(pattern));

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// Exercise: Level 1

//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(2,21));
console.log(challenge.substring(2,21));
console.log(challenge.includes('Script'));
console.log(challenge.split());
let chal='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(chal.split(' '));
console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('S'));
console.log(challenge.lastIndexOf('a'));
let chat = 'You cannot end a sentence with because because because is a conjunction'
console.log(chat.indexOf('because'));
console.log(chat.lastIndexOf('because'));
console.log(chat.search('because'));
console.log(challenge.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith('Script'));
console.log(challenge.match('a'));
let char= '30 Days of'
console.log(char.concat(' JavaScript'));
console.log(challenge.repeat(2));

//Exercise: Level 2

1.
let the = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(the);
let love = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(love);
console.log('10'==10);
console.log(Math.round(9.8)==10);
let py='Python'
let ja='Jargon'
// console.log(py.includes('on')===ja.includes('on'));
console.log('I hope this course is not full of jargon.'.includes('jargon'));

console.log(Math.round(Math.random()*100));
console.log(Math.round(Math.random()*50)+50);
console.log(Math.round(Math.random()*255));

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
var rString = randomString(1, 'JavaScript');
console.log(rString);

console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

12

let use ='You cannot end a sentence with because because because is a conjunction'
console.log(use.substr(30,17));

// Exercises: Level 3





         
        // let d = 0;
        // let p = 0;
        // for ( i = 0; i < str.length; i++) {
        //         if (str.charAt(i) == 'd') {
        //             d++;
        //              console.log("d ni joylashgan qatori: " + (i));
        //         } else if (str.charAt(i) == 'p') {
        //             p++;
        //              console.log("p ni joylashgan qatori: " + (i));
        //         }
        // }
        // console.log("text uzunligi: "+ str.length);
        
        // console.log("p: " , p);
        // console.log("d: " , d);


       
        //    console.log('O`rta arifmetigi:',(p+d)/2 );
        //    console.log('O`rta geometrik:',(p+d)**0.5);
        //    console.log('Yig`indisi:' ,2+2)

1
let rstring = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(rstring.match(/love/gi));

2
let bec = 'You cannot end a sentence with because because because is a conjunction'
console.log(bec.match(/because/gi));

3
 const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

 
 console.log(sentence.replace(/[^a-z .,]/gi,''));
4
 console.log(5000*12+10000+15000*12);