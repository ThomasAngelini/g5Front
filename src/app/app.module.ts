import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component'
import { SharedModules } from './shared/shared.modules'
import { CoreModules } from './core/core.modules'
import { AProposComponent } from './modules/apropos/apropos.component'
import { MotDirecteurComponent } from './modules/mot-directeur/mot-directeur.component'
import { AccueilComponent } from './modules/accueil/accueil.component';
import { LoginComponent } from './modules/login/login.component'

const routes: Routes = [
  { path: 'about', component: AProposComponent },
  { path: 'word', component: MotDirecteurComponent },
  { path: 'login', component: LoginComponent },
  { path: '/home', component: AccueilComponent },
  { path: '', redirectTo: "home" },
  { path: '**', redirectTo: "/home", pathMatch: "full" }
];

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
    RouterModule.forRoot(routes),
    SharedModules,
    CoreModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
