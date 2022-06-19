import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != null) {
      if (args=='español'){
          return 'Correo';

      }
    }
    if (args != null) {
      if(args=='español2'){
        return 'Contraseña';
      }
    }
    
    
   
  }

}
