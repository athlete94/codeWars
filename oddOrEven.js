function oddOrEven(n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
      sum += i
    }
    console.log(sum)
    
    if(sum % 2 == 0) {
      return 'EVEN'
    }
    else if(sum == 1) {
      return 'EITHER'
    }
    else return 'ODD'
}

console.log(oddOrEven(6))