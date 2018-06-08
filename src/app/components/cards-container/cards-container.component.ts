import { Component, OnInit, ChangeDetectorRef, OnChanges, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../services/card.service';
import { Card } from '../../common/models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  cards: Observable<Card[]>;
  numOfCards: number;
  constructor(
    private cardService: CardService,
    private router: Router,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.cards = this.cardService.cards;

  }
  redirect(card: Card) {
    const link = `/details/${card.card}/${card.name}`;
    this.router.navigate([link]);
  }
}
