import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../service/veiculo.service';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.css']
})
export class ListaVeiculosComponent implements OnInit {

  veiculos: Array<any>;

  constructor(private veiculoService : VeiculoService) { }

  ngOnInit(): void {
    this.listarVeiculos();
  }

  listarVeiculos(){
    this.veiculoService.listar().subscribe(dados => this.veiculos = dados);
  }
}
