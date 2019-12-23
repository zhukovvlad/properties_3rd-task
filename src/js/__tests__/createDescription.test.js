import createDescription from '../createDescription';

test.each([
  ['good case', {
    name: 'Лучник', type: 'zombie', health: 50, level: 1, attack: 40, defence: 10,
  }, '🧟  Л(1)  ⚔ 40  🛡 10  ❤ 50'],
  ['bad case', {
    name: 'Лучник', type: 'Snowman', health: 50, level: 1, attack: 40, defence: 10,
  }, 'Something went wrong'],
])(
  ('should calculate %s for %i user'),
  (level, user, expected) => {
    const result = createDescription(user);

    expect(result).toEqual(expected);
  },
);

/*
test('should compare smthg with smthg', () => {
  const user = {
    name: 'Лучник',
    type: 'zombie',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const expected = '🧟  Л(1)  ⚔ 40  🛡 10  ❤ 50';

  const received = createDescription(user);

  expect(received).toEqual(expected);
});
*/
