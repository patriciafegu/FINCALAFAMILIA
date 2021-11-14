import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProductoComponent } from './modulo-inventario/tipo-producto/tipo-producto.component';

const routes: Routes = [
  //{ path:'', redirectTo:'/inicio', pathMatch:'full'},
  { path: 'tipo', component: TipoProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

