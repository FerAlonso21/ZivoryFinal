import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './General/home/home.component';
import { LoginComponent } from './General/login/login.component';
import { RegistrarComponent } from './General/registrar/registrar.component';
import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NavbarComponent } from './Administrador/navbar/navbar.component';
import { NavbarMiembroComponent } from './Miembros/navbar-miembro/navbar-miembro.component';
import { AgregarVehiculoComponent } from './Administrador/agregar-vehiculo/agregar-vehiculo.component';
import { ContactoComponent } from './General/contacto/contacto.component';
import { FaqComponent } from './General/faq/faq.component';
import { GraficaComponent } from './Administrador/grafica/grafica.component';
import { BajaVehiculoComponent } from './Administrador/baja-vehiculo/baja-vehiculo.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'admin', component: NavbarComponent,...canActivate(() => redirectUnauthorizedTo(['/home']) ) },
  {path: 'home',component: HomeComponent},
  {path: 'registro',component: RegistrarComponent},
  {path: 'login',component: LoginComponent},
  {path: 'contacto',component: ContactoComponent},
  {path: 'faq',component: FaqComponent},
  {path: 'miembro',component: NavbarMiembroComponent},
  {path: 'alta',component: AgregarVehiculoComponent},
  {path: 'grafica',component: GraficaComponent},
  {path: 'baja',component: BajaVehiculoComponent},
  {path: 'contacto', component: ContactoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
