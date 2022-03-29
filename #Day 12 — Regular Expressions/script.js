let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern.test(name)

console.log(result) // t\


//💻 Exercises 1

let he = 'Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’'
let selaries = he.match(/\d+/g)
let total = 0;
selaries.forEach(element =>{
    total+=Number(element);
})
console.log(total);

let text = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"
let sortingPoint = text.match(/\d+/g);
sortingPoint = sortingPoint.map((elements) => {
    return Number(elements)
})
console.log(Math.max(...sortingPoint));
const distBtwTwoPart = (arr) => {
    let distBtw = arr[arr.length - 1] - arr[0]
    return distBtw
}
console.log(distBtwTwoPart(sortingPoint));

//3

let test ='Tests for a match in a string. It returns true or false.'
let resultat=/for/
let pet = resultat.test(test)
console.log(pet);

let is ='is_valid_variable'
let hy =/m/
let rm = hy.test(is)
console.log(rm);

// Exercises: Level 2

let paragraph=`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const tenMostFrequentWords =(arr, arrLength)=>{
let words = arr.match(/\w+/g);
console.log(words);
let occurances = [];
for(let i=0;i<arrLength;i++){
    occurances.push(words[i])
}
console.log(occurances);
for(let word of occurances){
        

    if(occurances[word]){
        occurances[word]++;
    }else{
        occurances[word]=1;
    }

}

// console.log(occurances);
}
console.log(tenMostFrequentWords(paragraph,10))




// Exercises: Level 3

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText =(arr)=>{
    let res = arr.match(/\w+/gi)
    empty =[]
    for(let word of res){
if(empty[word]){
empty[word]++
}else if(empty[word]=1){
    empty[word]=1
}
    }
   

  console.log(empty);
}
console.log(cleanText(sentence))

    // const naames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

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
    
    // let max =0;
    // let mostRepeateWord ='';
    // for(let word of words){
    //     // if(occurances[word]> max){
    //     //     max =occurances[word];
    //     //     mostRepeateWord = word;
    //     // }
    // }
    // return  mostRepeateWord