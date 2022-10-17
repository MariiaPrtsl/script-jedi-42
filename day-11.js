https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  for (const elements of s1) {
    if (!s2.has(elements)) {
      return false;
    }
  }
  for (const elements of s2) {
    if (!s1.has(elements)) {
      return false;
    }
  }
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  const firstSet = new Set(arr1);
  const secondSet = new Set(arr2);
  let bothArraysElements = 0;
  for (const element of firstSet) {
    if (secondSet.has(element)) {
      bothArraysElements++;
    }
  }
  const oneElementsArray =
    firstSet.size + secondSet.size - bothArraysElements * 2;
  const firstArrayRemainingElements = firstSet.size - bothArraysElements;
  const secondArrayRemainingElements = secondSet.size - bothArraysElements;
  return [
    bothArraysElements,
    oneElementsArray,
    firstArrayRemainingElements,
    secondArrayRemainingElements,
  ];
}
