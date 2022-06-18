import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public selectedVoice: SpeechSynthesisVoice | null;
	public text: string;
	public voices: SpeechSynthesisVoice[];
	public text2: string;
	public text3: string;
	admin: boolean=true;

  constructor( ) { 
    this.voices = [];
		this.selectedVoice = null;
		this.text = "";
		this.text2="";
		this.text3="";
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
  public speak() : void {
    let text1=document.getElementById('a1')?.innerHTML;
    let text2=document.getElementById('a2')?.innerHTML;
    let text3=document.getElementById('a3')?.innerHTML;
      let textf=text1+";"+text2+";"+text3;
    console.log("text="+textf);
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
    

}
