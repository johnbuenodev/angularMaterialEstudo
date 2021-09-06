import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './pages/button/button.component';
import { ButtontoggleComponent } from './pages/buttontoggle/buttontoggle.component';
import { ButtonRoutingModule } from './button-routing.module';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtontoggleComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    AngularmaterialModule
  ]
})
export class ButtonModule { }
