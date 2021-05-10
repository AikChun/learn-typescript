class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops, boat was sunk in the ocean.')
  pilot(): void {
    throw new Error();
  }
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(message);
      }
    };
  };
}

new Boat().pilot();
