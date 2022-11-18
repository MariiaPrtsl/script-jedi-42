//  https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = (people) => {
  return people.sort((a, b) => a.age - b.age);
};


//https://www.codewars.com/kata/52597aa56021e91c93000cb0/

function moveZeros(arr) {
  const filteredArr = arr.filter((el) => el !== 0);
  const count = arr.length - filteredArr.length;
  return filteredArr.concat(Array(count).fill(0));
}
