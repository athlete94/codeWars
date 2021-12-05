function findOdd(A) {
        let res = 0
        for (let i = 0; i < A.length; i++) {
          res ^= A[i]
          console.log(res)
        }
        return res;
  }

  console.log(findOdd([1, 1, 2, 3, 2]))