import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { ShipsComponent } from './ships/ships.component';
import { MissionsComponent } from './missions/missions.component';
import {HttpClientModule} from "@angular/common/http";
import { ApodComponent } from './apod/apod.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NeoComponent } from './neo/neo.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    ShipsComponent,
    MissionsComponent,
    ApodComponent,
    NeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
