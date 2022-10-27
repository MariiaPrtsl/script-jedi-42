//http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...args) {
  args.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === "right") {
      arr.unshift(arr[arr.length - 1]);
      arr.pop(arr[arr.length - 1]);
    } else {
      arr.push(arr[0]);
      arr.shift();
    }
  }
  return arr;
}

// http://www.codewars.com/kata/572af273a3af3836660014a1
