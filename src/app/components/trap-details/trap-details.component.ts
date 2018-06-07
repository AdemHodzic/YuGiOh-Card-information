import { Component, OnInit } from '@angular/core';
import { Card } from '../../common/models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-trap-details',
  templateUrl: './trap-details.component.html',
  styleUrls: ['./trap-details.component.css']
})
export class TrapDetailsComponent implements OnInit {

  card: Card;
  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.cardService.getByName(name)
      .pipe( tap(data => console.log(data)) )
      .subscribe(data => this.card = data);
  }

}
