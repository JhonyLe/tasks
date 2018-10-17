function getFibonachi(length) {
    const fibonachi = [];
    if (length >= 1) fibonachi.push(1);
    if (length >= 2) fibonachi.push(1);
    
    if (length > 2) {
        for (let i = 2; i < length; i++) {
             fibonachi[i] = fibonachi[i - 1] + fibonachi[i - 2];
        }
    }

    return fibonachi;
}

console.log(getFibonachi(1));
console.log(getFibonachi(2));
console.log(getFibonachi(5));
console.log(getFibonachi(15));
console.log(getFibonachi(25));
