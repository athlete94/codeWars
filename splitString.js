function solution(str){
    let arr = []
     if(str.length % 2) {
         str = str + "_"
     }
     for(let i = 0; i < str.length; i+=2) {
         arr.push(str.substring(i, i+2))
     }
   return arr
 }

console.log(solution('abcdef'))