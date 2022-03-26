// class Person {
//     constructor(firstName,lastName, age, country, city){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age= age
//         this.country = country
//         this.score = 0
//         this.city = city
//         this.skills = []
//     }
//     getFullName(){
//     const fullName = this.firstName + ' ' +this.lastName
//     return fullName
//     }
//     get getScore(){
//         return this.score
//     }
//     get getSkills(){
//         return this.skills
//     }
//     set setScore(score){
//         this.score +=score
//     }
//     set setSkill(skill) {
//         this.skills.push(skill)
//       }
//       getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills =
//           this.skills.length > 0 &&
//           this.skills.slice(0, this.skills.length - 1).join(', ') +
//             ` and ${this.skills[this.skills.length - 1]}`
//         let formattedSkills = skills ? `He knows ${skills}` : ''
    
//         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//         return info
//       }
//   static favoriteSkill() {
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     return skills[index]
//   }
//   static showDateTime() {
//     let now = new Date()
//     let year = now.getFullYear()
//     let month = now.getMonth() + 1
//     let date = now.getDate()
//     let hours = now.getHours()
//     let minutes = now.getMinutes()
//     if (hours < 10) {
//       hours = '0' + hours
//     }
//     if (minutes < 10) {
//       minutes = '0' + minutes
//     }

//     let dateMonthYear = date + '.' + month + '.' + year
//     let time = hours + ':' + minutes
//     let fullTime = dateMonthYear + ' ' + time
//     return fullTime
//   }
// }

// console.log(Person.favoriteSkill())
// console.log(Person.showDateTime())

// //Inheritance

// class Student extends Person {
//     constructor(firstName, lastName, age, country, city, gender) {
//       super(firstName, lastName, age, country, city)
//       this.gender = gender
//     }
  
//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`
  
//       let formattedSkills = skills ? `He knows ${skills}` : ''
//       let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
//       let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }
  
//   const s1 = new Student(
//     'Asabeneh',
//     'Yetayeh',
//     250,
//     'Finland',
//     'Helsinki',
//     'Male'
//   )
//   const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
//   s1.setScore = 1
//   s1.setSkill = 'HTML'
//   s1.setSkill = 'CSS'
//   s1.setSkill = 'JavaScript'
  
//   s2.setScore = 1
//   s2.setSkill = 'Planning'
//   s2.setSkill = 'Managing'
//   s2.setSkill = 'Organizing'
  
//   console.log(s1)
  
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())
  
//   console.log(s2.saySomething())
//   console.log(s2.getFullName())
//   console.log(s2.getPersonInfo())

// class Car {
//     constructor(brand){
//         this.brand = brand;
//         this.gasTank = 100;
//         this.zaprvka = [];
//     }
//     getGas(){
//         this.gasTank +=10;
//         const stamp = Date.now();
//         const time = new Date(stamp);
//         this.zaprvka.push(time.toString());
//         return this.gasTank;
//     }
//     drive(){
//         this.gasTank -=10;
//         return this.gasTank;
//     }
// }
// class HybridCar extends Car{
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }
//     autoPark(){
//         console.log('Автопарковка!');
//     }
// }
// const lexus = new HybridCar('Lexus', 'RX')
// const nissan = new Car('Nissan')

// class Animal {
//     static type ='ANIMAL'
//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.color = options.color
//         this.legs=options.legs
//     }
//     voice(){
//         console.log('I am Animal!');
//     }
// }

// const animal =new Animal({
//     name: 'dog',
//     age:5,
//     color: 'red',
//     legs: 'none'

// })
// const animal2 =new Animal({
//     name: 'cat',
//     age:3,
//     color: 'blue',
//     legs: 'karotkie'

// })
// console.log(animal);
// class Cat extends Animal{
//     static type = 'CAT'
//     constructor(options){
//         super(options)
//         this.color = options.color
//     }

//     voice(){
//         super.voice()
//         console.log('I am cat');
//     }
//     get ageInfo(){
//         return this.age *7
//     }
//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// class Dog extends Animal {
//     constructor(options){
//         super(options)
//     }
// }
// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//  hasTail :true,
//  color: 'black'
// })
// console.log(8*8);

