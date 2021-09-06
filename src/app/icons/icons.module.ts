import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './pages/icons/icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    AngularmaterialModule
  ]
})
export class IconsModule { }
