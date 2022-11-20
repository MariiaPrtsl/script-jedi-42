//  https://www.codewars.com/kata/how-new-works

function nouveau(Constructor, ...args) {
  const objectPrototype = Object.create(Constructor.prototype);
  const instance = Constructor.apply(objectPrototype, args);
  return instance === Object(instance) ? instance : objectPrototype;
}

//http://www.codewars.com/kata/replicate-new

const myObj = Object.create(MyObject.prototype);
myObj.constructor();
