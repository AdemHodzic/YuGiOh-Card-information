import { Component, OnInit } from '@angular/core';
import { CardType } from '../../common/enums/card-type';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: CardType[];
  monster = true;
  spell = true;
  trap = true;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.categories = [CardType.Monster, CardType.Spell, CardType.Trap];
  }

  update() {
    this.categories = [];
    if (this.monster) {
      this.categories.push(CardType.Monster);
    }
    if (this.spell) {
      this.categories.push(CardType.Spell);
    }
    if (this.trap) {
      this.categories.push(CardType.Trap);
    }
    this.cardService.updateTypes(this.categories);
  }

  toggleMonster() {
    this.monster = !this.monster;
    this.update();
  }
  toggleSpell() {
    this.spell = !this.spell;
    this.update();
  }
  toggleTrap() {
    this.trap = !this.trap;
    this.update();
  }

}
