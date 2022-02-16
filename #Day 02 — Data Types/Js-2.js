//Exercise: Level 1
let str = '30 Days Of JavaScript.'
console.log(str);
let str1 = str
console.log(str1.toUpperCase());
console.log(str1.toLocaleLowerCase());
console.log(str.substring(0,1));
console.log(str.substring(3,22));
console.log(str.includes('Script'));
console.log(str.split());
console.log(str.split(' '));
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split());
console.log(str.replace('JavaScript', 'Python'));
console.log(str.charAt(15));
console.log(str.charCodeAt('J'));
console.log(str.indexOf('J'));
console.log(str.lastIndexOf('a'));
let b = 'You cannot end a sentence with because because because is a conjunction'
console.log(b.indexOf('because'));
console.log(b.lastIndexOf('a'));
console.log(b.search('a'));
console.log(str.trim());
console.log(str.startsWith('30'));
console.log(str.endsWith('.'));
console.log(str.match('a'));
let con = '30 Days of '
let can = 'JavaScript'
console.log(con.concat(can));
console.log(str.repeat(2));
console.log( 'There is no exercise better for the heart than reaching down and lifting people up.');

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log(Number('10')===10);
console.log(Math.round( 9.8 )===10);
let py = 'python'
let ja = 'jargon'
console.log(py.includes('on'), ja.includes('on'));
console.log(5/'RDw');
console.log('I hope this course is not full of jargon'.includes('jargo'));
console.log(Math.random());
console.log( Math.floor(Math.random()*100) );
console.log( Math.floor(Math.random()*255) );
let js = 'JavaScript'
let ron =Math.random()
function makeid() {
    var text = "";
    var possible = "JavaScript";
  
    for (var i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());
  console.log('1 1 1 1 1 ');
  console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
  console.log('You cannot end a sentence with because because because is a conjunction'.substring(31,55));
  console.log('You cannot end a sentence with because because because is a conjunction'.match('because'));
  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 console.log(sentence.replace(/[^a-z .,]/gi,''));
console.log(5000*12+10000+15000*12);
const check = 4 < 3 && 10 > 5     
console.log(check);