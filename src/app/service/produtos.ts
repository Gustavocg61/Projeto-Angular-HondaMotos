import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Produtos {
  constructor(private srv: HttpClient){
  }
    getProdutos(): Observable<any>{
    return this.srv.get('https://api.mercadolibre.com/sites/MLB/search?q=bicicletas%20eletricas')
  }
}
