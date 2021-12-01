function cake(x, y){
    let b = []
    let sum = 0
    
    for (let i = 0; i < y.length; i++) {
      b.push(y[i].charCodeAt(0))
    }
    
    for (let i = 0; i < b.length; i++) {
      sum += b[i]
      console.log(b[i]);
    }
    
    console.log(sum);
    if (sum > (x*0.7)) {
      return "Fire"
    }
    else
      return "That was close!"
  }

  console.log(cake(829, 'liwait'));