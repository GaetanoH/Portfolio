import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFooterComponent,
    MyHeaderComponent,
    MyPortfolioComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
