import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import Principal from 'src/app/Interfaces/Principal.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  //Concentrado!:Observable<Principal[]>
  hola!:AngularFirestoreCollection<Principal>
  public itemDoc!:AngularFirestoreDocument<Principal>;
  private itemscoll!:AngularFirestoreCollection<Principal>
  items: Observable<Principal[]>;
  
  constructor(private firestore:Firestore, private afs: AngularFirestore, private router:Router) {
    this.hola =this.afs.collection('Concentrado');
    this.itemscoll=afs.collection<Principal>('Concentrado');
    this.items=this.itemscoll.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data()as Principal;
          const id =a.payload.doc.id;
          return{id, ...data};
        }))
    );
    
  }
    


   addPrincipal(principal:Principal){
    const principalRef= collection(this.firestore,'Concentrado');
    
    
    return addDoc(principalRef,principal);
    
  }

  editarInfo(principal:Principal){
    this.afs.collection('Concentrado').doc(principal.id).update(principal);
    
  }

  getVehiculosSucursal(sucursal:string){
    this.afs.collection('Concentrado').doc(sucursal).get().subscribe(res => console.log(res));
    return this.afs.collection<Principal>('Concentrado').doc(sucursal).valueChanges();

  }



  getAutos(): Observable<Principal[]>{
    const principalRef= collection(this.firestore,'Concentrado');
    return collectionData(principalRef,{idField: 'id'}) as Observable<Principal[]>;
    console.log(principalRef);
  }

  retorna(){
    return this.items;
  }

  eliminar(principal: Principal){
    const eliminado = doc(this.firestore, `Concentrado/${principal.id}`);
    return deleteDoc(eliminado);
  }
  
  editar(principal:Principal){
   this.itemDoc=this.afs.doc<Principal>("Concentrado/"+principal.id);
   this.itemDoc.update(principal);
  }

  
}


/*

*/