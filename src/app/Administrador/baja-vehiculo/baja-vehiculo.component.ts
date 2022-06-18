import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';



@Component({
  selector: 'app-baja-vehiculo',
  templateUrl: './baja-vehiculo.component.html',
  styleUrls: ['./baja-vehiculo.component.css']
})
export class BajaVehiculoComponent implements OnInit {
 
  concentrado: Principal[]=[];
  constructor( private principalService: PrincipalService) { }

  ngOnInit(): void {
this.principalService.getAutos().subscribe(concentrado =>{
  this.concentrado=concentrado;
})

  }

  bajavehiculo(){
    console.log('Auto eliminado');
  }
}

