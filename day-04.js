//http://www.codewars.com/kata/57216d4bcdd71175d6000560
function padIt(str, n) {
  while (n > 0) {
    if (n % 2) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    n--;
  }
  return str;
}

//http://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr) {
  let odd = [],
    even = [];
  for (i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  return [odd, even];
}

//http://www.codewars.com/kata/5721c189cdd71194c1000b9b
