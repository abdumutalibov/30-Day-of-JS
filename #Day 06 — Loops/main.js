for(let i=0; i<=10; i++){
    console.log(i);
}
for(let i=10; i>=0; i--){
    console.log(i);
}
let num = 0

while(num <=10){
    console.log(num);
    num++
}

for(let i=6;i<=1;i++){
    for(let j=1;j>=6;j--){
        
        console.log('# '.repeat(j));
    }
    console.log('# '.repeat(i));
        
}

// for(var i=1; i<=7; i++){
//     console.log("* ".repeat(i));
//  }
for(let i=1;i<7; i++){
    console.log('#'.repeat([i]));
}

for(let i=1; i<=10; i++){
    console.log(`${i}*${i}= ${i *i} `);
}
for(let i=1; i<=10; i++){
    console.log(`${i} ${i*i}  ${i*i*i} `);
}