import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './pages/badges/badges.component';
import { BadgesRoutingModule } from './badges-routing.module';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    AngularmaterialModule
  ]
})
export class BadgesModule { }
