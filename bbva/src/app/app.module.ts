import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { SucursalComponent } from './sucursal/sucursal.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