// class Component{
//     constructor(selector){
//         this.$el=document.querySelector(selector)
//     }
//     hide(){
//         this.$el.style.display ='none'
//     }
//     show(){
//         this.$el.style.display= 'block'
//     }
// }
// class Box extends Component{
//     constructor(options){
// super(options.selector)
// this.$el.style.width=this.$el.style.height =options.size +'px'
// this.$el.style.background = options.color
//     }
// }
// const box1 = new Box({
//     selector:'#box1',
//     size:100,
//     color:'red'
// })

// const box2 = new Box({
//     selector:'#box2',
//     size:130,
//     color:'blue'
// })

// class Circle extends Box{
//     constructor(options){
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }
// const c = new Circle({
// selector: '#circle',
// size:90,
// color:'green'
// })

// class Animal{
//     constructor(name,age,color,legs){
//         this.name = name;
//         this.age =age;
//         this.color =color
//         this.legs =legs
//     }
//     getFullInfo(){
//         return `${this.name}is ${this.age} year(s) old ${this.color} in color`
//     }
//     set removeLegs(leg){
//         this.legs -=leg
//     }
//     get getName(){
//         return this.name;
//     }
// }

// let dog = new Animal('jack', 4, 'brown', 4)
// let cat = new Animal("brie", 2 ,"white", 4)

// console.log(dog.getFullInfo());
// console.log(cat);

// class Pet extends Animal {
//     constructor(name, age, color, legs, gender) {
//         super(name, age, color, legs)
//         this.gender = gender
//     }

//     get getGender() {
//         return this.gender
//     }
//     getfullInfo() {
//         return `${this.name} is ${this.age} year(s) old ${this.gender} ${this.color} in color`;
//     }

// }

// let rabbit = new Pet("ross", 3, "snow-white", 4, "male")
// console.log(rabbit.getfullInfo());



class Statistics {
    constructor(arr) {
        this.arr = arr;
    }

    get length() {
        return this.arr.length;
    }

    count() {
        return this.length;
    }

    sum() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return sum;
    }

    mean() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return Math.ceil(sum / this.length)
    }

    min() {
        let minNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] < minNum) {
                minNum = this.arr[i]
            }
        }
        return minNum;
    }

    max() {
        let maxNum = this.arr[0]
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] > maxNum) {
                maxNum = this.arr[i]
            }
        }
        return maxNum
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        let sorted = this.arr.sort()
        let index = sorted.length / 2
        index = Math.floor(index);
        return sorted[index];
    }

    mode() {
        return `working on it...`
    }

    variance() {
        let mean = this.mean()
        let variance = this.arr.map((num) => {
            return Math.pow(num - mean, 2) / this.length;
        })
        let newVariance = 0;
        variance.forEach(num => newVariance += num / this.length)
        return Math.ceil(newVariance / this.length);
    }

    standardDeviation() {
        return `working on it...`
    }

    frequencyDistribution() {
        return `working on it...`
    }


    describe() {
        return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.variance()}\n
        Standard Deviation: ${this.standardDeviation()}\n
        Frequency Distribution: ${this.frequencyDistribution()}`
    }
}

let numbers = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(numbers.describe())

// class PersonAccount {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.incomes = [];
//         this.expenses = [];
//     }

//     totalIncome() {
//         let totalIncom = 0;
//         this.incomes.forEach(income => totalIncom += income)
//         return totalIncom
//     }
//     totalExpenses() {
//         let totalExpenses = 0;
//         this.expenses.forEach(expense => totalExpenses += expense)
//         return totalExpenses;
//     }

//     accountInfo() {
//         return `
//         Full-Name: ${this.firstName} ${this.lastName}
//         total-Income: ${this.totalIncome()}
//         total-Expenses: ${this.totalExpenses()}
//         `
//     }

//     set addIncome(amount) {
//         this.incomes.push(amount)
//     }

//     set addExpenses(cost) {
//         this.expenses.push(cost)
//     }
// }

// let myAccount = new PersonAccount("victor", "kenneth")