import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { AboutModule } from './components/about/about.module';
import { ContentModule } from './components/content/content.module';
import { ServiceModule } from './components/service/service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ContentModule,
    AboutModule,
    ServiceModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
