(1)
// Есть восемь основных типов данных в JavaScript

// Number = 5
// String ='Cтрока'
// Boolean = true\fals
// null = пустой,ничего, неизвестный
// undefined
// Object ={name: "ulbi tv"}
// Symbol = new Symbol('id')
// Bigint = 1234567890123456789n

//----------------------------------------------
2
//В чем разница между операторами  == и ===

// 0 == false // true            0 === false // false
// 1 == true // true             1 === true // false
// 1 =='1' //true                1 === '1' // false 

//------------------------------------------------
3

//Возврашают новый массив                   Итерирует по исходниму
 //   .map()                                      .forEach()
 //   .filter()

 // Возвращает результат выполнения
 //    reduce()
 let arr =[1,2,3,4,5]
 let result = arr.reduce((total, item)=>{
     return total + item
 },0)
//  console.log(result);
 let b = arr.filter((item)=>{
  return item !==3 
    })
    //  console.log(b);

     let v = arr.map((item)=>{
return item
     })
console.log(v);
//-------------------------------------------------------------------
(4)
// Otlichie strelochnix funktsiy ot funktsiy obyavlennix cheriz function

// 1 Отличие стрелочные funktsi ne imeyut arguments
// 2 Sintaksis
// 3 U ctrelochnix funktsiy net svoego this. Esli idet obrasheniya k
// this to ono beretsya snaruжi
// 4 He mogut bit vizvani s new

//------------------------------------------------------------------------

5
 // Shto takoe zamikanie?

 //Zamikaniea - eto vmeste co vsemi vneshnimi peremennimi, kotore ey dostupniy.

 function parent(number){
     return function child(){
         console.log(number) // child zamikaet v cebe number
     }
 }
 //----------------------------------------------------------------------
(6)

 // Что такое шаблонные литералы и для чего они нужны ?

 const name = 'ulbit tv'              //- Можна вставлять вырфжения
 const string = `Привет ${name}`      // при помощи ${}
 const html = `
 <img>                                - В них разрешение персонс
 <span>${string}</span>                строка
 </div>
 `
console.log(html);
//-----------------------------------------------------------------
7
// Что такое set и map ?

// Map -- это коллукция ключ/значениеб как и Object.
// Но основное отличие в томб, что Map 
// позволяет использовать ключи любого типа.

// Set -- это особый вид коллекции: <<множества>> значений
// (без ключей), своего рода массив, где каждое значение
//  можнет появляться толка один раз.

//---------------------------------------------------------------
8
// Как определить наличие свойства в объекте ?

const obj ={
    a:5,
    b:'string'
}
// Первый способ
console.log(obj.hasOwnProperty('a')); //true
console.log('b' in obj); //true

//---------------------------------------------------------------
(9)
// Какие способы создания обьекта вы знаете ?

//1 С помощью фунций

function ser(name, surname){
    this.name = name
    this.surname = surname
}
const user = new ser('ulbi', 'tv')
console.log(user); // User {name: 'ulbi', surname: 'tv'}

//2 С помощью литеральной нотации

// Создаемнаш объект с использованием литеральной нотации

MyObject ={
    id: 1,
    name: 'Saple'
}
console.log(MyObject);
//3 С помощью класса

 class User{
     constructor(name, surname){
         this.name = name
         this.surname = surname
     }
 }
 const userr = new User('ulbi', 'tv')
 console.log(userr);  // User {name: 'ulbi', surname: 'tv'}

//---------------------------------------------------------------

10

// В JavaScript есть толька 7 ложныч значений
//  Это означаетб что когда JavaScript ожидает логическое значение и ему присваивается одно из значений нижеб, он всегда будет оцениваться как <<ложное>>

console.log(false);  // false
console.log(!!0); // false
console.log(!!"");  // false
console.log(!!undefined);  //false
console.log(!!null); // false
console.log(!!NaN);  // false
console.log(!!BigInt(0)); // false 
//---------------------------------------------------------------

11
// Что такое Promise ?
// Promise -- это специальный объект, предназначенный для работы с ассинчронным кодам и который содержит свое состаяние. Вначале pending(<<ожидание>>), затем -- одно из: fulfilled(<<выполнено успешно >>) или rejected (<<выполнено с ошибкой>>)

new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('ГОТОВО')
    }, 1000)
})
.then(data => console.log(data)) // log ГОТОВО
.catch(error => console.log(error)) // ошибка

12
// Как использовать async await для асинхронных запросов

// Существует специалный синтаксис для работы с промисами, который называется <<async / await>>. Функция обозначенная как async всегда вернет промис

async function fetchFromApi(url){
    const response = await fetch(url) // Код
    const json = await response.json() // будет выполняться
    json.forEach(item => console.log(item)) // последовательно
}

13
// Для чего нужен оператор spread

let mid = [3, 4]
let err = [1,2,mid,5,6]
console.log(err);

let mid2=[3,4]
let err2=[1,2, ...mid2, 5,6]
console.log(err2);

let firstObject = {a:1, b:2}
let secondObject = {...firstObject, c:3, d:4}
console.log(secondObject);
//--------------------------------------------------------------
14 
// Как избежать ссылочной зависимости при копировании обьекта

const oobj ={
    a: {
        b:5
    }
}
const copy = Object.assign({}, oobj)
console.log(copy.a === oobj.a); // true
//

const obbj ={
a:{
    b:5
}
}
const copys = JSON.parse(JSON.stringify(obj))
console.log(copys.a === obbj.a); // false
//--------------------------------------------------------------------------
15
// Как поменять контекст функции

 function fn(){
     return this 
 }
 const objj = {name: 'UlBI TV'}
 const newFn = fn.bind(objj) 
 console.log(newFn()); // return {name: ''ULBI TV'}
 
 fn.call(objj, 'arg1', 'arg2') // return {name: ''ULBI TV'}
 fn.apply(objj, ['arg1', 'arg2']) // return {name: ''ULBI TV'}
console.log( fn.call(objj, 'arg1', 'arg2'));
console.log( fn.apply(objj, ['arg1', 'arg2']));
// const json =require('./j.json')
// console.log(json)


//------------------------------------------------------------
16
// Что такое деструктуризация ?

let aarr = ["UlBi", "TV"]
// записывает firstName=UlBI, surname= aarr[TV]
let [firstName,surname]= aarr;
console.log(aarr);

// Пример деструктуризации объекта
let options ={
    title: 'Menu',
    width: 100,
    height: 200
};
let {title, width, height} = options;
console.log(width);
//-------------------------------------------------------------
17
// Какие способы работы с ассинхронным кодом вы знаете ?

// 1 Callback - функция обратного вызова

function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}
// 2 Спосб Промисы

new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('data')
    }, 1000)
})
.then(data => console.log(data)) // выполнится в случае выполнения resolve
.catch(error => console.log(error)) // выполнится в случае выполнения reject

// 3 Спосб Async\await

async function fetchTodos(url){
    const resp = await fetch(url)
    const json = await resp.json()
    console.log(json); // ассинхронный код будет выполняться последовательно
}

// ------------------------------------------------------------------

18
