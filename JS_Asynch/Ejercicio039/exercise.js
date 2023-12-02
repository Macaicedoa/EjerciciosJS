const isLogged = true;

let firstPromise = new Promise((resolve,reject)=>{
    if(isLogged){
        setTimeout(()=>resolve(Math.random()),1000);
    }else{
        setTimeout(()=>{reject(new Error("Oops! Not logged"))},1000);
    }
});

firstPromise
    .then((number)=>{
        new Promise((resolve,reject)=>{
            if(number>=0.5){
                setTimeout(()=>resolve( `{name: "John", age: 24}`),1000);
            }else{
                setTimeout(()=>reject(new Error(`Error! number is less than 0.5...(${number})`)),1000);
            }
        })
        .then((user)=>console.log(user))
        .catch((err)=>console.error(err))   
    })
    .catch((err)=>console.error(err))
    .finally(setTimeout(()=>console.log("Finally!"),3000))
