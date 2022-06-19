import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';

@Component({
  selector: 'app-consultaman',
  templateUrl: './consultaman.component.html',
  styleUrls: ['./consultaman.component.css']
})
export class ConsultamanComponent implements OnInit {
  principal:Principal[]=[];
  array:Principal[]=[];
  constructor(private servicio:PrincipalService) {
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

  ngOnInit(): void {
  }

}
