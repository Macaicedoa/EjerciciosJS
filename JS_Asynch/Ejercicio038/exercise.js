const isLogged = true;

let firstPromise = new Promise((resolve,reject)=>{
    if(isLogged){
        setTimeout(()=>resolve(Math.random()),1000);
    }else{
        setTimeout(()=>reject("Oops! Not logged"),1000);
    }
});

firstPromise
    .then((number)=>{
        console.log(number);
        let secondPromise = new Promise((resolve,reject)=>{
            if(number>=0.5){
                setTimeout(()=>resolve( `{name: "John", age: 24}`),1000);
            }else{
                setTimeout(()=>reject(`Error! number is less than 0.5...(${number})`),1000);
            }
        });
        secondPromise
        .then((user)=>console.log(user))
        .catch((err)=>console.error(err))
    })
    .catch((err)=>console.error(err))
