function bump(x){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] == 'n') { 
            sum += 1
        }
    }
    return sum <= 15 ? "Woohoo!" : "Car Dead"
}

console.log(bump('nnn_____nn_n_n__nnnnnnnnnn'))