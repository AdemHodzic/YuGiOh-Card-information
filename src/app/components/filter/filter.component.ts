import { Component, OnInit } from '@angular/core';
import { CardType } from '../../common/enums/card-type';
import { CardService } from '../../services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: CardType[];
  monster: boolean;
  spell: boolean;
  trap: boolean;

  constructor(
    private cardService: CardService,
    private router: Router) { }

  ngOnInit() {
    this.categories = this.cardService.avalaibleTypes;
    this.prepareFilters();
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
    this.router.navigate(['/']);
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

  private prepareFilters() {
    if (this.categories.includes(CardType.Monster)) {
      this.monster = true;
    }
    if (this.categories.includes(CardType.Spell)) {
      this.spell = true;
    }
    if (this.categories.includes(CardType.Trap)) {
      this.trap = true;
    }
  }
}
