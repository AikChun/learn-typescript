const oldCivic = {
  name: 'civic',
  isBroken: true,
  year: 2000,
  summary(): string {
    return `Name; ${this.name}`;
  },
};

interface Vehicle {
  name: string;
  isBroken: boolean;
  year: number;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.isBroken}`);
};

printVehicle(oldCivic);
