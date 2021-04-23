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

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
