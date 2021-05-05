import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');
collection.on('change', () => {
  console.log('collection changed!');
});

collection.fetch();

console.log(collection);
