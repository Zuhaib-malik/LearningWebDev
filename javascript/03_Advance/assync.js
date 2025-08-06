console.log("this is assynchronous");
setTimeout(() => {
    let x = 3;
    console.log("printed after 5 seconds");
    
    console.log(x);
    
}, 5000);

for (let i = 0; i < 10; i++) {
    console.log(i);
    
    
}

