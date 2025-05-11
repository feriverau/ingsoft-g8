import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { ToastController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let routerSpy: jasmine.SpyObj<Router>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;

  beforeEach(async () => {
    // Crear espías para Router y ToastController
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);
    const toastSpy = jasmine.createSpyObj('HTMLIonToastElement', ['present']);
    toastControllerSpy.create.and.returnValue(Promise.resolve(toastSpy));

    // Configuración de TestBed para un componente standalone
    await TestBed.configureTestingModule({
      imports: [LoginPage, IonicModule, FormsModule, CommonModule],  // Incluir LoginPage en imports (no en declarations)
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ToastController, useValue: toastControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();  // Limpia el almacenamiento después de cada prueba
  });

  it('debería crearse el componente para el entorno de pruebas', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar sesión con credenciales correctas', fakeAsync(() => {
    const mockUsuario = {
      correo: 'juan@example.com',
      contrasena: 'Clave123',
    };
    localStorage.setItem('usuario', JSON.stringify(mockUsuario));

    component.correo = 'juan@example.com';
    component.contrasena = 'Clave123';
    component.login();
    tick();  // Avanza el ciclo de pruebas para simular la ejecución asincrónica

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  }));

  it('debería mostrar un error si la contraseña es incorrecta', fakeAsync(() => {
    const mockUsuario = {
      correo: 'juan@example.com',
      contrasena: 'Clave123',
    };
    localStorage.setItem('usuario', JSON.stringify(mockUsuario));

    component.correo = 'juan@example.com';
    component.contrasena = 'malclave';  // Contraseña incorrecta
    component.login();
    tick();  // Simula el paso del tiempo

    expect(toastControllerSpy.create).toHaveBeenCalled();  // Verifica que se haya mostrado un toast
  }));

  it('debería mostrar un mensaje si no hay usuarios registrados', fakeAsync(() => {
    component.correo = 'algo@example.com';
    component.contrasena = 'algo';
    component.login();
    tick();

    expect(toastControllerSpy.create).toHaveBeenCalled();  // Verifica que se muestre un toast de error
  }));

  it('debería redirigir a registro', () => {
    component.irARegistro();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/registro']);  // Verifica que se haya redirigido al registro
  });
});
