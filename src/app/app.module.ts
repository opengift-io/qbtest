import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppServicesComponent } from './components/app-services/app-services.component';
import { AppBagComponent } from './components/app-bag/app-bag.component';
import { AppFunctionsComponent } from './components/app-functions/app-functions.component';
import { AppProfileComponent } from './components/app-profile/app-profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppServicesComponent,
    AppBagComponent,
    AppFunctionsComponent,
    AppProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
