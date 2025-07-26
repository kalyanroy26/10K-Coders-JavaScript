// const url = 'https://dummyjson.com/quotes';

// async function getData(url) {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ",error.message);        
//     }
// }

// getData(url)


let myPromise = ()=>{
   return new Promise((res, rej)=>{
    let num = 10
    if(num%2==0){
        res("Even")        
    }
    else{
        rej("Odd")
    }
})
}


async function getData(){
    try {
        const res = await myPromise()
        console.log(res);        
    } catch (error) {
        console.log(error);
    }
}

getData()