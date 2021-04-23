interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  isBroken: true,
  year: 2000,
  summary(): string {
    return `Name; ${this.name}`;
  },
};

const printVehicle = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
