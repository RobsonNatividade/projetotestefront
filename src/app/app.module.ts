import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { VeiculoService } from './service/veiculo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaVeiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
