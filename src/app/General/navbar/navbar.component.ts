import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/Interfaces/UsuariosLogin.interface';
import { AccesoService } from '../Servicios/acceso.service';
import { RolesService } from '../Servicios/roles.service';
import { UserService } from '../Servicios/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  info!: Usuario;

  userLogged=this.rolesService.getUserLog();
  public selectedVoice: SpeechSynthesisVoice | null;
	public voices: SpeechSynthesisVoice[];
  auxiliar4:number=1;
  renovar: Usuario={
    email:'texto',
    rol:3
  };
	admin: boolean=true;
  selectedRol$ = this.servicio.selectedRol$;
  constructor(private servicio:AccesoService ,private router:Router,public rolesService:RolesService, public userService:UserService) { 
    this.voices = [];
		this.selectedVoice = null;
		// this.text ="";
		// this.text2="";
		// this.text3="";
  }
 

  ngOnInit(): void {
    this.voices = speechSynthesis.getVoices();
		this.selectedVoice = ( this.voices[ 0 ] || null );
		
		
		if ( ! this.voices.length ) {
			speechSynthesis.addEventListener(
				"voiceschanged",
				() => {

					this.voices = speechSynthesis.getVoices();
					this.selectedVoice = ( this.voices[ 0 ] || null );
				}
			);
		}
  }

  funcion3(){
    
   this.auxiliar4=2;
   console.log("si entreee"+this,this.auxiliar4);

  }

  public speak() : void {
    let text1=document.getElementById('a1')?.innerHTML;
    let text2=document.getElementById('a2')?.innerHTML;
    let text3=document.getElementById('a3')?.innerHTML;
 
    let textf=text1+";"+text2+";"+text3;

      if ( ! this.selectedVoice || ! textf ) {
        return;
      }
      this.stop();
      console.log(this.selectedVoice);
      this.synthesizeSpeechFromText( this.selectedVoice, 1, textf );
    }
  
    public stop() : void {
      if ( speechSynthesis.speaking ) {
        speechSynthesis.cancel();
      }
    }
  
    private synthesizeSpeechFromText(voice: SpeechSynthesisVoice,rate: number,text: string):void {
      var utterance = new SpeechSynthesisUtterance( text );
      utterance.voice = this.selectedVoice;
      utterance.rate = 1;
      speechSynthesis.speak( utterance );
    }

    salir(){
      this.renovar.email="string"
      this.renovar.rol=3;
      console.log(this.renovar);
      this.servicio.setRol(this.renovar);
      this.userService.logout()
    .then(()=>{
      
      window.location.reload();
      
      this.auxiliar4=1;
      
        
    })
    .catch(error => console.log(error))
    }
    

}