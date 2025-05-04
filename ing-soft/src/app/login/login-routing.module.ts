import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';  // Asegúrate de importar LoginPage

const routes: Routes = [
  {
    path: '',
    component: LoginPage  // Utiliza LoginPage aquí
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}  // El nombre del módulo debe ser LoginPageRoutingModule
