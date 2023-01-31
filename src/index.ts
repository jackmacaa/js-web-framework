import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'Kora', age: 1 });

user.save();
