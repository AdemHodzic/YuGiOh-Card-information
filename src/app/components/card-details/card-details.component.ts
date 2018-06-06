import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Observable } from 'rxjs';
import { Card } from '../../common/models/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  card: Card;
  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.cardService.getByName(name)
      .subscribe((data: Card) => {
        console.log(data)
        this.card = data;
      });
    this.confirmCard();
  }

  private confirmCard() {
    if (!this.card) {
      this.router.navigate(['/invalid']);
    }
  }
}
