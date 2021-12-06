function getNames(data){
    let newArr = data.map(d => { 
         return d.name });
          
          return newArr
  }


  const data = [
        {name: "aza", age: 20},
        {name: "qweq", age: 12},
        {name: "weee", age: 11}
  ]

  console.log(getNames(data))