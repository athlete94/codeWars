function doubleEveryOther(a) {
    for (let i = 1; i < a.length; i += 2) {
      a[i] = a[i]*2
    }
    return a;
  }

  console.log(doubleEveryOther([1,2,3,4]))