import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './pages/button/button.component';
import { ButtontoggleComponent } from './pages/buttontoggle/buttontoggle.component';

const routes: Routes = [
 {path:'',component:ButtonComponent},
 {path:'buttontoggle',component:ButtontoggleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
