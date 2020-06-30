import { Component, OnInit } from '@angular/core';
import { CardItemContent } from '../../models/card-item-content';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  cardItems: CardItemContent[] = [
    {
      title: 'Riesgo laboral',
      description:
        'Tabla con porcentajes de riesgo laboral para contraer COVID-19',
      route_link: '/information/covid-risk',
    },
    {
      title: 'Nueva normalidad',
      description: '¿Cuándo? o, ¿A caso regresará la vida a una normalidad?',
      route_link: '/information/return-to-normal',
    },
    {
      title: 'Infografías',
      description:
        'Descarga anuncios e imagenes tipo poster para informar a tu comunidad',
      route_link: '/information/covid-risk',
    },
  ];
  ngOnInit(): void {}
}
