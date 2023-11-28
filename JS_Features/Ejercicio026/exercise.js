function sum(...num1) {
    let sumatoria = 0;
    num1.forEach(num =>{
        sumatoria += num; 
    })
    return sumatoria
}

// function sum(...masNumeritos) {
//     let totalsum =masNumeritos.reduce((a, n) => a + n, 0); 
//     return totalsum
// }

console.log(sum(1, 2, 3, 4, 5));