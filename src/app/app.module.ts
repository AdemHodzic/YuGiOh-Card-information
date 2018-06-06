import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    CardsContainerComponent,
    CardComponent,
    CardDetailsComponent,
    InvalidRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
