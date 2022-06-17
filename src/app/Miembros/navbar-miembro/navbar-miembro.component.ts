import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signOut } from '@firebase/auth';
import { UserService } from 'src/app/General/Servicios/user.service';

@Component({
  selector: 'app-navbar-miembro',
  templateUrl: './navbar-miembro.component.html',
  styleUrls: ['./navbar-miembro.component.css']
})
export class NavbarMiembroComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/registro']);
    })
    .catch(error => console.log(error));
    
  }
}
