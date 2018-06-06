import { SpellType } from '../enums/spell-types';
import { Card } from './card';
import { CardType } from '../enums/card-type';
export class Spell extends Card {
  name: string;
  image: string;
  property: SpellType; // enum
  text: string;
  card: CardType = CardType.Spell;
}
