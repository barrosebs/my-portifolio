import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavComponent } from './components/layout/nav/NavComponent';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
