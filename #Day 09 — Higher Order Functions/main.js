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

const world=[
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ]
    const hr =world.sort((a,b)=>{
        if(a.count <b.count) return -1
        if(a.count >b.count) return 1
    })
    console.log(hr);


    
    
      const mostSpokenLanguages =(num)=>{
          let empty =[]
 world.forEach((element,index)=>{
    if(index < num && element.count<100){
       empty.push(element)
    }
})
return empty
}
      console.log(mostSpokenLanguages(3));

  const data  =  [
        {country: 'China', population: 1377422166},
        {country: 'India', population: 1295210000},
        {country: 'United States of America', population: 323947000},
        {country: 'Indonesia', population: 258705000},
        {country: 'Brazil', population: 206135893},
        {country: 'Pakistan', population: 194125062},
        {country: 'Nigeria', population: 186988000},
        {country: 'Bangladesh', population: 161006790},
        {country: 'Russian Federation', population: 146599183},
        {country: 'Japan', population: 126960000}
        ]
const mostPopulatedCountries =(sum)=>{
    data.forEach((element,index)=>{

    })
}
        console.log(mostPopulatedCountries(countries, 10))

        const  getBla=(arr)=> {
            let m =[]
             data.forEach((value,index)=>{
                 if(index < arr ){
                    //  m.push(value.population); 
                     m.push(value)
                 }
                 
                })
                return  m
        //    return (Math.max(...m)); 
          }
          console.log( getBla(3))