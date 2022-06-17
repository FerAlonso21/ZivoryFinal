import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import Registro from 'src/app/Interfaces/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private firestore:Firestore) { }

  addRegistro(registro:Registro){
    const regisrtoRef= collection(this.firestore,'usuarios');
    return addDoc(regisrtoRef,registro);

  }
}
