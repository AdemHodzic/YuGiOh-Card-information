import { Injectable } from '@angular/core';
import { MockCards } from '../common/mock-cards';
import { Observable, of} from 'rxjs';
import { Card } from '../common/models/card';
import { CardType } from '../common/enums/card-type';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Observable<Card[]> = of(MockCards);
  avalaibleTypes: CardType[] = [CardType.Monster, CardType.Spell, CardType.Trap];
  constructor() { }

  getAllCards(): Observable<Card[]> {
    this.filterAllCards();
    return this.cards;
  }

  getNumberOfCards(): Observable<number> {
    return of(MockCards.length);
  }

  getByName(name: string): Observable<Card> {
    const card = this.findByName(name);
    return of(card);
  }

  updateTypes(arr: CardType[]) {
    this.avalaibleTypes = arr;
    this.filterAllCards();
  }

  private filterAllCards() {
    const arr = [];
    MockCards.forEach(element => {
      if (this.avalaibleTypes.includes(element.card)) {
        arr.push(element);
      }
    });
    this.cards = of(arr);
  }
  private findByName(name: string): Card | null {
    let card: Card = null;
    MockCards
    .forEach(element => {
      if (element.name === name ) {
        card = element;
      }
    });
    return card;
  }
}
