import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChildComponent } from './presenters/child/child.component';
import { Child2Component } from './presenters/child2/child2.component';
import { Child3Component } from './presenters/child3/child3.component';
import { Grandchild1Component } from './presenters/grandchild1/grandchild1.component';
import { Grandchild2Component } from './presenters/grandchild2/grandchild2.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ChildComponent, Child2Component, Child3Component, Grandchild1Component, Grandchild2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
