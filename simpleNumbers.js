function f(n) {
    let index = 0;
    let nmb = 3;
    const result = [2];
    while (index < n) {
        let isSimple = true;
        if (nmb & 1 === 0) {
            isSimple = false;
        } else {
            for (let i = 2; i < nmb; i++) {
                if (nmb % i === 0) {
                    isSimple = false;
                    break;
                }
            }
        }
        if (isSimple) {
            result.push(nmb);
            index += 1;
        }
        nmb += 1;
    }
    return result;
}

console.log(f(10))
