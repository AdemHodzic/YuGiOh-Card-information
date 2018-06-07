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
  constructor() { }

  getAllCards(): Observable<Card[]> {
    return this.cards;
  }

  getNumberOfCards(): Observable<number> {
    return of(MockCards.length);
  }

  getByName(name: string): Observable<Card> {
    const card = this.findByName(name);
    console.log('card in getbyname', card)
    return of(card);
  }


  private findByName(name: string): Card | null {
    let card: Card = null;
    MockCards
    .forEach(element => {
      if (element.name === name) {
        card = element;
      }else
        console.log(element.name, 'nije ', name)
    });
    return card;
  }
}
