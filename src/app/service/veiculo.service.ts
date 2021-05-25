import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  urlVeiculos = 'http://localhost:9090/projetoteste-1.0.0/veiculos';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.urlVeiculos}`);
  }
}
