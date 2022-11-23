// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  if (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
  ) {
    return true;
  } else return false;
}

//http://www.codewars.com/kata/cylon-evolution

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}

// http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function (/**/) {
  const args = Array.prototype.slice.apply(arguments, [1]);
  return this.apply(arguments[0], args);
};
