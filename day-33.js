//https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056

Object.deepFreeze = function (object) {
  Object.freeze(object);

  Object.keys(object).forEach((key) => {
    if (typeof object[key] === "object") Object.deepFreeze(object[key]);
  });
  return Object.freeze(object);
};
