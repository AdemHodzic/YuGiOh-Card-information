import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../common/models/card';
import { CardService } from '../../services/card.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-spell-details',
  templateUrl: './spell-details.component.html',
  styleUrls: ['./spell-details.component.css']
})
export class SpellDetailsComponent implements OnInit {

  card: Card;
  constructor (
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.cardService.getByName(name)
      .subscribe(data => this.card = data);
  }

}
