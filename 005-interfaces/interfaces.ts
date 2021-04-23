const oldCivic = {
  name: 'civic',
  isBroken: true,
  year: 2000,
};

interface Vehicle {
  name: string;
  isBroken: boolean;
  year: number;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.isBroken}`);
};

printVehicle(oldCivic);
