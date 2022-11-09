// http://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  const grade = {};
  grade.S = scores.filter((x) => x === 100).length;
  grade.A = scores.filter((x) => x < 100 && x >= 90).length;
  grade.B = scores.filter((x) => x < 90 && x >= 80).length;
  grade.C = scores.filter((x) => x < 80 && x >= 60).length;
  grade.D = scores.filter((x) => x < 60 && x >= 0).length;
  grade.X = scores.filter((x) => x === -1).length;
  return grade;
}

// http://www.codewars.com/kata/57308546bd9f0987c2000d07



//http://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  const flatOutputArray = [].concat(...arr);
  flatOutputArray.sort((a, b) => b - a);
  return flatOutputArray.join(">");
}
