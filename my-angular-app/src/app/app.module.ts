import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { EffectsModule } from '@ngrx/effects';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpCardComponent } from './components/emp-card/emp-card.component';
import { EmpAppComponent } from './components/emp-app/emp-app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpCardComponent,
    EmpAppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
