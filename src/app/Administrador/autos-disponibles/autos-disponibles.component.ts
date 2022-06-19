import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';

@Component({
  selector: 'app-autos-disponibles',
  templateUrl: './autos-disponibles.component.html',
  styleUrls: ['./autos-disponibles.component.css']
})
export class AutosDisponiblesComponent implements OnInit {
  principal:Principal[]=[];
  array:Principal[]=[];
  
  constructor(private servicio:PrincipalService) { }

  ngOnInit(): void {
    this.servicio.getAutos().subscribe(principal =>{
      console.log(principal);
      this.principal=principal;
      
      for(let i of this.principal){
          
        if(i.disponibilidad=="true"){
            this.array.push(i);
        }
      }
    })
  }

}
