import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Registro from 'src/app/Interfaces/registro.interface';
import { RolesService } from '../Servicios/roles.service';
import { RecaptchaVerifier } from 'firebase/auth';

import { UserService } from '../Servicios/user.service';
import { AccesoService } from '../Servicios/acceso.service';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';

import swal from 'sweetalert2';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin !:FormGroup;
  aux:Boolean=false;
  info!: Usuario;
  constructor( private userService:UserService, private router:Router, public rolesService:RolesService,private servicio:AccesoService,
    public ngZone: NgZone) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
   }

  ngOnInit(): void {
    this.createCaptcha();
    this.servicio.selectedRol$.subscribe((usuario:Usuario) => this.info = usuario);

  }
  createCaptcha(){
    this.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{size: 'visible'}, auth.getAuth());
    this.recaptchaVerifier.render();
  }
  sendCode(phone: string){
    this.rolesService.sendCode(phone, this.recaptchaVerifier);
  }

  cargar(){ 
    swal.fire({
      allowOutsideClick: false,
      title: "Cargando..",
      text: "Un momento!",
    });
    swal.showLoading();
    this.userService.login(this.formLogin.value)
    
    .then(response => {
      
      this.rolesService.getRoles().subscribe(registro => {
        
        for(let i in registro){
          if(registro[i].rol==true){
           
            if(this.formLogin.get('email')?.value == registro[i].email){
              
             this.aux=true;
             this.info.email=this.formLogin.get('email')?.value;
             this.info.rol=1;
             this.servicio.setRol(this.info);
              //this.router.navigate(['/admin']);
              swal.close();
            }
          }
        }
        if(this.aux==false){
          this.info.email=this.formLogin.get('email')?.value;
          this.info.rol=2;
          this.servicio.setRol(this.info);
          
          this.router.navigate(['/home']);
          swal.close();
        }
        //
        
      })
      //this.router.navigate(['/main'])
      
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales Invalidas',
       
      }).then((result)=>{
        window.location.reload();
      })
     
    }
    );
    /*this.userService.login(this.formLogin.value)
    .then( response =>{
      console.log(response);
      this.router.navigate(['/miembro']);
    })
    .catch(error =>console.log(error));*/
  }

}
