describe('Registro de usuario', () => {
    it('debería registrar un usuario válido', () => {
      cy.visit('http://localhost:8100/registro');
  
      // Completa el formulario de registro
      cy.get('ion-input[label="Nombre"] input').type('Juan');
      cy.get('ion-input[label="Apellido"] input').type('Pérez');
      cy.get('ion-input[label="Correo"] input').type('juan@example.com');
      cy.get('ion-input[label="Teléfono"] input').type('123456789');
      cy.get('ion-input[label="Contraseña"] input').type('Clave123');
  
      // Clic en el botón de registro
      cy.contains('Registrar Usuario').scrollIntoView().click({ force: true });
  
      // Espera a que la URL cambie a /home (espera que la redirección ocurra)
      cy.url({ timeout: 5000 }).should('include', '/home');
  
      // Ahora que estamos en /home, verificamos el localStorage
      cy.window().then((win) => {
        const data = win.localStorage.getItem('usuario');
        expect(data).to.not.be.null;
  
        const usuario = JSON.parse(data || '{}');
  
        // Validamos los datos
        expect(usuario.nombre).to.equal('Juan');
        expect(usuario.apellido).to.equal('Pérez');
        expect(usuario.correo).to.equal('juan@example.com');
        expect(usuario.telefono).to.equal('123456789');
        expect(usuario.contrasena).to.equal('Clave123');
      });
    });
  });
  