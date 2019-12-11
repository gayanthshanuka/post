import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { InstructionComponent } from './instruction/instruction.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'result',component:ResultComponent},
  {path:'instruction',component:InstructionComponent},
  {path:' ',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
