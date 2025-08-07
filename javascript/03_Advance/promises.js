function datafaching() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = false;
            if(x){
                resolve("Data is fatched");
                
            }else{
                reject("data is faching");
                
            }
        }, 4000);
    })
}

datafaching().then((data)=>{
    console.log(data);
    return "zuhaib";
})
.then((d)=> {
    console.log(d);
    
})
.catch((error)=>{
    console.error(error);
    
    
    
});