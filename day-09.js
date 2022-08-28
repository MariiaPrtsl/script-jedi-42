//http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  let shortest;
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    shortest = Math.min.apply(
      Math,
      arr.map(function (str) {
        return str.length;
      })
    );
    arr1.push(arr[i].slice(0, shortest));
  }

  return arr1;
}

//http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str, c) {
  const first = str.indexOf(c);
  const last = str.lastIndexOf(c);
  for (const i = 0; i < str.length; i++)
    if (first === -1) {
      return -1;
    } else {
      return last - first;
    }
}
