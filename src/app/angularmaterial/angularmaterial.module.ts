import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

////ng add @angular/material
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSliderModule,
  MatBadgeModule,
  ScrollingModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule
  
];


@NgModule({
  imports: [
    MaterialComponents
  ],
  ///adicionar o export para exportar os componentes declarados//relacionados ao modulo angularMaterial
  exports:[
    MaterialComponents
  ]
})
export class AngularmaterialModule { }
