/*
 *  xtyle.js MIT Source Code
 *  Copyright (c) 2013 xchema
 *  release: 2013-31-01
 *  dependencies: RequireJS, jQuery
 *  website: http://xtyle.xchema.com
 *  repository: http://github.com/xchema/xtyle
 */
( function ( $ ){
  "use strict";
  // VARIABLES
  var self = this, // Reference to current object
      xtyle = function () {}, // Name-space
      x = xtyle.prototype;

  // CONFIGURATION
  x.version = {
    name : "xtyle",
    version : 0.1,
    stability : 1 // 1 - Stable, 2 - Unstable, 3 - Experimental
  };// x.version


  // MODEL
  x.model = {
    debug : true,
    modules : [ 'radio', 'checkbox' ],
    widgets : {}
  };//x.model

  // CONTROLLER
  x.controller = {
    _debug : function ( msg ) {
      if ( x.model.debug ) {
        console.log ( msg );
      }
    },
    _idGEN : function () {
      var d = new Date();
      return '#' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds();
    },
    _loadWidget : function ( widget, location ) {
      x.controller._loadCSS(location+".css");
      require( [ 'text!'+location+'.html', location ], function ( html ) {
        $("widget[name="+widget+"]").each(function(){
          var id = "#"+$(this).attr("id");
          $(id).html(html)[ widget ]();
        });
      });
      x.controller._debug( "Widget [ \"" + widget + "\" ] loaded!");
    },
    _loadModule : function ( module ) {
      x.controller['_'+module].init();
    },
    _loadCSS : function ( url ) {
      var link = document.createElement( 'link' );
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      document.getElementsByTagName( "head" )[ 0 ].appendChild( link );
    },
    _loadHTML : function( location, id ){
      require( ['text!'+location+'.html'], function(html){
        return html;
      });
    },
    _input : {
      resizeInput : function () {
        var elem = 'input[ xtyle=full ]';
        if( $( elem ).length ) {
          $( elem ).width( $( elem ).parent().width() - ( $( elem ).outerWidth() - $( elem ).width() ) );
        }
      },
      text : {},
      email : {},
      number : {},
      password : {}
    },
    _radio : {
      init : function(){
        // wrap input type radio with spans and hide it
        $('input[type=radio]').each(function(){
          $(this).css({'position':'absolute','opacity': 0}).wrap('<span id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" class="radio" />').wrap('<span />');
          if( $(this).is(':checked') ) $(this).parent().parent().addClass('active');
        });
        $('span.radio').on('click', function(){
          x.controller._radio.radioButton("#"+$(this).attr("id"));
        });
      },
      radioButton : function(elem){
        $('span[name='+$(elem).attr('name')+']').removeClass("active");
        if(!$('span'+elem).hasClass('active')){
          $('span'+elem).addClass('active');
          $('input'+elem).attr('checked', true);
        }//if
      }
    },
    _checkbox : {
      init : function(){
        // wrap input type checkbox with spans and hide it
        $('input[type=checkbox]').each(function(){
          $(this).css({'position':'absolute','opacity': 0}).wrap('<span id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" class="checkbox" />').wrap('<i class="icon-check" />');
          if( $(this).is(':checked') ) $(this).parent().parent().addClass('active');
        });
        $('span.checkbox').on('click', function(){
          x.controller._checkbox.checkBox("#"+$(this).attr("id"));
        });
      },
      checkBox : function(elem){
        if($('span'+elem).hasClass('active')){
          $('span'+elem).removeClass('active');
          $('input'+elem).attr('checked', false);
        }else{
          $('span'+elem).addClass('active');
          $('input'+elem).attr('checked', true);
        }//if_else
      }//checkbox()
    }//_checkbox
  };//x.controller

  // INIT
  x.init = function(){
      x.controller._debug("XTYLE JS LOADED");

      // VISUAL MODULES
      // modules is an array
      $.each( x.model.modules, function(i, module){ //i - index on array
         x.controller._loadModule ( module );
      });
      // CALL WIDGETS
      // widgets is an object
      if($("widget").length){
        $.each( x.model.widgets, function ( widget, location ) {
          if($("widget[name="+widget+"]").length){
            x.controller._loadWidget ( widget, location );
          }// if
        });// each
      }// if

      // Click on labels with attribute "for"
      $('label').on('click', function () {
        var type = $( 'input#' + $( this ).attr( 'for' ) ).attr( 'type' );
        switch( type ){
          case 'radio':
            x.controller._radio.radioButton( '#' + $( this ).attr( 'for' ) );
          break;
          case 'checkbox':
            x.controller._checkbox.checkBox( '#' + $( this ).attr( 'for' ) );
          break;  
        } // switch
      });
  }(); // auto execute

  window.xtyle = x; // Return global object

  //Expose xtyle for AMD modules like RequireJS
  if ( typeof define === "function" && define.amd ) {
    define( "xtyle", [], function () { return window.xtyle; } );
  }
})(jQuery);