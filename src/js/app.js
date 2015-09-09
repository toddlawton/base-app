/**
 * Application Bootstrap
 */

var app = app || {};

$(document).ready(function(){  
    // app.router = new app.Router();
    // Backbone.history.start();

    Tabletop.init( { key: app.configs.databaseKey,
                             callback: function(data, tabletop) { console.log(data) },
                             wanted: [ "Cats", "Courses" ],
                             debug: true } )
    
    // new app.views.appView();
});