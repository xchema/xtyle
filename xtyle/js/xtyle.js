$(function(){

    var xtyle = function(){}; //namespace
    var x = xtyle.prototype;
    x.model = {
        modules : ['radio','checkbox','select']
    };//x.model
    x.controller = {
        _input : {
            resizeInput : function(){
                var elem = "input[xtyle=full]";
                if($(elem).length){
                    $(elem).width($(elem).parent().width() - ( $(elem).outerWidth() - $(elem).width() ) );
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
                $("input[type=radio]").each(function(){
                    $(this).css({"position":"absolute","opacity":"0"}).wrap('<span id="'+$(this).attr('id')+'" name="'+$(this).attr('name')+'" class="radio" />').wrap('<span />');
                });//each()
                $("span.radio").on('click', function(){
                    x.controller._radio.radioButton("#"+$(this).attr("id"));
                });//on()
            },
            radioButton : function(elem){
               $("span[name="+$(elem).attr("name")+"]").removeClass("active");
                if(!$("span"+elem).hasClass("active")){
                    $("span"+elem).addClass("active");
                }//if
            }
        },
        _checkbox : {
            init : function(){
                $("span.checkbox").on('click', function(){
                    x.controller._checkbox.checkBox($(this));
                });
            },
            checkBox : function(elem){
                elem.hasClass("active") ? elem.removeClass("active") : elem.addClass("active");
            }
        }
    }//x.controller
    x.view = {
        events : function(){
            //INITIALIZE MODULES
            if($.inArray("radio", x.model.modules) == 0){
                x.controller._radio.init();
            }//if
            if($.inArray("checkbox", x.model.modules) == 0){
                x.controller._checkbox.init();
            }//if

            //CLICK ON LABELS WITH ATTRIBUTE "FOR"
            $("label").on("click", function(){
                var type = $("input#"+$(this).attr("for")).attr("type");
                switch(type){
                    case "radio":
                      x.controller._radio.radioButton("#"+$(this).attr("for"));
                      break;  
                }//switch
            });

            //INPUT FULL WIDTH
            x.controller._input.resizeInput();
            $(window).resize(function() {
                x.controller._input.resizeInput();
            });
        }()
    };//x.view    
});