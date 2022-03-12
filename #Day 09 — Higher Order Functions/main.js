//Exercises: Level 2
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'italy', 'spain', 'germany', 'portugal', 'england', 'netherland', 'belgium', 'france', 'nigeria', 'U.S.A'];

  const price =products.reduce((total,item)=>{
      if(item.price >0){
          total+=item.price
      }
      return total
  },0)
  console.log(price);


  const categorizeCountries =(countries)=>{
let con = countries.filter(countr =>{
    return countr.toLowerCase().includes('land') || countr.toLowerCase().includes('ia') || countr.toLowerCase().includes('icland') 
})
return con
  }
  console.log(categorizeCountries(countries));


  const Start =(conuntry)=>{
      let a =conuntry.filter(a=>{
          return a.startsWith('N')
      })
      return a
  }
console.log(Start(countries));


  const getFirstTenCountries = (countries) => {
      let empty =[]
 countries.forEach((element, index) => {
     if(index<=10){
         empty.push(`${index}: ${element}`);
         
     }else{
        //  console.log('WTF');
     }
 });
 return empty
}

console.log(getFirstTenCountries(countries));

const getLastTenCountries =(countries)=>{
let empty =[].sort((a,b)=>a-b)
    countries.reverse().forEach((element,index)=>{
        if(index<=10){
            empty.push(`${index}: ${element}`)
        }
        else{
            console.log('Wtf');
        }
    })
    return empty
}
console.log(getLastTenCountries(countries));

const StartsWith=(countries)=>{

 let hey= countries.filter(element=>{
  return element.toLowerCase().startsWith('n')
    })
    return hey
}
console.log(StartsWith(countries));


// Exercises: Level 3