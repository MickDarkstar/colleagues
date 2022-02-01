import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/colleagues', pathMatch: 'full' },
  { path: 'colleagues', loadChildren: () => import('./features/colleagues/colleagues.module').then(m => m.ColleaguesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
