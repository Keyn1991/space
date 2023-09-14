import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from './missions/missions.component';
import { ShipsComponent } from './ships/ships.component';
import { PlanetsComponent } from './planets/planets.component';
import {ApodComponent} from "./apod/apod.component";
import {NeoComponent} from "./neo/neo.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'missions', component: MissionsComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'Apod', component: ApodComponent  },

  { path: 'neo', component: NeoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
