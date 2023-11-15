function sumUntil(maxValue) {
  let sumTotal = 0;
  for(let i=1;i<=maxValue;i++){
    sumTotal += i;
  }
  return sumTotal
}

console.log(sumUntil(5));