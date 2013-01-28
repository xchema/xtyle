requirejs.config({
  paths: {
    'text' : '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text.js',
    'modernizr' : '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
    'jquery' : '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min',
    'widgets' : '../widgets'
  }
});

// CSS load method
function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

require(["modernizr", "jquery", "xtyle"], function($) {

});