//  http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
  return func(...args);
}


//http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...par) {
  return par.every((el) => typeof el === "number");
}
