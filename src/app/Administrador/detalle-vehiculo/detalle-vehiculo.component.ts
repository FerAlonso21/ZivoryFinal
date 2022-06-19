import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.css']
})
export class DetalleVehiculoComponent implements OnInit {
  principal:Principal[]=[];
  array:Principal[]=[];
  aux:string=' d';
  constructor(private servicio:PrincipalService) { 
    this.servicio.getAutos().subscribe(principal =>{
      console.log(principal);
      this.principal=principal;
    })
  }

  ngOnInit(): void {

  }

  buscar(info:Principal){
  
    this.servicio.getVehiculosSucursal(info.id!).subscribe(res=>{
        console.log("esto traigo"+res?.anio)
    });
  }

}
