import { User } from './models/User';

const user = new User({ name: 'jack', age: 32 });

user.on('change', () => {});
console.log(user);
