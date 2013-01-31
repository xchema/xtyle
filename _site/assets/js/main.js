requirejs.config({
  baseUrl: "assets/js",
  paths: {
    'jquery' : '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min',
    'xtyle' : 'https://s3-us-west-1.amazonaws.com/xtyle/xtyle'
  }
});

require(["jquery", "xtyle"], function($) { });