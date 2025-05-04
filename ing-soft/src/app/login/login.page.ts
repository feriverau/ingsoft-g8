import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  async login() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const datos = JSON.parse(usuario);
      if (this.correo === datos.correo && this.contrasena === datos.contrasena) {
        this.router.navigate(['/home']);
      } else {
        this.mostrarToast('Correo o contraseña incorrectos.');
      }
    } else {
      this.mostrarToast('No hay usuarios registrados.');
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
