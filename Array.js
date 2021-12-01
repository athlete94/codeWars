function arrayDiff(a, b) {
    return a.filter((i) => !b.includes(i)) 
  } // It should remove all values from list a, which are present in list b keeping their order.


  let a = [1, 2, 2]
  let b = [2]
  
  arrayDiff(a, b)