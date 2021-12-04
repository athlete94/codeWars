var countBits = function(n) {
    let count = 0
    let binary = n.toString(2)
    for(let i = 0; i < binary.length; i++) {
        if( binary[i] == 1) {
            count +=1
        }
    }
    return count
  };


  console.log(countBits(123))