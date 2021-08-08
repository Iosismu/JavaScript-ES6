// Optional Chaining
const bob = {
  name: 'Julia',
  age: 20,
}

const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
}

// Good Code
// job이 있으면 다음인 title로 넘어가고 job이 없으면 아예 false로 된다.
function displayJobTitle_1(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// Good Code
// Nullish coalescing operator을 같이 썻을때
function displayJobTitle_2(person) {
  const title = person.job?.title ?? 'No Job Yet';
  console.log(title);
}