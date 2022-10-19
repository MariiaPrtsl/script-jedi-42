https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const arr = [];
  const words = str.split("");
  for (let i = 0; i < words.length; i++) {
    arr.push(0 + words[i].charCodeAt(0).toString(2));
  }
  return arr;
}

//https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x) {
  let str = "";
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    str += String(x.charCodeAt(i));
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7") {
      result += 6;
    }
  }
  return result;
}
