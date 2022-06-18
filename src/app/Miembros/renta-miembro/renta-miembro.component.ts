import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta-miembro',
  templateUrl: './renta-miembro.component.html',
  styleUrls: ['./renta-miembro.component.css']
})
export class RentaMiembroComponent implements OnInit {

  array: any[] = [
  
      {
      "nombre":"Mustang",
      "marca":"Ford",
      "anio":"2016",
      "tipo":"Coupe",
      "color":"Rojo",
      "url":"https://static.cargurus.com/images/forsale/2021/10/26/04/10/2016_ford_mustang-pic-4656298418775849549-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp"
    },
    {
      "nombre":"Corolla",
      "marca":"Toyota",
      "anio":"2015",
      "tipo":"Hatchback",
      "color":"Blanco",
      "url":"https://toyotaapizaco.com.mx/panelautos/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-09-at-18.40.32.jpeg"
    },
    {
      "nombre":"Jetta",
      "marca":"VW",
      "anio":"2018",
      "tipo":"Sedan",
      "color":"Gris",
      "url":"https://soloautos.li.csnstatic.com/soloautos/cars/private/6gykd7dv39fnmwku5doso70oj.jpg?pxc_method=gravityfill&pxc_bgtype=self&height=725&width=1087"
    },
    {
      "nombre":"Focus",
      "marca":"Ford",
      "anio":"2017",
      "tipo":"Hatchback",
      "color":"Blanco",
      "url":"https://toyotaapizaco.com.mx/panelautos/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-09-at-18.40.32.jpeg"
    },
  
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.array);
  }

}
