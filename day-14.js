//https://www.codewars.com/kata/56c2a067585d9ac8280003c9/

function basicMatch(candidate, job) {
  if (candidate.preference === "desired") {
    candidate.experience *= 1.5;
  }
  if (candidate.experience < job.idealYears) {
    return false;
  }
  if (candidate.name === job.name) {
    return true;
  }
  return job.substitutions.some((skill) => skill.name === candidate.name);
}

function advancedMatch(candidate, job) {
  if (
    candidate.skills.some(
      (skill) => skill.name === job.name && skill.preference === "avoid"
    )
  ) {
    return false;
  }
  return candidate.skills.some((candidate) => basicMatch(candidate, job));
}

function match(candidate, job) {
  return job.skills.every((job) => advancedMatch(candidate, job));
}
