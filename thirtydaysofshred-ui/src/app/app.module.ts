import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
  bootstrap: [AppComponent]
})

export class AppModule { }
