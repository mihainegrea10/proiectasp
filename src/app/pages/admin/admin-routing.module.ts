import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent1Component } from './admin-component1/admin-component1.component';
import { AdminComponent2Component } from './admin-component2/admin-component2.component';
import { AdminModule } from './admin.module';

const routes: Routes = [{
  path: "",
  component: AdminComponent,
  children: [{
    path: "page1",
    component: AdminComponent1Component
  },
    {
      path: "page2",
      component:AdminComponent2Component
      }  ]
},
  {
    path: "home",
    component:AdminHomeComponent
  },
  {
    path: "admin",
    loadChildren: () => import('./admin.module').then(m => AdminModule)
   }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
