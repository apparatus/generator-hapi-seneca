'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {

      var opts = {
        name: this.options.name || 'NAME_ME',
        transport: this.options.transport || 'http'
      };

      this.fs.copy(this.templatePath('_index.js'),
                   this.destinationPath('index.js'));
      this.fs.copyTpl(this.templatePath('_package.json'),
                  this.destinationPath('package.json'),
                  opts);

      this.fs.copy(this.templatePath('_static.js'),
                   this.destinationPath('static.js'));
      this.fs.copy(this.templatePath('_templates.js'),
                   this.destinationPath('templates.js'));
      this.fs.copy(this.templatePath('_proxy.js'),
                   this.destinationPath('proxy.js'));

      this.fs.copy(this.templatePath('test/_siteTest.js'),
                   this.destinationPath('test/siteTest.js'));

      this.fs.copy(this.templatePath('public/js/_jquery.min.js'),
                   this.destinationPath('public/js/jquery.min.js'));
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

      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap-theme.css'),
                   this.destinationPath('public/bootstrap/css/bootstrap-theme.css'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap-theme.css.map'),
                   this.destinationPath('public/bootstrap/css/bootstrap-theme.css.map'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap-theme.min.css'),
                   this.destinationPath('public/bootstrap/css/bootstrap-theme.min.css'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap-theme.min.css.map'),
                   this.destinationPath('public/bootstrap/css/bootstrap-theme.min.css.map'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap.css'),
                   this.destinationPath('public/bootstrap/css/bootstrap.css'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap.css.map'),
                   this.destinationPath('public/bootstrap/css/bootstrap.css.map'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap.min.css'),
                   this.destinationPath('public/bootstrap/css/bootstrap.min.css'));
      this.fs.copy(this.templatePath('public/bootstrap/css/bootstrap.min.css.map'),
                   this.destinationPath('public/bootstrap/css/bootstrap.min.css.map'));
      this.fs.copy(this.templatePath('public/bootstrap/fonts/glyphicons-halflings-regular.eot'),
                   this.destinationPath('public/bootstrap/fonts/glyphicons-halflings-regular.eot'));
      this.fs.copy(this.templatePath('public/bootstrap/fonts/glyphicons-halflings-regular.svg'),
                   this.destinationPath('public/bootstrap/fonts/glyphicons-halflings-regular.svg'));
      this.fs.copy(this.templatePath('public/bootstrap/fonts/glyphicons-halflings-regular.ttf'),
                   this.destinationPath('public/bootstrap/fonts/glyphicons-halflings-regular.ttf'));
      this.fs.copy(this.templatePath('public/bootstrap/fonts/glyphicons-halflings-regular.woff'),
                   this.destinationPath('public/bootstrap/fonts/glyphicons-halflings-regular.woff'));
      this.fs.copy(this.templatePath('public/bootstrap/fonts/glyphicons-halflings-regular.woff2'),
                   this.destinationPath('public/bootstrap/fonts/glyphicons-halflings-regular.woff2'));
      this.fs.copy(this.templatePath('public/bootstrap/js/bootstrap.min.js'),
                   this.destinationPath('public/bootstrap/js/bootstrap.min.js'));
      this.fs.copy(this.templatePath('public/bootstrap/js/npm.js'),
                   this.destinationPath('public/bootstrap/js/npm.js'));
    },

    projectfiles: function () {
      this.fs.copy(this.templatePath('_gitignore'),
                   this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('_Dockerfile'),
                   this.destinationPath('Dockerfile'));
      this.fs.copy(this.templatePath('_jshintrc'),
                   this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('_istanbul.yml'),
                   this.destinationPath('.istanbul.yml'));
    }
  },

  install: function () {
    this.npmInstall();
  }
});

