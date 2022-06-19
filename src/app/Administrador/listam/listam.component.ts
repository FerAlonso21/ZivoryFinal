import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/General/Servicios/roles.service';


@Component({
  selector: 'app-listam',
  templateUrl: './listam.component.html',
  styleUrls: ['./listam.component.css']
})
export class ListamComponent implements OnInit {

  constructor(private rolesService:RolesService ) { }

  ngOnInit(): void {
    this.rolesService.getRoles().subscribe(registro => {
        
      for(let i in registro){
        

        }
        
      })
      
      //
      
    }
    
    
  }
  



