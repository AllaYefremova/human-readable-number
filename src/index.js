const readNumber = (number) =>
({
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
}[number]);

module.exports = function toReadable(number) {
  // function toReadable(number) {
  const num = Number(number);
  const str = String(number);

  if (str.length === 1 || str.length === 2) {
    if (num <= 20 && num >= 0) {
      return readNumber(num);
    } else {
      if (num === 30 || num === 40 || num === 50 || num === 60 || num === 70 || num === 80 || num === 90) {
        return readNumber(num);
      } else {
        return readNumber(`${str[0]}0`) + ' ' + readNumber(str[1])
      }
    }
  } else if (str.length === 3) {
    if (str[1] === '1') {
      return readNumber(str[0]) + ' hundred ' + readNumber(`${str[1]}${str[2]}`)
    } else {
      if (str[1] !== '0' && str[2] !== '0') {
        return readNumber(str[0]) + ' hundred ' + readNumber(`${str[1]}0`) + ' ' + readNumber(str[2])
      } else if (str[1] === '0' && str[2] !== '0') {
        return readNumber(str[0]) + ' hundred ' + readNumber(str[2])
      } else if (str[1] !== '0' && str[2] === '0') {
        return readNumber(str[0]) + ' hundred ' + readNumber(`${str[1]}0`)
      } else if (str[1] === '0' && str[2] === '0') {
        return readNumber(str[0]) + ' hundred'
      }
    }
  }
  return 'This number is more, then 999'
}
