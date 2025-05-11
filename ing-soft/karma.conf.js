// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'), // Utiliza el lanzador de Chrome
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Puedes agregar configuraciones de Jasmine aquí
        // Por ejemplo, puedes desactivar la ejecución aleatoria con `random: false`
        // o establecer una semilla específica con `seed: 4321`
      },
      clearContext: false // Deja visible la salida de Jasmine Spec Runner en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true // Elimina los rastros duplicados
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'], // Los reportes que se mostrarán
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // Usa Chrome como navegador
    singleRun: false,
    restartOnFileChange: true
  });
};
