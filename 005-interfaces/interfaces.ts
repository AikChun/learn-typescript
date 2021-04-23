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

const aDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(aDrink);
