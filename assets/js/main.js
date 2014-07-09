// easy scrolling effect function

function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}

// HOMEPAGE       ----------------------------

// for starting animation to elements on page load
   $(function() {
     $('body').addClass('has_fade_in');
   });
   
   

// MENU OVERLAY   ----------------------------
   $('.menu_link').click(function () {	
      $(this).toggleClass('is_active');
		$('.menu_overlay').toggleClass('is_visible');
		$('body').toggleClass('fix-it'); // Position=fixed to stop backgroud of page to scroll
	});

// Logo Slideshow
   $(document).ready(function() {
   	if ( $(window).width() > 1200) {	
   		$('.agency_clients-wrap').bjqs({
   			'height' : 460,
   			'width' : 1100,
   			'animtype' : 'fade', 
   			'animduration' : 450, // how fast the animation are
   			'animspeed' : 3000, // the delay between each slide
   			'automatic' : false,
   			
   			'responsive' : true,
   			'centercontrols' : true,
   			'showmarkers' : true,
   			'keyboardnav' : true, // enable keyboard navigation
   			'hoverpause' : true
   		});   
   	}
   });
   

// INSIGHTS PAGE
 $(document).ready(function() {
   $('.tabs_list a').smoothScroll();
   $('.nav-to-top').smoothScroll();
   
   // Mobile nav smooth scroll
   $('.nav-m-link').smoothScroll();
 });
 
 $(window).scroll(function(){ 
     if ($(window).scrollTop() >= 1949){
          $('body').addClass('is_sticking');
     } else {
          $('body').removeClass('is_sticking');
          $('.tabs_list a').removeClass('is_active');    
          $('.nav-to-section-1').addClass('is_active');
         }
 });
 $(window).scroll(function(){ 
     if ($(window).scrollTop() >= 4900){
     	$('.tabs_list a').removeClass('is_active');
        $('.nav-to-section-2').addClass('is_active');
     }
     else {
     	$('.nav-to-section-1').addClass('is_active');
     	$('.nav-to-section-2').removeClass('is_active');
     }
 });
 $(window).scroll(function(){ 
     if ($(window).scrollTop() >= 8200){
     	$('.tabs_list a').removeClass('is_active');
        $('.nav-to-section-3').addClass('is_active');
     }
 });
 
   $('.tabs_list a').click(function(){
   	$('.tabs_list a.is_active').not(this).removeClass('is_active');
   	$(this).addClass('is_active');
   });

 $('.insight-link').click(function(){
     $('.eg_shown').not($(this).parent()).removeClass('eg_shown');
     $(this).parent().toggleClass('eg_shown');
  });

// Contact page map location animations
   $(window).scroll(function(){
       if  ($(window).scrollTop() >= 150){
            $('.ch_loc').addClass('is_shown');
       }
       if  ($(window).scrollTop() >= 180){
            $('.ny_loc').addClass('is_shown');
       }
       if  ($(window).scrollTop() >= 190){
            $('.sf_loc').addClass('is_shown');
       }
       if  ($(window).scrollTop() >= 220){
            $('.cn_loc').addClass('is_shown');
       }
   });

// Show tips on input focus
   $('.signup-form input').on('focus',function(){
       $('.signup-form input').parent('is_shown').removeClass('is_shown');
       $(this).parent().addClass('is_shown');
   });

// Show tips on select focus
   $('.signup-form select').on('focus',function(){
	   $('.signup-form select').parent('is_shown').removeClass('is_shown is_active');
       $(this).parent().addClass('is_shown');
   });
   $('.signup-form select').change(function() {
       $(this).parent().removeClass('is_shown');
       $(this).parent().addClass('is_active');
   });

// Contact page
   $('.contact-form input').on('focus',function(){
       $('.contact-form input').parent('is_shown').removeClass('is_shown');
       $(this).parent().addClass('is_shown');
   });
   $('.contact-form textarea').on('focus',function(){
       $('.contact-form textarea').parent('is_shown').removeClass('is_shown');
       $(this).parent().addClass('is_shown');
   });
   $('.contact-form select').on('focus',function(){
       $('.contact-form select').parent('is_shown').removeClass('is_shown is_active');
       $(this).parent().addClass('is_shown');
   });
   $('.contact-form select').change(function() {
       $(this).parent().removeClass('is_shown');
   	   $(this).parent().addClass('is_active');
   });

   $('input[type="email"]').on('keyup', function(){
       if ($(this).val().length > 0) {
	       $(this).addClass('is_invalid');
	   } else {
	       $(this).removeClass('is_invalid');
	   }
   });
   $('input[type="tel"]').on('keyup', function(){
       if ($(this).val().length > 0) {
	       $(this).addClass('is_invalid');
	   } else {
	       $(this).removeClass('is_invalid');
	   }
   });

// Score page table header stick
$(window).scroll(function(){ 
     if ($(window).scrollTop() >= 540){
          $('body.score').addClass('is_sticking');
     } else {
          $('body.score').removeClass('is_sticking');    
         }
 });

// BLOG 
// Show comments on click

$('.link-comments').click(function() {
	$('.article-comments').addClass('is_shown');
});
