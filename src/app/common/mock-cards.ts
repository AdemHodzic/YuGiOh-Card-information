import { Monster } from './models/monster';
import { Card } from './models/card';
import { SpellType } from './enums/spell-types';
import { Spell } from './models/spell';
import {Trap} from './models/trap';
import { TrapType } from './enums/trap-types';

export const MockCards: Card[] = [
  new Monster(
    'Kuriboh',
    'https://www.ygohub.com/card_images/45aa6ae0-f075-418b-9d63-ee1e562a41c1.jpg',
    300,
    200,
    'Kuriboh'),
  new Monster(
    'Kuriboh1',
    'https://www.ygohub.com/card_images/45aa6ae0-f075-418b-9d63-ee1e562a41c1.jpg',
    300,
    200,
    'Kuriboh1'),
  new Monster(
    'Kuriboh2',
    'https://www.ygohub.com/card_images/45aa6ae0-f075-418b-9d63-ee1e562a41c1.jpg',
    300,
    200,
    'Kuriboh2'),

  new Spell(
    'Pot of greed',
    'https://www.ygohub.com/card_images/d59e6593-46d1-4d47-a78d-ab4c2e4014e7.jpg',
    'Draw 2 cards.',
    SpellType.Normal),
  new Monster(
    'Kuriboh4',
    'https://www.ygohub.com/card_images/45aa6ae0-f075-418b-9d63-ee1e562a41c1.jpg',
    300,
    200,
    'Kuriboh4'),
    new Trap(
      'Mirror Force',
      'https://www.ygohub.com/card_images/5973810590b07.jpg',
      'Destroy all your opponent\'s Attack Position monsters.',
      TrapType.Normal
    ),
];

