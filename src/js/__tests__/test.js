import Team from '../app.js';

test('добавление уникального персонажа в команду', () => {
  const petr = { name: 'petr' };
  const fedya = { name: 'fedya' };
  Team.add(petr);
  Team.add(fedya);
  expect(Team.size).toBe(2);
});

test('добавление нескольких персонажей в команду', () => {
  const petr = { name: 'petr' };
  const fedya = { name: 'fedya' };
  const tolya = { name: 'tolya' };
  Team.addAll(petr, fedya, tolya);
  expect(Team.size).toBe(3);
});

test('конвертация Set в массив', () => {
  const petr = { name: 'petr' };
  const fedya = { name: 'fedya' };
  Team.addAll(petr, fedya);
  expect(Team.toArray()).toEqual([petr, fedya]);
});
