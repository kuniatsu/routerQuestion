import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path:'',
      component:Child1Component
    },{
      path:'c1',
      component:Child1Component
    },{
      path:'c2',
      component:Child2Component,
    },{
      path:'c3',
      component:Child3Component,
    }
  ])

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
