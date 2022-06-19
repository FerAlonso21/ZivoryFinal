import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { PrincipalService } from 'src/app/Administrador/Servicios/principal.service';
import Principal from 'src/app/Interfaces/Principal.interface';
import swal from 'sweetalert2';
@Component({
  selector: 'app-renta-miembro',
  templateUrl: './renta-miembro.component.html',
  styleUrls: ['./renta-miembro.component.css']
})
export class RentaMiembroComponent implements OnInit {
  principal:Principal[]=[];
  array:Principal[] = [];
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value:string='';

  constructor(private servicio:PrincipalService) { }

  funcion(info:Principal){
    this.elementType = NgxQrcodeElementTypes.URL;
    this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    const anio=info.anio;
    const color=info.color;
    this.value=info.url;
    const sucursal=info.sucursal;
    const tipo=info.tipo;
    const transmision=info.transmision;
    const union= "<div class='col'>"+
    "<ngx-qrcode [elementType]='"+this.elementType+"' [errorCorrectionLevel]='"+this.correctionLevel+"' [value]='"+this.value+"'"+
    "cssClass='bshadow'></ngx-qrcode>"
    console.log(union)
    swal.fire({
      title: '<strong><u>Detalles</u></strong>',
      
      html:
      '<div >'+
     
        '<h3>Sucursal: '+sucursal+'</h3>'+
        '<h3>Año: '+anio+'</h3>'+
        '<h3>Color: '+color+'</h3>'+
        '<h3>Transmision: '+transmision+'</h3>'+
        '<h3>Tipo: '+tipo+'</h3>'+'</div>',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> OK',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    
      
      
    })
  }

  ngOnInit(): void {
    
    this.servicio.getAutos().subscribe(principal =>{
      console.log(principal);
      this.principal=principal;
      
      for(let i of this.principal){
          
        if(i.disponibilidad=="true"){
            this.array.push(i);
        }
      }
    })
    console.log(this.array);
  }

}
