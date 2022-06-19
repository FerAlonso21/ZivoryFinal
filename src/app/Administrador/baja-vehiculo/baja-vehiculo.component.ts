
import { Component, OnInit } from '@angular/core';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-baja-vehiculo',
  templateUrl: './baja-vehiculo.component.html',
  styleUrls: ['./baja-vehiculo.component.css']
})
export class BajaVehiculoComponent implements OnInit {
 
  principal:Principal[]=[];
  constructor( public principalService: PrincipalService,private router:Router) { }

  ngOnInit(): void {
      this.principalService.getAutos().subscribe(principal =>{
        console.log(principal);
        this.principal=principal;
      })
  }

   async borrar(principal:Principal){
     const response = await this.principalService.eliminar(principal); 
     swal.fire('Baja Exitosa').then((result)=>{
      //window.location.reload();
      this.router.navigate(['/home'])
    });
  }
  
}
