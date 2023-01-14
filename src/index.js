module.exports = function reverse (n) {
    if (n < 0)
        n *= -1;
    
    if (n >= 0 && n <= 9)
        return n;

    var tens = tenCountInNumber(n);

    var result = 0;
    for (var i = tens; i > 0; i--) {
        var digit = Math.floor(n % 10);
        n /= 10;
        result += digit * 10 ** i;
    }

    return result + Math.floor(n);
}

function tenCountInNumber(n) {
    var tens = 0;
    while (n >= 10) {
        n /= 10;
        tens++;
    }
    return tens;
}