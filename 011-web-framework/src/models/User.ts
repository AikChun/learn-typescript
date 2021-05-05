import { Attributes } from './Attributes';
import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync = new Sync<UserProps>(baseUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  save() {
    this.sync.save(this.attributes.data).then((response) => {
      this.attributes.get(response.data);
    });
  }
}

new User({ name: 'asdf', age: 20 });
