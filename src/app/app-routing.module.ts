import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerComponent } from './components/computer/computer.component';

const routes: Routes = [
  {path:"",component:ComputerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
