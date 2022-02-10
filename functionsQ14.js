function getSomeValue() {
  return 2;
}

function myFunction(nu1) {
  return getSomeValue() * getSomeValue();
}

const resul = myFunction(5); // console: 4 ✔✔👌
console.log(resul);
