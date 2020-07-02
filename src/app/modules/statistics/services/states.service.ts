import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  private DATA_URL =
    'https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos_abiertos/series_de_tiempo/nuevos/covid19_mex_confirmados.csv';
  constructor(private httpClient: HttpClient) {}

  getConfirmed() {
    return this.httpClient.get(this.DATA_URL, { responseType: 'text' });
  }
}
