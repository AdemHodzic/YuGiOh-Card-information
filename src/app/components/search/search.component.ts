import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  @Output('toggleEvent') toggleEvent: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleEvent.emit(null);
  }

}
