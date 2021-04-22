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

// Functions that might throw an error we annotate as though the function would never throw an exception.
const printMessage = (m: string): string => {
  if (m == '') {
    throw new Error('');
  }
  return m;
};

// Function paramater type annotation with destructuring.
const todaysForecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
