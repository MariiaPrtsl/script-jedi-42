https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const arr = [];
  const words = str.split("");
  for (let i = 0; i < words.length; i++) {
    arr.push(0 + words[i].charCodeAt(0).toString(2));
  }
  return arr;
}
