function disemvowel(str) {
    let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    
    let strJoin = str.split('')
    let newStr = strJoin.filter(el => !vowels.includes(el)).join('')
  
    return newStr;
  }