import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Components
import { Demo1Component } from './pages/demo1/demo1.component';
import { Demo2Component } from './pages/demo2/demo2.component';


//Material components
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';



//modules
import { ComponentsModule } from './shared/components/components.module';
import { AdminModule } from './pages/admin/admin.module';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Demo3Component } from './shared/components/demo3/demo3.component';
import { Demo4Component } from './shared/components/demo4/demo4.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';

import { ImagePreloaderDirective } from './core/directives/image-preloader.directive';
import { MouseEventsDirective } from './core/directives/mouse-events.directive';
import { DemoPipe } from './core/pipes/demo.pipe';
import { ErrorInterceptor } from './core/interceptors/errors.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    RegisterComponent,
    Page1Component,
    Page2Component,
    Demo3Component,
    Demo4Component,
    MouseEventsDirective,
    ImagePreloaderDirective,
    DemoPipe
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    ComponentsModule,
    AdminModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
