import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

//Components

let componentsArray = [Component1Component,Component2Component ]

@NgModule({
  declarations: componentsArray,
  exports:componentsArray,
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ComponentsModule { }
