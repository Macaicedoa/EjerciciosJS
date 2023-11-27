function sum(...num1) {
    let sumatoria = 0;
    num1.forEach(num =>{
        sumatoria += num; 
    })
    return sumatoria
}

console.log(sum(1, 2, 3, 4, 5));