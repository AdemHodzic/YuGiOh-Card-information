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

  getAllCards() {
    return this.cards;
  }

  getNumberOfCards() {
    return of(MockCards.length);
  }
}
