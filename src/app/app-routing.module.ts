import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './pages/demo1/demo1.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

  {
    path: "demo1",
    component: Demo1Component
  },
  {
    path: "demo2/:jucatori_impresariati",
    component: Demo2Component
  },
  {
    path: "register",
    component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
