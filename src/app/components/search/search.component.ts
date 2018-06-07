import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  filter = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.filter = !this.filter;
  }

}
