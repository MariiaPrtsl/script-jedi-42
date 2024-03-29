//https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript

function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      launchMissile(i);
    }, i * 1000);
  }
}

// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  for (let waitTime of customers) {
    const lowestWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowestWaitTill] += waitTime;
  }
  return Math.max(...tills);
}
