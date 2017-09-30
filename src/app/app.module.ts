import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    PagesModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }