import { User } from './models/User';

const user = new User({ name: 'jack', age: 31 });

user.get('name');
user.get('age');
