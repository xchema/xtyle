/*
 *  xtyle.js MIT Source Code
 *  Copyright (c) 2013 xchema
 *  release: 2013-31-01
 *  dependencies: jQuery
 *  website: http://xtyle.xchema.com
 *  repository: http://github.com/xchema/xtyle
 */

(function ($){

  "use strict";

  // VARIABLES
  var self = this, // Reference to current object
      xtyle = function () {}, // Name-space
      x = xtyle.prototype;

  // MODEL
  x.model = {
    version : "0.0.6"
  , stability : 1 // 1 - Stable, 2 - Unstable, 3 - Experimental
  , debug : true
  , modules : [ 'radio', 'checkbox' ] // HTML elements replaced by JavaScript
  };//x.model

  // CONTROLLER
  x.controller = {
    _help : function() {
      console.log ( "Version " + self.model.version.number );
    }
  , _debug : function ( msg ) {
      if ( x.model.debug ) {
        console.log ( msg );
      }
    }
  , _idGEN : function () {
      var d = new Date();
      return '#' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds();
    }
  , _loadModule : function ( module ) {
      x.controller['_'+module].init();
    }
  , _input : {
      resizeInput : function () {
        var elem = 'input[ xtyle=full ]';
        if( $( elem ).length ) {
          $( elem ).width( $( elem ).parent().width() - ( $( elem ).outerWidth() - $( elem ).width() ) );
        }
      },
      text : {}, // todo
      email : {}, // todo
      number : {}, // todo
      password : {} // todo
    } // _input
  , _radio : {
      init : function(){
        // wrap input type radio with spans and hide it     
        $('input[type=radio]').each(function(){
          console.log("here");
          $(this).css({'position':'absolute','opacity': 0}).wrap('<span id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" class="radio" />').wrap('<span />');
          if( $(this).is(':checked') ) $(this).parent().parent().addClass('active');
        });
        $('span.radio').on('click', function(){
          x.controller._radio.radioButton("#"+$(this).attr("id"));
        });
      } // init
    , radioButton : function(elem){
        $('span[name='+$(elem).attr('name')+']').removeClass("active");
        if(!$('span'+elem).hasClass('active')){
          $('span'+elem).addClass('active');
          $('input'+elem).attr('checked', true);
        }//if
      } // radioButton
    } // _radio
  , _checkbox : {
      init : function(){
        // wrap input type checkbox with spans and hide it
        $('input[type=checkbox]').each(function(){
          $(this).css({'position':'absolute','opacity': 0}).wrap('<span id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" class="checkbox" />').wrap('<i class="icon-check" />');
          if( $(this).is(':checked') ) $(this).parent().parent().addClass('active');
        }); // each
        $('span.checkbox').on('click', function(){
          x.controller._checkbox.checkBox("#"+$(this).attr("id"));
        }); // on
      }
    , checkBox : function(elem){
        if($('span'+elem).hasClass('active')){
          $('span'+elem).removeClass('active');
          $('input'+elem).attr('checked', false);
        }else{
          $('span'+elem).addClass('active');
          $('input'+elem).attr('checked', true);
        } // if_else
      } // checkbox()
    } // _checkbox
  }; // x.controller

  // INIT
  x.init = function(){
    // document ready
    $(function () {

      x.controller._debug("XTYLE JS LOADED");

      // verify if is in MOBILE view
      $("nav .logo").on("click", function(){
        if($( "nav a").css("display") === "none" ){
          $("nav a").addClass("nav-display");
        }else{
          $("nav a").removeClass("nav-display");
        } // if
      }); // on

      // VISUAL MODULES
      // modules is an array
      $.each( x.model.modules, function(i, module){ //i - index on array
         x.controller._loadModule ( module );
      });

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
      
    });// document ready
  }(); // auto execute

  window.xtyle = x.controller; // Return global object

  //Exposes xtyle for AMD modules like RequireJS
  if ( typeof define === "function" && define.amd ) {
    define( "xtyle", [], function () { return window.xtyle; } );
  }

})(jQuery);