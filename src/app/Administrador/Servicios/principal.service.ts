import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import Principal from 'src/app/Interfaces/Principal.interface';

import { Observable } from 'rxjs';
//import { AngularFirestoe, AngularFirestoreCollection} from 

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
principal!:Observable<Principal[]>;
  constructor(private firestore:Firestore) {}

   addPrincipal(principal:Principal){
    const principalRef= collection(this.firestore,'Concentrado');
    return addDoc(principalRef,principal);
  }

  baja(){
    
  }

  getAutos(){
    return this.principal;
  }

}

