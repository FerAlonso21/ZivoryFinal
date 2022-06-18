import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, collection, Firestore , collectionData} from '@angular/fire/firestore';
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
  getRoles(): Observable<Registro[]>{
    const regisrtoRef= collection(this.firestore,'usuarios');
    return collectionData(regisrtoRef,{idField:''}) as Observable<Registro[]>;
  }
}
