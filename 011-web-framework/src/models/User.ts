import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync = new Sync<UserProps>('http://localhost:3000/users');
  data: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.data = new Attributes<UserProps>(data);
  }
}

new User({ name: 'asdf', age: 20 });
