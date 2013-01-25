requirejs.config({
  paths: {
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

require(["jquery", "xtyle", "marizmelo"], function($) {

});