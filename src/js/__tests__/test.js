import Team from '../app.js';

describe('Team', () => {
  let team;
  beforeEach(() => {
    team = new Team();
  });
  test('добавление уникального персонажа в команду', () => {
    const petr = { name: 'petr' };
    const fedya = { name: 'fedya' };
    team.add(petr);
    team.add(fedya);
    expect(team.members.size).toBe(2);
  });
  test('нет дубликатов', () => {
    const petr = { name: 'petr' };
    team.add(petr);
    expect(() => {
      team.add(petr);
    }).toThrow(new Error('Персонаж уже есть в команде'));
  });

  test('добавление нескольких персонажей в команду', () => {
    const petr = { name: 'petr' };
    const fedya = { name: 'fedya' };
    const tolya = { name: 'tolya' };
    team.addAll(petr, fedya, tolya);
    expect(team.members.size).toBe(3);
  });

  test('конвертация Set в массив', () => {
    const petr = { name: 'petr' };
    const fedya = { name: 'fedya' };
    team.addAll(petr, fedya);
    expect(team.toArray()).toEqual([petr, fedya]);
  });
});
