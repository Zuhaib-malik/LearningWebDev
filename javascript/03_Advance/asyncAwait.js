function fatchdata() {
    
   return new Promise((resolve, reject) => {
     setTimeout(() => {
        let x = 1;
        if(x == 1){
            resolve({name: "zuhaib", email: "mzuhaibmalik786@gmail.com"});
        }else{
            reject("Rejected");
        }
        
        
    }, 3000);
   })
}

async function factching() {
   try {
    let data = await fatchdata();
    console.log("user data fatched successfully");
    
    console.log("user data", data);
    
   } catch (error) {
        console.log("there is something wrong",error);
        
   }
}

factching();