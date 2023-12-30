// write and example closure function:

let nameB = "john";

function A() {
  let nameA = "smith";
  function B() {
    return nameA + " " + nameB;
  }
  return B;
}
const res = A();
console.log(res()); // john smith
