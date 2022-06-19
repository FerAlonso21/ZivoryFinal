import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

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

}
