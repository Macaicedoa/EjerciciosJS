const number = 8;

let myPromise = new Promise((resolve,reject)=>{
        if(number > 10){
            resolve(number);
        }else{
            reject("number is less than 10");
        }
});
    
myPromise
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err))
 