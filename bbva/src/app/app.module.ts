import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { AtmService } from 'src/service/atm.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAmudlGxzT9IFD9PgRYygWwLyY2KMg32jM'
    })
  ],
  providers: [
    AtmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
