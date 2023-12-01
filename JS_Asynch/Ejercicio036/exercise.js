function repeatHello(callback){
    let idInterval = setInterval(callback,1000);

    setTimeout(()=>clearInterval(idInterval), 5000)
}
repeatHello(()=>console.log("Hello"));
