requirejs.config({
  baseUrl : '/xtyle',
  shim: {
    'xtyle' : {
      deps : ['jquery']
    }
  },
  paths: {
    'text' : '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text',
    'modernizr' : '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
    'jquery' : '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min',
    'xtyle' : 'xtyle/js/xtyle',
    'widgets' : 'widgets'
  }
  , urlArgs: ""+(new Date()).getTime()  // REMOVE WHEN IN PRODUCTION - AVOID CACHE FOR DEVELOPMENT
});

// CALL XTYLE
require( [ 'xtyle' ], function ( xtyle ) {} );
