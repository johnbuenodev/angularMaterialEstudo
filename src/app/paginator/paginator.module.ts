import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './pages/paginator/paginator.component';
import { PaginatorRoutingModule } from './paginator-routing.module';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    PaginatorRoutingModule,
    AngularmaterialModule
  ]
})
export class PaginatorModule { }
