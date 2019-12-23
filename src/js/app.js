// TODO: write your code here
import createDescription from './createDescription';

const user = {
  name: 'Лучник',
  type: 'zombie',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

console.log(createDescription(user));
