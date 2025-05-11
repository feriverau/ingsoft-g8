import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    contrasena: '',
  };

  constructor(private toastController: ToastController, private router: Router) {}

  async registrarUsuario() {
    const { nombre, apellido, correo, telefono, contrasena } = this.usuario;

    if (!nombre || !apellido || !correo || !telefono || !contrasena) {
      this.mostrarToast('Por favor, completa todos los campos.');
      return;
    }

    if (!this.validarCorreo(correo)) {
      this.mostrarToast('El correo no tiene un formato válido.');
      return;
    }

    if (!this.validarTelefono(telefono)) {
      this.mostrarToast('El teléfono debe tener solo números y entre 7 y 15 dígitos.');
      return;
    }

    if (!this.validarContrasena(contrasena)) {
      this.mostrarToast(
        'La contraseña debe tener entre 4 y 12 caracteres, al menos una mayúscula y un número.'
      );
      return;
    }

    // Verificación de los datos antes de guardarlos
    console.log('Guardando usuario:', this.usuario);

    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.mostrarToast('Usuario registrado correctamente.');

    // Redirige a la página de inicio
    this.router.navigate(['/home']);
  }

  validarCorreo(correo: string): boolean {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }

  validarTelefono(telefono: string): boolean {
    const regexTelefono = /^\d{7,15}$/;
    return regexTelefono.test(telefono);
  }

  validarContrasena(contrasena: string): boolean {
    const regexContrasena = /^(?=.*[A-Z])(?=.*\d).{4,12}$/;
    return regexContrasena.test(contrasena);
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
