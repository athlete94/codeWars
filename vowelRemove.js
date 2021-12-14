function shortcut(string){
    return string.split('').filter((el) => !"aeoiu".includes(el) ).join('')
  }
  
  console.log(shortcut("awsefaa"));