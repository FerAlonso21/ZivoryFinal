import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  title = 'correo';

  datos:FormGroup;
  constructor(private httpclien:HttpClient){
    this.datos=new FormGroup({
      asunto: new FormControl('',Validators.required),
      msj: new FormControl('',Validators.required)
    })
  }

  envio(){

    let params={
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.msj     
      }
    console.log(params)
    
    this.httpclien.post('http://localhost:3000/envio',params).subscribe(resp=>{
   console.log(resp)
    })
  }
}
