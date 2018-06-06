import { Injectable } from '@angular/core';
import { MockCards } from '../common/mock-cards';
import { Observable, of} from 'rxjs';
import { Card } from '../common/models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Observable<Card[]> = of(MockCards);
  constructor() { }

  getAllCards(): Observable<Card[]> {
    return this.cards;
  }

  getNumberOfCards(): Observable<number> {
    return of(MockCards.length);
  }

  getByName(name: string): Observable<Card> {
    const card = this.findByName(name);
    return of(card);
  }

  private findByName(name: string): Card | null {
    let card: Card = null;
    MockCards.forEach(element => {
      if (element.name === name) {
        card = element;
      }
    });
    return card;
  }
}
