function spinWords(string){
    let myArr = string.split(' ')

    for(let i = 0; i < myArr.length; i++) {
        if(myArr[i].length >= 5) {
            let revers = myArr[i].split('').reverse().join('')
            myArr[i] = revers
        }
    }
    return myArr.join(' ')
  }



  console.log(spinWords("Hey fellow warriors"))