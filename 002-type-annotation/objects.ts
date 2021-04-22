// destructing objects

const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge: (age: number): void => {
    console.log(age);
  },
};

const { age }: { age: number } = profile;

const {
  age: a,
  coords: { lat, lng },
}: { age: number; coords: { lat: number; lng: number } } = profile;

console.log(a);
