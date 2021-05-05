import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.events.on('change', () => {
  console.log('Changed!');
});

user.on('change', () => {
  console.log('something was changed');
});

user.trigger('change');
