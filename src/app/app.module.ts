import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChildComponent } from './presenters/child/child.component';
import { AnotherChildComponent } from './presenters/another-child/another-child.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ChildComponent, AnotherChildComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
