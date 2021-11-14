import { Component, OnInit } from '@angular/core';
import {Tproductos} from '../../SERVICES/services_inventario/tproducto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipo-producto',
  templateUrl: './tipo-producto.component.html',
  styleUrls: ['./tipo-producto.component.css']
})
export class TipoProductoComponent implements OnInit {
  //constructor(private CrudService:CrudService, private router:Router) { }
  tipoProductos:any = [];
  
  constructor(private Tproductos: Tproductos) { }


  ngOnInit(): void {
    this.Tproductos.GetBooks().subscribe(res => {
      console.log(res)
      this.tipoProductos =<any>res;
    });
    
  }

}

