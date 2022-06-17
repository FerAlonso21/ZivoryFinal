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
    email: 'xxxxx@gmail.com',
    rol: false
  };
  constructor( private userService:UserService, private router:Router,private rolesService:RolesService) { 

    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    this.usuario.email= this.formReg.get('email')?.value;
      this.usuario.rol=false;
    console.log(this.formReg.value);
    this.userService.registrar(this.formReg.value)
    .then( response => {
      
      console.log(response);
      this.router.navigate(['/login']);
      
 
      
    })
    .catch( error => console.log(error));
    const response2 = await this.rolesService.addRegistro(this.usuario);
  }

}
