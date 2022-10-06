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
  for (const elements of s1) {
    if (!s2.has(elements)) {
      return true;
    }
  }
  for (const elements of s2) {
    if (!s1.has(elements)) {
      return true;
    }
  }
  return false;
}

//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
