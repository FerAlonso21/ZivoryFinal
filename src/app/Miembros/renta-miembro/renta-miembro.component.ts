import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/Administrador/Servicios/principal.service';
import Principal from 'src/app/Interfaces/Principal.interface';

@Component({
  selector: 'app-renta-miembro',
  templateUrl: './renta-miembro.component.html',
  styleUrls: ['./renta-miembro.component.css']
})
export class RentaMiembroComponent implements OnInit {
  principal:Principal[]=[];
  array:Principal[] = [];
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
    console.log(this.array);
  }

}
