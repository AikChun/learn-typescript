import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
const numbersCollection = new NumbersCollection([10, 3, -1, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaayBn');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(-5);
linkedList.add(2);
linkedList.add(1);
linkedList.add(100);
linkedList.add(50);
linkedList.sort();
linkedList.print();
