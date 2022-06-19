import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Principal from 'src/app/Interfaces/Principal.interface';
import { PrincipalService } from '../Servicios/principal.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {
  formAlta!: FormGroup;
  info: Principal={
    sucursal:'',
    nombre_coche:'',
    marca:'',
    anio:'',
    tipo:'',
    transmision: '',
    color:'',
    url:'', 
    mantenimiento:'',
    disponibilidad:'',
    imagen:'',
  };
  constructor(private principalService:PrincipalService,private router:Router) {
  this.formAlta = new FormGroup({
    sucursal: new FormControl(),
    nombre_coche: new FormControl(),
    marca: new FormControl(),
    anio: new FormControl(),
    url: new FormControl(),
    color: new FormControl(),
    tipo: new FormControl(),
    imagen: new FormControl(),
    mantenimiento: new FormControl(),
    disponibilidad: new FormControl(),
    transmision: new FormControl(),
  });

   }

  ngOnInit(): void {
  }
  async onSubmit(){
   
    
    const resp = await this.principalService.addPrincipal(this.formAlta.value)
    swal.fire('Registro Exitoso').then((result)=>{
      //window.location.reload();
      this.router.navigate(['/home'])
    });
    
  }

}
