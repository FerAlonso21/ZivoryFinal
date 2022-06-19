import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if (args != null) {
      if (args=='Usuario') {
          return 'User';                       
        }else if (args=='Contraseña') {
          return 'Password';                       
        }
    
  }
  }

}
