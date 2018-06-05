import { SpellType } from '../enums/spell-types';
import { Card } from './card';
export class Spell extends Card {
  name: string;
  image: string;
  property: SpellType; // enum
  text: string;
}
