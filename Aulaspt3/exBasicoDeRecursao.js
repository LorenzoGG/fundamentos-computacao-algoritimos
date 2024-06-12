function fatorial(number){
    if (number < 0)
        return undefined; // não existe fatorial de numero negativo
    let total = 1; 
    for (let n = number; n > 1; n--)
        total = total * n;

        return total;
}

console.log(fatorial(5)); //120
 
//outra forma de resolver a partir de recursividade

function fatorialRecursivo(n) {
    if (n === 1 || n === 0)
        return 1;

        return n * fatorialRecursivo(n -1);
}

console.log(fatorialRecursivo(5));

