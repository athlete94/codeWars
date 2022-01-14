const explode = (s) => {
    let resArr = [];
    s = s.split('')

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s[i]; j++) {
                resArr.push(s[i])
        }
    }

    return resArr
}

console.log(explode('102269'))