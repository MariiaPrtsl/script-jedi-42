//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw Error;
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

function match(job, candidates) {
  return candidates.filter(
    (c) =>
      (job.equityMax > 0 || !c.desiresEquity) &&
      job.locations.some(
        (l) => c.currentLocation === l || c.desiredLocations.includes(l)
      )
  );
}
