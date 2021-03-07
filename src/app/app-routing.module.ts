import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PilaresListaComponent } from './pilares/pilares-lista/pilares-lista.component';
import { PilaresNuevoComponent } from './pilares/pilares-nuevo/pilares-nuevo.component';
import { PilaresEditarComponent } from './pilares/pilares-editar/pilares-editar.component';
import { BrigadasListaComponent } from './brigadas/brigadas-lista/brigadas-lista.component';
import { BrigadaNuevaComponent } from './brigadas/brigada-nueva/brigada-nueva.component';
import { BrigadaEditarComponent } from './brigadas/brigada-editar/brigada-editar.component';
import { ColabsListaComponent } from './colabs/lista/lista.component';
import { ColNuevoComponent } from './colabs/col-nuevo/col-nuevo.component';
import { ColEditarComponent } from './colabs/col-editar/col-editar.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "pilares", component: PilaresListaComponent},
  {path: "pilares/nuevo", component: PilaresNuevoComponent},
  {path: "pilares/editar/:id", component: PilaresEditarComponent},  
  {path: "brigadas", component: BrigadasListaComponent},
  {path: "brigadas/nueva", component: BrigadaNuevaComponent},
  {path: "brigadas/editar/:id", component: BrigadaEditarComponent},
  {path: "colaboradores", component: ColabsListaComponent},
  {path: "colaboradores/nuevo", component: ColNuevoComponent},
  {path: "colaboradores/editar/:id", component: ColEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
