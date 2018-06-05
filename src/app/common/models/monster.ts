import { Attribute } from '../enums/attributes';
import { Type } from '../enums/types';
import { Card } from './card';
export class Monster extends Card{

  name: string;
  image: string;
  attack: number;
  defense: number;
  text: string;

  constructor(name: string, image: string, attack: number, defense: number, text: string) {
    super();
    this.name = name;
    this.image = image;
    this.attack = attack;
    this.defense = defense;
    this.text = text;
  }
  // type: Attribute;
  // attribute: Type;


}
