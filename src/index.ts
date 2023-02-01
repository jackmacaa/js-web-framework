import { User } from './models/User';

const user = new User({name: "Kora", age: 1});

//user.set({ name: 'Jack', age: 30 });

user.save();
