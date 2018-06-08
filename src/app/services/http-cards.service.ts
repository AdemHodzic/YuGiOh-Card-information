import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardType } from '../common/enums/card-type';
import { Card } from '../common/models/card';
import { Observable } from 'rxjs';
import { merge } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCardsService {

  private api = 'http://localhost:3000/api/';
  cards: Observable<Card[]>;
  allowedTypes = [CardType.Monster, CardType.Spell, CardType.Trap];

  constructor(
    private http: HttpClient
  ) { }

  getAllCards() {
    return this.http.get<Card[]>(this.api + 'all');
  }

}
