import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './General/home/home.component';
import { FaqComponent } from './General/faq/faq.component';
import { ContactoComponent } from './General/contacto/contacto.component';
import { LoginComponent } from './General/login/login.component';
import { NavbarComponent } from './General/navbar/navbar.component';
import { RegistrarComponent } from './General/registrar/registrar.component';
import { AgregarVehiculoComponent } from './Administrador/agregar-vehiculo/agregar-vehiculo.component';
import { RentaVehiculoComponent } from './Administrador/renta-vehiculo/renta-vehiculo.component';
import { BajaVehiculoComponent } from './Administrador/baja-vehiculo/baja-vehiculo.component';
import { MantenimientoVehiculoComponent } from './Administrador/mantenimiento-vehiculo/mantenimiento-vehiculo.component';
import { AutosDisponiblesComponent } from './Administrador/autos-disponibles/autos-disponibles.component';
import { MiembrosActivosComponent } from './Administrador/miembros-activos/miembros-activos.component';
import { DetalleVehiculoComponent } from './Administrador/detalle-vehiculo/detalle-vehiculo.component';
import { GraficaComponent } from './Administrador/grafica/grafica.component';
import { RentaMiembroComponent } from './Miembros/renta-miembro/renta-miembro.component';
import { NavbarMiembroComponent } from './Miembros/navbar-miembro/navbar-miembro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FooterComponent } from './General/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { DisponibilidadComponent } from './Administrador/disponibilidad/disponibilidad.component';
import { ListamComponent } from './Administrador/listam/listam.component';
import { ConsultamanComponent } from './Administrador/consultaman/consultaman.component';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ContactoComponent,
    LoginComponent,
    NavbarComponent,
    RegistrarComponent,
    AgregarVehiculoComponent,
    RentaVehiculoComponent,
    BajaVehiculoComponent,
    MantenimientoVehiculoComponent,
    AutosDisponiblesComponent,
    MiembrosActivosComponent,
    DetalleVehiculoComponent,
    GraficaComponent,
    RentaMiembroComponent,
    NavbarMiembroComponent,
    FooterComponent,

    DisponibilidadComponent,
    ListamComponent,
    ConsultamanComponent,
    CustomPipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
