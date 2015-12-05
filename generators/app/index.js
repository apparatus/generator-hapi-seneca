'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {
      this.fs.copy(this.templatePath('api/_index.js'),
                   this.destinationPath('api/index.js'));
      this.fs.copy(this.templatePath('api/_package.json'),
                   this.destinationPath('api/package.json'));
      this.fs.copy(this.templatePath('api/_services.js'),
                   this.destinationPath('api/services.js'));
      this.fs.copy(this.templatePath('api/_static.js'),
                   this.destinationPath('api/static.js'));
      this.fs.copy(this.templatePath('api/_templates.js'),
                   this.destinationPath('api/templates.js'));
      this.fs.copy(this.templatePath('api/test/_siteTest.js'),
                   this.destinationPath('api/test/siteTest.js'));


      this.fs.copy(this.templatePath('public/js/_main.js'),
                   this.destinationPath('public/js/main.js'));
      this.fs.copy(this.templatePath('public/img/fuge-logo.png'),
                   this.destinationPath('public/img/fuge-logo.png'));
      this.fs.copy(this.templatePath('public/css/_style.css'),
                   this.destinationPath('public/css/style.css'));
      this.fs.copy(this.templatePath('public/views/helpers/_basic.js'),
                   this.destinationPath('public/views/helpers/basic.js'));
      this.fs.copy(this.templatePath('public/views/_basic.html'),
                   this.destinationPath('public/views/basic.html'));
    },

    projectfiles: function () {

      this.fs.copy(this.templatePath('public/_bower.json'),
                   this.destinationPath('public/bower.json'));
      this.fs.copy(this.templatePath('_gitignore'),
                   this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('_Dockerfile'),
                   this.destinationPath('Dockerfile'));
      this.fs.copy(this.templatePath('_jshintrc'),
                   this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('api/_istanbul.yml'),
                   this.destinationPath('api/.istanbul.yml'));
    }
  },

  install: function () {
    var that = this;

    process.chdir('api');
    this.npmInstall();
    setTimeout(function() {
      process.chdir('../public');
      that.bowerInstall();
    }, 1000);
  }
});

