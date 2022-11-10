 http://www.codewars.com/kata/5735e39313c205fe39001173
 
 function countAnimals(animals, count) {
  const arrayOfAnimals = [];
  count.forEach((animal) =>
    arrayOfAnimals.push((animals.match(new RegExp(animal, "g")) || []).length)
  );
  return arrayOfAnimals;
}

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str, word) {
  let similarityWord =
    word[0] + word.slice(1, -1).replace(/./g, ".") + word.slice(-1);
  let checkingWord = new RegExp("^" + similarityWord + "$");
  return str
    .split(" ")
    .filter((v) => checkingWord.test(v))
    .join(" ");
}
