import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnersComponent } from './pages/spinners/spinners.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { SpinnersRoutingModule } from './spinners-routing.module';



@NgModule({
  declarations: [
    SpinnersComponent
  ],
  imports: [
    CommonModule,
    AngularmaterialModule,
    SpinnersRoutingModule
  ]
})
export class SpinnersModule { }
