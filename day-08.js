// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n) {
  switch (true) {
    case n === Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case n === Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case isNaN(n):
      return "Input number is Number.NaN";
    case n === Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case n === Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    default:
      return "Input number is " + n;
  }
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r, g, b) {
  if (r < 16) {
    r = "0" + r.toString(16);
  } else {
    r = r.toString(16);
  }
  if (g < 16) {
    g = "0" + g.toString(16);
  } else {
    g = g.toString(16);
  }
  if (b < 16) {
    b = "0" + b.toString(16);
  } else {
    b = b.toString(16);
  }
  return "#" + r + g + b;
}

//http://www.codewars.com/kata/57256064856584bc47000611
function howManySmaller(arr, n) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].toFixed(2)) < n) {
      count++;
    }
  }
  return count;
}

