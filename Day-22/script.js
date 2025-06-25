
let prom1 = new Promise((resolve, reject)=>{
    let num = Math.floor(Math.random()*11)
    
    if(num<5){
        setTimeout(()=>{
            resolve("1st done")
        },2000)
    }
    else{
        reject("error while generating")
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let num = Math.floor(Math.random()*11)
    
    if(num<5){
        setTimeout(()=>{
            resolve("2nd done")
        },4000)
    }
    else{
        reject("error while generating")
    }
})

let prom3 = new Promise((resolve, reject)=>{
    let num = Math.floor(Math.random()*11)
    
    if(num<5){
        setTimeout(()=>{
            resolve("3rd done")
        },1000)
    }
    else{
        reject("error while generating")
    }
})

let prom_1 = Promise.all([prom1,prom2,prom3])
prom.then((a)=>{
    console.log(a);    
}).catch((err)=>{
    console.log(err);
    
})

let prom_2 = Promise.allSettled([prom1,prom2,prom3])
prom.then((a)=>{
    console.log(a);    
}).catch((err)=>{
    console.log(err);
    
})

let prom_3 = Promise.race([prom1,prom2,prom3])
prom.then((a)=>{
    console.log(a);    
}).catch((err)=>{
    console.log(err);
    
})