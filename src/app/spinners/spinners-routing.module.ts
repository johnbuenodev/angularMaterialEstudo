import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinnersComponent } from './pages/spinners/spinners.component';

const routes: Routes = [
 {path:'',component:SpinnersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinnersRoutingModule { }
