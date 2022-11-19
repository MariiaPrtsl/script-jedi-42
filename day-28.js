//http://www.codewars.com/kata/a-function-within-a-function

function always(n) {
  return function () {
    return n;
  };
}

// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript

const state = {
  modifier: 2,
};
const solution = (arr, options) => arr.map((el) => el + options.modifier * 2);

// або так?
//const solution = (arr, { modifier }) => arr.map((el) => el.modifier * 2);

//або так?
// function solution(arr, options) {
//   const state = {
//     modifier: 2,
//   };
//   const solution = (arr, options) => arr.map((el) => el + options.modifier * 2);
// }

