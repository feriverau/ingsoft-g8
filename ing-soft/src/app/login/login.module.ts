import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Asegúrate de importar IonicModule
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';  // Asegúrate de que la clase sea LoginPage

import { LoginPageRoutingModule } from './login-routing.module';  // Rutas para login

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Asegúrate de incluir IonicModule
    LoginPageRoutingModule  // Rutas específicas para login
  ],
  declarations: [LoginPage]  // Declarar LoginPage
})
export class LoginPageModule {}  // El nombre del módulo debe ser LoginPageModule
