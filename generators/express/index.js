'use strict';
var Generator = require('yeoman-generator');
var path = require('path');
var askName = require('inquirer-npm-name');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  initializing() {
    this.props = {};
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sublime ' + chalk.red('Flipp Express') + ' generator!'
    ));

    return askName({
      name: 'name',
      message: 'Your generator name',
      default: path.basename(process.cwd())
    }, this)
    .then(props => {
      this.props.name = props.name;
    });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('./**/*'),
      this.destinationPath('./'),
      {name: this.props.name}
    );
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
