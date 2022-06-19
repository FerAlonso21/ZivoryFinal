import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private auth:Auth,private afauth:AngularFireAuth) { }

  async registrar(email:string,password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    }catch(err){
      console.log("Error en registro", err);
      return null;
    }
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  logout(){
    console.log("aqui es el logout");
    return signOut(this.auth);
  }
}
