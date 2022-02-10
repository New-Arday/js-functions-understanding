function getSomeValue() {
  return 2;
}

function myFunction(numbers1) {
  const numbers2 = getSomeValue();
  return numbers1 * numbers2;
}

const res = myFunction(5); // console: 10 ✔
console.log(res);
