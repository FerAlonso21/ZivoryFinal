import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, collection, Firestore , collectionData} from '@angular/fire/firestore';
import Registro from 'src/app/Interfaces/registro.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';
import { AccesoService } from './acceso.service';

declare global {
  interface Window {
    recaptchaVerifier: auth.RecaptchaVerifier;
    confirmationResult: any;
  }
}
@Injectable({
  providedIn: 'root'
})
export class RolesService  {
  info!: Usuario;
  constructor(private firestore:Firestore,public afauth:AngularFireAuth,private router:Router, private servicio:AccesoService) { }

  

  addRegistro(registro:Registro){
    const regisrtoRef= collection(this.firestore,'usuarios');
    return addDoc(regisrtoRef,registro);

  }
  getRoles(): Observable<Registro[]>{
    const regisrtoRef= collection(this.firestore,'usuarios');
    return collectionData(regisrtoRef,{idField:'id'}) as Observable<Registro[]>;
  }
  getUserLog(){
    return this.afauth.authState;
  }
  //Enviar código a teléfono móvil
  sendCode(phone: string, appVerified: any) {
    return this.afauth
      .signInWithPhoneNumber(phone, appVerified)
      .then((confirmation) => {
        window.confirmationResult = confirmation;
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  //Verifica que el código ingresado corresponda.
  verifyCode(code: string) {
        this.servicio.selectedRol$.subscribe((usuario:Usuario) => this.info = usuario);
    return window.confirmationResult.confirm(code).then((result: any) => {
      let credentials = auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId,code);
      this.afauth.signInWithCredential(credentials);
      this.info.rol=2;   
      this.info.email='PhoneUser@gmail.com';
      console.log(this.info);

      this.servicio.setRol(this.info);
      this.router.navigate(['/Home']);
    });
  }
}