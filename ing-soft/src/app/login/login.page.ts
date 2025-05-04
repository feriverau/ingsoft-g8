import { Component } from '@angular/core';

@Component({
  selector: 'app-login',  // Asegúrate de que el selector sea correcto
  templateUrl: 'login.page.html',  // Apunta a login.page.html
  styleUrls: ['login.page.scss'],
  standalone: false,
})
export class LoginPage {  // El nombre de la clase debe ser LoginPage
  constructor() {}
}
