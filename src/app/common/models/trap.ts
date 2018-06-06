import { TrapType } from '../enums/trap-types';
import { Card } from './card';
import { CardType } from '../enums/card-type';

export class Trap extends Card {
  name: string;
  image: string;
  type: TrapType;
  text: string;
  card: CardType = CardType.Trap;

  constructor(
    name: string,
    image: string,
    type: TrapType,
    text: string,
  ) {
    super();
  }
}
