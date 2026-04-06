function tenCountInNumber(n) {
  let tens = 0;
  let temp = n;
  while (temp >= 10) {
    temp /= 10;
    tens += 1;
  }
  return tens;
}

module.exports = function reverse(n) {
  let temp = n;
  if (temp < 0) temp *= -1;

  if (temp >= 0 && temp <= 9) return temp;

  const tens = tenCountInNumber(temp);

  let result = 0;
  for (let i = tens; i > 0; i -= 1) {
    const digit = Math.floor(temp % 10);
    temp /= 10;
    result += digit * 10 ** i;
  }

  return result + Math.floor(temp);
};
