import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, AboutComponent, ServiceComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, NavbarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
