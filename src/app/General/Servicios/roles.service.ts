import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, collection, Firestore , collectionData} from '@angular/fire/firestore';
import Registro from 'src/app/Interfaces/registro.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private firestore:Firestore,public afauth:AngularFireAuth) { }

  addRegistro(registro:Registro){
    const regisrtoRef= collection(this.firestore,'usuarios');
    return addDoc(regisrtoRef,registro);

  }
  getRoles(): Observable<Registro[]>{
    const regisrtoRef= collection(this.firestore,'usuarios');
    return collectionData(regisrtoRef,{idField:''}) as Observable<Registro[]>;
  }
  getUserLog(){
    return this.afauth.authState;
  }
}
