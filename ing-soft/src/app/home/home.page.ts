import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreCompleto: string = '';

  ngOnInit() {
    const datos = localStorage.getItem('usuario');
    if (datos) {
      const usuario = JSON.parse(datos);
      this.nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
    }
  }
}
