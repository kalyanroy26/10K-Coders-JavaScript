fetch('https://cataas.com/cat/gif')
.then(response=>response.url)
.then((data)=>{
    let img = document.createElement('img')
    img.setAttribute('src',data)
    img.setAttribute('height',250)
    document.body.append(img)
    console.log(data);
    
})
.catch((err)=>{
    console.log("error:",err);
})