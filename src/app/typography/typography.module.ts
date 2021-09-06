import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './pages/typography/typography.component';
import { TypographyRoutingModule } from './typography-routing.module';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    TypographyRoutingModule,
    AngularmaterialModule
  ]
})
export class TypographyModule { }
