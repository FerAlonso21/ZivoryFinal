import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Registro from 'src/app/Interfaces/registro.interface';
import { RolesService } from '../Servicios/roles.service';
import { UserService } from '../Servicios/user.service';
import { validarQueSeanIguales } from './app.validator';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  formReg!: FormGroup;
  rea!:FormGroup;
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
    password: ' '
  };
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router,private rolesService:RolesService) { 

    this.formReg = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
      
    });

    // {
    //   Validators:this.Mustmatch('password1','password2');
    // }
  }

  ngOnInit() {
        this.initForm();

  }
  initForm() {
    this.rea = this.fb.group({
      'password1':  ['', Validators.required],
      'password2': ['', Validators.required]
    }, {
      validators: validarQueSeanIguales
    });
  }

  async onSubmit(){
    this.usuario.email= this.formReg.get('email')?.value;
    this.usuario.nombre= this.formReg.get('nombre')?.value;
    this.usuario.apellido= this.formReg.get('apellido')?.value;
    this.usuario.direccion= this.formReg.get('direccion')?.value;
    this.usuario.telefono= this.formReg.get('telefono')?.value;
    this.usuario.edad= this.formReg.get('edad')?.value;
      this.usuario.rol=false;
    this.aux.email=this.formReg.get('email')?.value;
    this.aux.password1=this.formReg.get('password1')?.value;
    this.aux.password2=this.formReg.get('password2')?.value;

    console.log(this.aux);
    this.userService.registrar(this.aux)
    .then( response => {
      
      console.log(response);
      this.router.navigate(['/login']);
      
 
      
    })
    .catch( error => console.log(error));
    const response2 = await this.rolesService.addRegistro(this.usuario);
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