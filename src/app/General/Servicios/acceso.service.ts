import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import Registro from 'src/app/Interfaces/registro.interface';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';
const initRol={
  
  email:'' ,
  rol:3
};
@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private rol$ = new BehaviorSubject<Usuario>(initRol);
  
  constructor(private router:Router) { }
  get selectedRol$():Observable<Usuario>{
    return this.rol$.asObservable();
  }
  setRol(usuario:Usuario):void{
    this.rol$.next(usuario);
    this.router.navigate(['../home']);
  }
}
