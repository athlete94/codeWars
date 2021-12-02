const binaryArrayToNumber = arr => {
    let str = arr.join('')
    return parseInt(str, 2)
}

console.log(binaryArrayToNumber([1, 1, 0, 1]))