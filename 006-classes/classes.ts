class Vehicle {
  public honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();

car.startDrivingProcess();
