/*!
SlideJS
---------
author: 	Mariz Melo (MM) 2012
website:	http://www.emoriz.com
*/
define(['jquery', 'text!widgets/slideshow/slidejs/slide.html'], function ($, html) {
	
	$.fn.slidejs = function(){

		var $element = $(this).attr("id") !== undefined && $(this).attr("id") !== false ? "#"+$(this).attr("id") : ".slidejs"; //cache id for the slide div wrapper
		// console.log($element);
		var play;	//will hold the set-interval event

		$($element).html(html); // append HTML to target element
		
		//configuration variable
		var $config = {
			controls : 1,	//show or hide controls
			interval : "3",	//number of seconds before go to next slide
			speed : "400",	//speed of transitions
			slide : 1,	//start from this slide
			pauseoverimage : 1,	//pause when mouse is over slide images
			pauseovernavigation : 1,	//pause when mouse is over navigation buttons (after click on them)
			size : $($element+" .images").children("dd").length-1,
			width : $($element+" .viewport").width()
		};
		
		//show menu
		if($config.controls)
			$($element+" .navigation").css({"display":"block"});
		
		//increases size of image wrapper
		$($element+" .images").css({"width": (($config.size+1)*$config.width)+"px"});
		
		//GO TO SPECIFIC SLIDE
		var gotoSlide = function($goto){
			
			$config.slide = $goto;
			
			$($element+" .navigation dd").each(function(){
				$(this).removeClass("active");
			});
			
			$($element+" .navigation dd:nth-child("+($config.slide+1)+")").addClass("active");
			
			var move;
			if($config.slide <= $config.size)
				move = "-"+ $config.slide * $config.width + "px";
			else
				move = 0;
				
			$($element+" .images").animate({"margin-left": move }, $config.speed);
			
			
		};//gotoSlide()		
		
		
		//CREATES LOOP EVENT
		var playSlide = function(){
			 play = self.setInterval(function() {
			 	if($config.slide > $config.size){
					$config.slide = 0;}//go to start of slideshow
	    			gotoSlide($config.slide);
	    			$config.slide++;
			}, $config.interval*1000);
		};
		
		//INITIALIZE PLUGIN
		playSlide();
		
		//CONTROLS
		$($element+" .navigation dd").click(function(event){
			event.preventDefault();
			window.clearInterval(play);
			gotoSlide($(this).index());
		}).mouseleave(function(){
			window.clearInterval(play);
			playSlide();			
		});
		
		//PAUSE LOOP
		if($config.pauseoverimage){
			$(".images").mouseenter(function(event){
				window.clearInterval(play);
			}).mouseleave(function(){
				playSlide();
			});
		}//if

	}//fn.slidesjs
	
});