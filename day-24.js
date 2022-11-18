//http://www.codewars.com/kata/duplicate-arguments

function solution(...args) {
  const settedArr = new Set(args);
  return settedArr.size !== args.length;
}

//http://www.codewars.com/kata/last

function last(list) {
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
