import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
//import { ConService }from './../../service/con.service';

@Component({
  selector: 'app-renta-vehiculo',
  templateUrl: './renta-vehiculo.component.html',
  styleUrls: ['./renta-vehiculo.component.css']
})
export class RentaVehiculoComponent implements OnInit {

  principal: Principal[]=[];
  item:any={disponibilidad:''};
  items:any;
  constructor( public principalService: PrincipalService) { 
    this.principalService.retorna().subscribe((items: any)=>{
        this.items=items;
        
    })

  }
  

  ngOnInit(): void {
      this.principalService.getAutos().subscribe(principal =>{
        console.log(principal);
        this.principal=principal;
      })
  }

  editar(principal:Principal){
    console.log(principal);
    this.item=principal;
  }

  formEditar(){
    this.principalService.editar(this.item);
  }
}


//<td><button class="btn btn-outline-danger" (click)="formEditar(product)">Editar</button></td>
