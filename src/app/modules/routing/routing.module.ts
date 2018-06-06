import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidRouteComponent } from '../../components/invalid-route/invalid-route.component';
import { CardsContainerComponent } from '../../components/cards-container/cards-container.component';
import { CardDetailsComponent } from '../../components/card-details/card-details.component';

const routes = [
  {path: '', component: CardsContainerComponent},
  {path: 'details/:name', component: CardDetailsComponent},
  {path: '**', component: InvalidRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
