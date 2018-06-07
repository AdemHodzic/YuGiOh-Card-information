import { Component, OnInit } from '@angular/core';
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

  cards: Card[];
  constructor(
    private cardService: CardService,
    private router: Router) { }

  ngOnInit() {
    this.cardService.getAllCards()
      .subscribe(data => this.cards = data);
  }


  redirect(card: Card) {
    const link = `/details/${card.card}/${card.name}`;
    this.router.navigate([link]);
  }
}
