//https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  let b = 1;
  while (b++) {
    yield `${a} x ${b - 1} = ${a * (b - 1)}`;
  }
}
