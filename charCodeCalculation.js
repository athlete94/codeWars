const calc = (x) => {
    let sum1 = 0, sum2 = 0;
    let total1 = x.split('').map((el) => el.charCodeAt()).join('')
    let total2 = total1.replace(/7/gi, "1")
    for(let i = 0; i < total1.length; i++) {
        sum1 += Number(total1[i])
        sum2 += Number(total2[i])
    }
   
   return sum1-sum2 
}

console.log(calc('abcdef'))