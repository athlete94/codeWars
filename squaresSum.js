function squareSum(numbers){
    let res = 0
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i]**2
        res += numbers[i]
    }
    return res
  }

  console.log(squareSum([1, 2, 2]))