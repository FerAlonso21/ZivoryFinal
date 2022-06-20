import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Registro from 'src/app/Interfaces/registro.interface';
import { RolesService } from '../Servicios/roles.service';
import { RecaptchaVerifier } from 'firebase/auth';

import { UserService } from '../Servicios/user.service';
import { AccesoService } from '../Servicios/acceso.service';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';
import * as auth from 'firebase/auth';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string="Email";
  contra: string="Password";
  recaptchaVerifier: any;
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
    swal.fire({
      allowOutsideClick: true,
      title: "Cargando..",
      text: "Un momento!",
    }).then((result)=>{
      
    });
    swal.showLoading();
    swal.close();

  }
  createCaptcha(){
    this.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{size: 'visible'}, auth.getAuth());
    this.recaptchaVerifier.render();
  }
  sendCode(phone: string){
    swal.fire({
      allowOutsideClick: false,
      title: "Cargando..",
      text: "Un momento!",
    }).then((result)=>{
      
    });
    swal.showLoading();
    this.rolesService.sendCode(phone, this.recaptchaVerifier);
  }

  cargar(){ 
    swal.fire({
      allowOutsideClick: true,
      title: "Cargando..",
      text: "Un momento!",
    }).then((result)=>{
      
    });
    swal.showLoading();
    this.userService.login(this.formLogin.value)
    
    .then(response => {
      
      this.rolesService.getRoles().subscribe(registro => {
        console.log("registro"+registro);
        for(let i in registro){
          if(registro[i].rol=="1"){
           
            if(this.formLogin.get('email')?.value == registro[i].email){
              console.log("ADMINISTRADOR");
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
    .catch(err=>{
      swal.close();
      swal.fire({
      allowOutsideClick: true,
      title: "Error...",
      text: "Algo salio mal.. Revisa tus datos! ",
      confirmButtonText:'Entendido'
     
    });
      this.router.navigate(['/login']);
    });
  }

}