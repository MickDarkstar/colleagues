import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleaguesRoutingModule } from './colleagues-routing.module';
import { ColleaguesComponent } from './colleagues.component';
import { ColleagueCardComponent } from './colleague-card/colleague-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    ColleaguesComponent,
    ColleagueCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    ColleaguesRoutingModule
  ]
})
export class ColleaguesModule { }
