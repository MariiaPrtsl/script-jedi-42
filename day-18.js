// http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  const arrOfSum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arrOfSum.push(sum(arr[i], arr[i + 1]));
  }
  return arrOfSum.reduce((a, b) => a * b);
}

function sum(a, b) {
  const aString = a.toString();
  return +aString[aString.length - 1] + +b.toString()[0];
}

//http://www.codewars.com/kata/5732b0351eb838d03300101d
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return `It's a fake array`;
  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1)
    return `It's a black array`;
  return `It's a white array`;
}

// https://www.codewars.com/kata/5735956413c2054a680009ec
