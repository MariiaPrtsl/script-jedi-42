//http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3).reduce((a, b) => a + b, 0));
  }
  return result;
}

//http://www.codewars.com/kata/572df796914b5ba27c000c90
