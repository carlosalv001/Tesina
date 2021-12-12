import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { AgregarNotaComponent } from './components/agregar-nota/agregar-nota.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MascotasComponent,
    InformacionComponent,
    AgregarNotaComponent,
    VeterinariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
