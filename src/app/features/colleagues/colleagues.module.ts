import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColleaguesRoutingModule } from './colleagues-routing.module';
import { ColleaguesComponent } from './colleagues.component';
import { ColleagueCardComponent } from './colleague-card/colleague-card.component';


@NgModule({
  declarations: [
    ColleaguesComponent,
    ColleagueCardComponent
  ],
  imports: [
    CommonModule,
    ColleaguesRoutingModule
  ]
})
export class ColleaguesModule { }
