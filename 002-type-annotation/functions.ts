// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function assigned to a variable.
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void return type
const logNum = (a: number): void => {
  console.log(a);
};
