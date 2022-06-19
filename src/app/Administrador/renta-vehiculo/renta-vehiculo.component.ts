import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
//import { ConService }from './../../service/con.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renta-vehiculo',
  templateUrl: './renta-vehiculo.component.html',
  styleUrls: ['./renta-vehiculo.component.css']
})
export class RentaVehiculoComponent implements OnInit {

  principal:Principal[]=[];
  array:Principal[]=[];
  constructor( public servicio: PrincipalService, private route:Router) { 
    this.servicio.getAutos().subscribe(principal =>{
      
      this.principal=principal;
      for(let i of this.principal){
          
        if(i.disponibilidad=="true"){
            this.array.push(i);
        }
      }
    })

  }
  
  editar(info:Principal){
      info.disponibilidad="false";
      this.servicio.editarInfo(info);
      swal.fire('Modificacion Realizada').then((result)=>{
        //window.location.reload();
        this.route.navigate(['/home'])
      });
     // window.location.reload();
  }

  ngOnInit(): void {
      
  }

  

  
}


//<td><button class="btn btn-outline-danger" (click)="formEditar(product)">Editar</button></td>
