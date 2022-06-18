
import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-baja-vehiculo',
  templateUrl: './baja-vehiculo.component.html',
  styleUrls: ['./baja-vehiculo.component.css']
})
export class BajaVehiculoComponent implements OnInit {
 
  principal:Principal[]=[];
  constructor( public principalService: PrincipalService) { }

  ngOnInit(): void {
      this.principalService.getAutos().subscribe(principal =>{
        console.log(principal);
        this.principal=principal;
      })
  }

   async borrar(principal:Principal){
     const response = await this.principalService.eliminar(principal); 
     console.log(response);
  }
  
}
