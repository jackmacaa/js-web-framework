import { User } from './models/User';

const user = new User({ name: 'jack', age: 32 });

user.on('change', () => {});
user.on('save', () => {
  console.log('Save was triggered');
});

user.trigger('save')

//console.log(user)