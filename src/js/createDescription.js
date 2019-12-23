export default function createDescription(obj) {
  const {
    name, type, health, level, attack, defence,
  } = obj;

  let emoji = [
    { hero: 'Bowman', avatar: '😠' },
    { hero: 'Swordsman', avatar: '😡' },
    { hero: 'Magician', avatar: '🧐' },
    { hero: 'Daemon', avatar: '👿' },
    { hero: 'Undead', avatar: '💀' },
    { hero: 'Zombie', avatar: '🧟' },
  ];

  emoji = emoji.find((item) => item.hero.toLowerCase() === type.toLowerCase());

  try {
    return `${emoji.avatar}  ${name[0].toUpperCase()}(${level})  \u{2694} ${attack}  \u{1F6E1} ${defence}  \u{2764} ${health}`;
  } catch (e) {
    return 'Something went wrong';
  }
}
