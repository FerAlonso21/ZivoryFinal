import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Registro from 'src/app/Interfaces/registro.interface';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';
import { AccesoService } from '../Servicios/acceso.service';
import { RolesService } from '../Servicios/roles.service';
import { UserService } from '../Servicios/user.service';
import { validarQueSeanIguales } from './app.validator';
import swal from 'sweetalert2';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  inf!:Usuario;

  formReg!: FormGroup;
  rea!:FormGroup;
  mandar!:FormGroup;
  usuario: Registro = {
    nombre:'',
    apellido:'',
    direccion:'',
    telefono:'',
    email: 'xxxxx@gmail.com',
    edad:18,
    rol: false
  };
  aux: any={
    email: 'xxxxx@gmail.com',
    password1:''
  };
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router,private rolesService:RolesService,public accesoService:AccesoService) { 

    this.formReg = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      edad: new FormControl(),
      
      
    }),
    this.rea = this.fb.group({
      email: new FormControl(),
      'password1':  ['', Validators.required],
      'password2': ['', Validators.required]
    }, {
      validators: validarQueSeanIguales
    })
    
    ;

    // {
    //   Validators:this.Mustmatch('password1','password2');
    // }
  }

  ngOnInit() {
    this.accesoService.selectedRol$.subscribe((usuario:Usuario)=>this.inf=usuario);


  }
  

  async onSubmit(){
    swal.fire({
      allowOutsideClick: false,
      title: "Cargando..",
      text: "Un momento!",
    });
    swal.showLoading();

    this.usuario.email= this.rea.get('email')?.value;
    this.usuario.nombre= this.formReg.get('nombre')?.value;
    this.usuario.apellido= this.formReg.get('apellido')?.value;
    this.usuario.direccion= this.formReg.get('direccion')?.value;
    this.usuario.telefono= this.formReg.get('telefono')?.value;
    this.usuario.edad= this.formReg.get('edad')?.value;
    this.usuario.rol=false;
    this.aux.email=this.rea.get('email')?.value;
    this.aux.password1=this.rea.get('password1')?.value;

    const {email,password1}=this.rea.value;
    console.log(this.rea.value);
    this.userService.registrar(email,password1).then((res)=>{ 
      this.inf.rol=2   
      this.inf.email=this.rea.get('email')?.value;
      
      console.log("registrado exitosamente");
      this.rolesService.addRegistro(this.usuario);
      console.log(this.inf);
      this.accesoService.setRol(this.inf);
      this.router.navigate(['/Home']);

    });
    // this.aux.password2=this.formReg.get('password2')?.value;

    
    // console.log("asa: "+this.aux);
    // this.userService.registrar(email,password1)
    // .then( response => {
      
    //   console.log(response);
      
      
 
      
    // })
    // .catch( error => console.log(error));
  }


get f(){
  return this.formReg.controls;
}
get g(){
  return this.rea.controls;
}


checarSiSonIguales(): boolean {  
  const a= this.checarSiSonTamano();
  return this.rea.hasError('noSonIguales') 

}
checarSiSonTamano(): boolean {  
  return this.rea.hasError('noSonTamano') 
}

}