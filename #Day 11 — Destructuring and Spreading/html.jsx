{/* <h1>dd</h1> */}
const gg =[1,2,3,4,5]
let l = gg.reduce((total,item)=>{
return  item += total
},0)
console.log(l);

function parent(number){
    return function child(){
        console.log(number);
    }
}