import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  constructor(private httpClient: HttpClient) {}

  getNuevosCasos() {
    return this.httpClient.get('assets/data/nuevos-casos.json');
  }
  getTotalCasos() {
    return this.httpClient.get('assets/data/total-casos.json');
  }
  getNuevasMuertes() {
    return this.httpClient.get('assets/data/nuevas-muertes.json');
  }
  getTotalMuertes() {
    return this.httpClient.get('assets/data/total-muertes.json');
  }
  getNegativos() {
    return this.httpClient.get('assets/data/casos-negativos.json');
  }
  getSospechosos() {
    return this.httpClient.get('assets/data/casos-sospechosos.json');
  }
}
