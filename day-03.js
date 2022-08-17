// http://www.codewars.com/kata/571f832f07363d295d001ba8
function trueOrFalse(val) {
  return Boolean(val).toString();
}

// http://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

//http://www.codewars.com/kata/572059afc2f4612825000d8a
function howManydays(month) {
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}
