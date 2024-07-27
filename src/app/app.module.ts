import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AboutComponent } from './composants/about/about.component';
import { ServicesComponent } from './composants/services/services.component';
import { TeamComponent } from './composants/team/team.component';
import { FooterComponent } from './composants/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
