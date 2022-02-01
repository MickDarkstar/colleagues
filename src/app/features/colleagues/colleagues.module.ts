import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleaguesRoutingModule } from './colleagues-routing.module';
import { ColleaguesComponent } from './colleagues.component';
import { ColleagueCardComponent } from './colleague-card/colleague-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FilterPipe } from 'src/app/common/pipes/filter.pipe';
import { ApiClientService } from 'src/app/common/services/api-client.service';
import { TrettonColleagueService } from 'src/app/common/services/tretton-colleagues/tretton-colleague.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ColleaguesComponent,
    ColleagueCardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatGridListModule,
    ColleaguesRoutingModule,
    FormsModule,
  ],
  providers: [
    ApiClientService,
    TrettonColleagueService
  ]
})
export class ColleaguesModule { }
