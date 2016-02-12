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
      this.fs.copyTpl(this.templatePath('_services.js'),
                  this.destinationPath('services.js'),
                  opts);
      this.fs.copy(this.templatePath('_static.js'),
                   this.destinationPath('static.js'));
      this.fs.copy(this.templatePath('_templates.js'),
                   this.destinationPath('templates.js'));
      this.fs.copy(this.templatePath('test/_siteTest.js'),
                   this.destinationPath('test/siteTest.js'));

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
