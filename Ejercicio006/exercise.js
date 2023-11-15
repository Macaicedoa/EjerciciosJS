
function printName(){
    let helloNAme = "Hello John";
    function inner(){
        return helloNAme
    }
    return inner;
}

console.log(printName()())