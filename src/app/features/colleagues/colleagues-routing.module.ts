import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleaguesComponent } from './colleagues.component';

const routes: Routes = [{ path: '', component: ColleaguesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColleaguesRoutingModule { }
