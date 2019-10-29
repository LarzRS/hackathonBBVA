import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtmComponent } from './atm/atm.component';
import { SucursalComponent } from './sucursal/sucursal.component';


const routes: Routes = [
  {path: 'atm', component: AtmComponent},
  {path: 'suc', component: SucursalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
