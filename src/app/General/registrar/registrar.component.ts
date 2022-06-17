import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Registro from 'src/app/Interfaces/registro.interface';
import { RolesService } from '../Servicios/roles.service';
import { UserService } from '../Servicios/user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  formReg!: FormGroup;
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
  constructor( private userService:UserService, private router:Router,private rolesService:RolesService) { 

    this.formReg = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
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
    this.aux.password=this.formReg.get('password')?.value;
    console.log(this.aux);
    this.userService.registrar(this.aux)
    .then( response => {
      
      console.log(response);
      this.router.navigate(['/login']);
      
 
      
    })
    .catch( error => console.log(error));
    const response2 = await this.rolesService.addRegistro(this.usuario);
  }

}
