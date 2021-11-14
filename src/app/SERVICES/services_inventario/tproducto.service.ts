/*import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TproductoService {
   
  url='/http://localhost:3000/API'
  constructor(private http: HttpClient) { }

  //metodo get
  gettproducto()
  {
    return this.http.get(this.url+'/tipo-productos');
  }

}*/

import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Tproductos {

  // Node/Express API
  //REST_API: string = 'http://localhost:3000/API';
  REST_API:string='http://localhost:3000/API';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (private httpClient: HttpClient) { }

  // mostrar productos
  GetBooks () {
    let API_URL = `${this.REST_API}/tipo-productos`;
    return this.httpClient.get(API_URL , { headers: this.httpHeaders });

  }

}
