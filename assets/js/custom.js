$(function() {
//      var pgurl = window.location.href.substr(window.location.href
// .lastIndexOf("/")+1);
//      $("ul.main-menu li a").each(function(){
//           if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
//           $(this).addClass("active");
//      })
// });



// count window height
$(document).ready(function() {
    
    if ( $(window).width() > 767){
        
        
        
	function setHeight() {
		windowHeight = $(window).innerHeight();
		$('body.home').css('height', windowHeight);
	};
	setHeight();
	  
	$(window).resize(function() {
		setHeight();
	});
  
  
	var totalHeight 	= $('body.home').height();  
  
	var headerHeight 	= $('body.home header#header').height(); 
	
	
	var footerrHeight	= $('footer#footer').height(); 

	var shoutPlayerHeight		= $('div#shout_and_player').height();
	
	
	var brandingHeight		= $('div#branding').height();

	
	var equilizerHeight = totalHeight - (headerHeight+footerrHeight+shoutPlayerHeight+brandingHeight);
	
	//alert(equilizerHeight);
	
	$("#equilizer").css({
		height: equilizerHeight + 'px'
	});
	
	
	
	$(".radio-box").css({
		'height': equilizerHeight + 'px',
		'width': equilizerHeight + 'px'
	});	
        
        
        
    }
    



$(".jp-play").click(function(){
    if ($('#jp_container_1').hasClass('jp-state-playing')) {
        $( ".radio-box" ).removeClass( "radio" );
    } else {
        $( ".radio-box" ).addClass( "radio" );
    }
});


	

});



});