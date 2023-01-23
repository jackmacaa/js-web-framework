import { User } from './models/User';

const user = new User({ name: 'jack', age: 32 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'jackmac' });

console.log(user.get('name'));
console.log(user.get('age'));
