function repeatHello(callback){
    setInterval(callback,1000)
}

repeatHello(()=>console.log("Hello"))
//repeatHello(function(){console.log("Hello")})

//la elección entre una función de flecha y 
//una función normal para setInterval depende del contexto y 
//necesidades específicas. 
//Las funciones de flecha pueden ser útiles para evitar problemas 
//de contexto de `this` y para escribir código más conciso y legible.
