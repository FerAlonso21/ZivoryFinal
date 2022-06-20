import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  title = 'correo';

  datos:FormGroup;
  constructor(private httpclien:HttpClient,private router:Router){
    this.datos=new FormGroup({
      asunto: new FormControl('',Validators.required),
      msj: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
    swal.fire({
      allowOutsideClick: false,
      title: "Cargando..",
      text: "Un momento!",
    }).then((result)=>{
      
    });
    swal.showLoading();
    swal.close();
  }

  envio(){
    swal.fire({
      allowOutsideClick: false,
      title: "Cargando..",
      text: "Un momento!",
    }).then((result)=>{
      
    });
    swal.showLoading();
    
    let params={
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.msj     
      }
    console.log(params)
    
    this.httpclien.post('http://localhost:3000/envio',params).subscribe(resp=>{
   console.log(resp)
   this.router.navigate(['/home']);

    })
    this.router.navigate(['/home']);

  }
}
