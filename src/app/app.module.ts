import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SharedModules } from './shared/shared.modules'
import { CoreModules } from './core/core.modules'
import { AProposComponent } from './modules/apropos/apropos.component'
import { MotDirecteurComponent } from './modules/mot-directeur/mot-directeur.component'
import { AccueilComponent } from './modules/accueil/accueil.component';
import { LoginComponent } from './modules/login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    AProposComponent,
    MotDirecteurComponent,
    AccueilComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModules,
    CoreModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
