import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/General/Servicios/roles.service';
import Registro from 'src/app/Interfaces/registro.interface';


@Component({
  selector: 'app-listam',
  templateUrl: './listam.component.html',
  styleUrls: ['./listam.component.css']
})
export class ListamComponent implements OnInit {
  array:Registro[]=[];
  array2:Registro[]=[];
  constructor(private rolesService:RolesService ) { }

  ngOnInit(): void {
    this.rolesService.getRoles().subscribe(registro => {
        this.array2=registro;
        console.log("jala"+registro)
      for(let i of this.array2){
        console.log("i es "+i.rol);
          if(i.rol === "2"){
              console.log("entro");
                this.array.push(i);
              
            }
        }
        console.log("aux"+this.array);
        
      })
      
      //
      
    }
    
    
  }
  



