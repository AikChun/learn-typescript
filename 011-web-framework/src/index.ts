import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, collection).render();
  } else {
    throw new Error("can't find root element");
  }
});

collection.fetch();
