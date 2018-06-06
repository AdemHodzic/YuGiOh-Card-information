import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../services/card.service';
import { Card } from '../../common/models/card';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  cards: Observable<Card[]>;
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getAllCards();
  }

}
