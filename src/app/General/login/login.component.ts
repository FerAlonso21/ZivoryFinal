import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Registro from 'src/app/Interfaces/registro.interface';
import { RolesService } from '../Servicios/roles.service';

import { UserService } from '../Servicios/user.service';
import { AccesoService } from '../Servicios/acceso.service';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin !:FormGroup;
  aux:Boolean=false;
  info!: Usuario;
  constructor( private userService:UserService, private router:Router, private rolesService:RolesService,private servicio:AccesoService) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
   }

  ngOnInit(): void {
    this.servicio.selectedRol$.subscribe((usuario:Usuario) => this.info = usuario)
  }
  onSubmit(){ 
    this.userService.login(this.formLogin.value)
    .then(response => {
      
      this.rolesService.getRoles().subscribe(registro => {
        for(let i in registro){
          if(registro[i].rol==true){
           
            if(this.formLogin.get('email')?.value == registro[i].email){
              console.log("ADMINISTRADOR");
             this.aux=true;
             this.info.email=this.formLogin.get('email')?.value;
             this.info.rol=1;
             console.log("buenosdias")
             this.servicio.setRol(this.info);
              //this.router.navigate(['/admin']);
              
            }
          }
        }
        if(this.aux==false){
          this.info.email=this.formLogin.get('email')?.value;
          this.info.rol=2;
          this.servicio.setRol(this.info);
          
          this.router.navigate(['/home']);
        }
        //
        
      })
      //this.router.navigate(['/main'])
    })
    .catch(error => console.log(error));
    /*this.userService.login(this.formLogin.value)
    .then( response =>{
      console.log(response);
      this.router.navigate(['/miembro']);
    })
    .catch(error =>console.log(error));*/
  }

}
