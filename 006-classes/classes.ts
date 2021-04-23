class Vehicle {
  drive(): void {
    console.log('Chugga Chugga.');
  }
  honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();

car.drive();
