import { User } from './models/User';

const user = new User({ id: 2, name: 'newer record', age: 99 });

user.on('change', () => {
  console.log(user);
});

user.on('save', () => {
  console.log('user was saved');
});
