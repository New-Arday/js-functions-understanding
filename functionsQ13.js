function getSomeValue() {
  return 2;
}

function myFunction(n1) {
  const n2 = getSomeValue();
  return n1 * getSomeValue();
}

const resu = myFunction(5); // console: 10

console.log(resu);
