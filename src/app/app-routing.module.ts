import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipoProductoComponent } from './modulo-inventario/tipo-producto/tipo-producto.component';
import { ProductosComponent } from './modulo-inventario/productos/productos.component';
import { InventarioComponent } from './modulo-inventario/inventario/inventario.component';
import {PersonaComponent} from './modulo-persona/persona/persona.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tipo', component: TipoProductoComponent },
  { path: 'productos', component: ProductosComponent },
  {path: 'inventario', component: InventarioComponent },
  { path: 'peo', component: PersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents=[
  DashboardComponent,
  TipoProductoComponent,
  ProductosComponent,
  InventarioComponent, PersonaComponent ]

