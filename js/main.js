requirejs.config({
  baseUrl : 'xtyle',
  shim: {
    'xtyle' : {
      deps : ['jquery']
    }
  },
  paths: {
    'text' : '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text.js',
    'modernizr' : '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
    'jquery' : '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min',
    'xtyle' : 'js/xtyle',
    'widgets' : '../widgets'
  }
});

require(["xtyle"], function() {} );