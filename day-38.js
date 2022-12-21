// https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
  let i = 1;
  while (true) {
    let value = yield i++;
    if (value !== undefined) i = value;
  }
}
