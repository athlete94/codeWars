var moveZeros = function (arr) {
    let count = 0
    for(let i = arr.length-1; i >= 0 ; i--) {
        if(arr[i] === 0) {
            arr.splice(i, 1)
            count += 1
        }
    }
    for(let i = 0; i < count; i++) {
        arr.push(0)
    }
    console.log(arr);
  }

  moveZeros([1,2,0,1,0,1,0,3,0,1])