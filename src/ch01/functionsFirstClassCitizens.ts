interface Hero {
  name: string;
  powers: string[];
}

const heroes = [
  {
    name: 'Spiderman',
    powers: [
      'wall-crawling',
      'enhanced strength',
      'enhanced speed',
      'spider-Sense'
    ]
  },
  {
    name: 'Superman',
    powers: ['flight', 'superhuman strength', 'x-ray vision', 'super-speed']
  }
];

function find<T>(arr: T[], filter: (i: T) => boolean) {
  return arr.filter(filter);
}

const spiderman = find(heroes, h => h.name === 'Spiderman');
console.log('spiderman', spiderman);

function findV2<T>(filter: (i: T) => boolean) {
  return (arr: T[]) => {
    return arr.filter(filter);
  };
}

const findSpiderman = findV2((h: Hero) => h.name === 'Spiderman');
const spidermanV2 = findSpiderman(heroes);
console.log('spidermanV2', spidermanV2);
