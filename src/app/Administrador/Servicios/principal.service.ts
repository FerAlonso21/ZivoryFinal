import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import Principal from 'src/app/Interfaces/Principal.interface';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private firestore:Firestore) {}

   addPrincipal(principal:Principal){
    const principalRef= collection(this.firestore,'Concentrado');
    return addDoc(principalRef,principal);
  }
}
