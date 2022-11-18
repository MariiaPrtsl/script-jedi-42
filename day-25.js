//https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript

const ArrowFunc = (arr) => {
  return arr.map((x) => String.fromCharCode(x)).join("");
};

//https://www.codewars.com/kata/anonymous-returns

name = "The Window";

const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return function () {
      return this.name;
    }.bind(alpha);
  },
};
