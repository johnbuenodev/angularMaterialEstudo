import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'button', 
  loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
  {path:'icon', 
  loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  {path:'typography',
  loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule) },
  {path:'spinners',
  loadChildren: () => import('./spinners/spinners.module').then(m => m.SpinnersModule) },
  {path:'badges',
  loadChildren: () => import('./badges/badges.module').then(m => m.BadgesModule) },
  {path:'paginator',
  loadChildren: () => import('./paginator/paginator.module').then(m => m.PaginatorModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
