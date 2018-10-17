function* getFibonachi() {
    let a = 1;
    let b = 1;
    yield 1;
    yield 1;
    
    while (true) {
       const c = a;
       a = b;
       b = a + c;
       yield b;
    }
}

function notFibonachi(length) {
    let g = getFibonachi();
    g.next();
    const notFibonachi = [];
    let lastNumber = 0;
    let fibonachi = g.next().value;
    while (notFibonachi.length <= length) {
	if (lastNumber !== fibonachi) {
	    notFibonachi.push(lastNumber);
	} else {
            fibonachi = g.next().value;        
        }
        lastNumber += 1;
    }
    return notFibonachi;
}

console.log(notFibonachi(10));
