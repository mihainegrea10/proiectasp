import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent1Component } from './admin-component1/admin-component1.component';
import { AdminComponent2Component } from './admin-component2/admin-component2.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatCardModule } from '@angular/material/card';


//Modules

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminComponent1Component,
    AdminComponent2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule
  ]
})
export class AdminModule { }
