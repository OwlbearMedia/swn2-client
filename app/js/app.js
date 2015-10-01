var Backbone = require('./lib/backbone.js');
var Mn = require('./lib/backbone.marionette.js');

// Create our Application
var app = new Mn.Application();

// Start history when our application is ready
app.on('start', function() {
  Backbone.history.start();
});

app.start();