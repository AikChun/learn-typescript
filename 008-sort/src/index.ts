import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';
const sorter = new Sorter(new NumbersCollection([10, 3, -1, 0]));
sorter.sort();
console.log(sorter.collection);

const charactersSorter = new Sorter(new CharactersCollection('XaayBn'));
charactersSorter.sort();
console.log(charactersSorter.collection);
