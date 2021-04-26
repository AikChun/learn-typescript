class Vehicle {
  constructor(public color: string) {}

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

const vehicle = new Vehicle('Orange');

console.log(vehicle.color);
