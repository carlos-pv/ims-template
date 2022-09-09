import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any;

  constructor(private http: HttpClient) {
    this.cargarEquipo();
    this.cargarInfo();
  }
  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://ims-mutua-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: ProductoInterface) => {
        this.cargada = true;
        this.equipo = resp;
      });
  }
}
