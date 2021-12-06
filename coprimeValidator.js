function isCoprime(x, y) {
    for(let i = 1; i <= x; i++) {
      if(x % i == 0 && y % i == 0){
        if( i != 1) {
            return false
        }
      }
    }
    return true
  }

  console.log(isCoprime(17, 34))