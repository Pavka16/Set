import Daemon from '../Daemon';
import Zombie from '../Zombie';
import Magician from '../Magician';

import Team from '../Team';

test('test Set function', () => {
  const characterDaemon = new Daemon('Diablo');
  const characterZombie = new Zombie('Rob');
  const round = new Team();

  round.addAll(characterDaemon, characterZombie, characterDaemon);
  expect(round.toArray()).toEqual([characterDaemon, characterZombie]);
});

test('test Set function throw error', () => {
  const characterMagician = new Magician('Xorazon');
  const round = new Team();

  round.add(characterMagician);
  expect(() => round.add(characterMagician)).toThrow('Такой персонаж уже выбран');
});
