import { TrapType } from '../enums/trap-types';
import { Card } from './card';

export class Trap extends Card{
  name: string;
  image: string;
  type: TrapType;
  text: string;
}
