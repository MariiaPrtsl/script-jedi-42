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
  const odd = [];
  const even = [];
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
function grabDoll(dolls) {
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i]);
    } else continue;
    if (bag.length === 3) break;
  }
  return bag;
}

//https://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj) {
  const five = [];
  for (key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  return five;
}
