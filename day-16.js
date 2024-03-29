//http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3).reduce((a, b) => a + b, 0));
  }
  return result;
}

//http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  return arr.slice().sort((a, b) => {
    const countA = arr.filter((numb) => numb === a).length;
    const countB = arr.filter((numb) => numb === b).length;
    if (countA === countB) {
      return b - a;
    } else if (countA > countB) {
      return 1;
    } else {
      return -1;
    }
  });
}


//http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  return arr.map((str) => {
    if (str.length % 2 === 0) {
      return str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2);
    }
    if (str.length % 2 !== 0) {
      return str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2 + 1);
    }
  });
}
