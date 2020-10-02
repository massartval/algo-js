function factorial(n) {
    if (n === 0) {
        return acc;
    } else if (n > 0) {
        while (n > 1) {
            acc = acc * n;
            n = n - 1;
        }
        return acc; 
    } else {
        acc = 'impossible to calculate';
        return acc;
    }
    while (n > 1) {
        acc = acc * n;
        n = n - 1;
    }
    return acc;
}
console.log('The factorial of ' + n + ' is ' + acc)