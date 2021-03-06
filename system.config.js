;(function() {
  'use strict';

  // map tells the System loader where to look for things
  var map = {
    'rxjs':       '../../../node_modules/rxjs',
    '@angular':   '../../../node_modules/@angular',
    "@angular/core": "../../../node_modules/@angular/core/index.js",
    "@angular/common": "../../../node_modules/@angular/common/index.js",
    "@angular/compiler": "../../../node_modules/@angular/compiler/index.js",
    "@angular/platform-browser": "../../../node_modules/@angular/platform-browser/index.js",
    "@angular/platform-browser-dynamic": "../../../node_modules/@angular/platform-browser-dynamic/index.js",
    "@angular/router-deprecated": "../../../node_modules/@angular/router-deprecated/index.js",
    "@angular/router": "../../../node_modules/@angular/router/@angular/index.js"
  };
  
  var packages = {
    app: {
      main: './main.js',
      defaultExtension: 'js'
    }
  };
  
  var config = {
    defaultJSExtensions: true, 
    map: map,
    packages: packages
  };
  
  System.config(config);
  
})();