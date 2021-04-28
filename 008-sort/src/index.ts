import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
const sorter = new Sorter(new NumbersCollection([10, 3, -1, 0]));
sorter.sort();
console.log(sorter.collection);
