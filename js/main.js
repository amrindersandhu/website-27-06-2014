// Full background Image Fix

$(window).load(function() {    
	var theWindow        = $(window),
	    $bg              = $(".bg-image"),
	    aspectRatio      = $bg.width() / $bg.height();	
	function resizeBg() {
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bg-height');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bg-width');
		}				
	}
	theWindow.resize(resizeBg).trigger("resize");
});


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

// HOMEPAGE //

//for starting animation to elements on page load
$(function() {
  $('body').addClass('has_fade_in');
});



// INSIGHTS PAGE
 $(document).ready(function() {
   $('.nav-insight a').smoothScroll();
   $('.nav-to-top').smoothScroll();
   
   // Mobile nav smooth scroll
   $('.nav-m-link').smoothScroll();
 });
 
 $(window).scroll(function(){ 
     if ($(window).scrollTop() >= 485){
          $('body').addClass('is_sticking');
     } else {
          $('body').removeClass('is_sticking');
          $('.nav-insight a').removeClass('active');    
          $('.nav-to-section-1').addClass('active');
         }
 });
 $(window).scroll(function(){ 
     if ($(window).scrollTop() >= 1080){
     	$('.nav-insight a').removeClass('active');
        $('.nav-to-section-2').addClass('active');
     }
     else {
     	$('.nav-to-section-1').addClass('active');
     	$('.nav-to-section-2').removeClass('active');
     }
 });
 $(window).scroll(function(){ 
     if ($(window).scrollTop() >= 1680){
     	$('.nav-insight a').removeClass('active');
        $('.nav-to-section-3').addClass('active');
     }
 });
 
$('.nav-insight a').click(function(){
	$('.nav-insight a.active').not(this).removeClass('active');
	$(this).addClass('active');
});

 $('.insight-link').click(function(){
     $('.eg_shown').not($(this).parent()).removeClass('eg_shown');
     $(this).parent().toggleClass('eg_shown');
  });

// Contact page map location animations
$(window).scroll(function(){
    if  ($(window).scrollTop() >= 150){
         $('.ch-loc').addClass('is_shown');
    }
    if  ($(window).scrollTop() >= 180){
         $('.ny-loc').addClass('is_shown');
    }
    if  ($(window).scrollTop() >= 190){
         $('.sf-loc').addClass('is_shown');
    }
    if  ($(window).scrollTop() >= 220){
         $('.cn-loc').addClass('is_shown');
    }
    if  ($(window).scrollTop() >= 230){
         $('.co-loc').addClass('is_shown');
    }
});

// Show tips on input focus
$('.signup-form input').on('focus',function(){
    $('.signup-form .is_shown').not($(this).parent()).removeClass('is_shown');
    $(this).parent().addClass('is_shown');
});

// Show tips on select focus
$('.signup-form select').on('focus',function(){
    $('.signup-form .is_shown').not($(this).parent()).removeClass('is_shown');
    $(this).parent().addClass('is_shown');
});

$('.signup-form select').click(function() {
  $('select').change();
});
$('select').change(function() {
	$(this).addClass('is_active');
});
// Contact page
$('.contact-form input').on('focus',function(){
    $('.contact-form .is_shown').not($(this).parent()).removeClass('is_shown');
    $(this).parent().addClass('is_shown');
});
$('.contact-form select').on('focus',function(){
    $('.contact-form .is_shown').not($(this).parent()).removeClass('is_shown');
    $(this).parent().addClass('is_shown');
});
$('.contact-form select').click(function() {
  $('select').change();
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

// Logo Slideshow
$(document).ready(function() {
	if ( $(window).width() > 1200) {	
		$('.clients-list-wrap').bjqs({
			'height' : 110,
			'width' : 1200,
			'animtype' : 'fade', 
			'animduration' : 450, // how fast the animation are
			'animspeed' : 3000, // the delay between each slide
			'automatic' : true,
			'responsive' : true,
			'showmarkers' : false,
			'keyboardnav' : true, // enable keyboard navigation
			'hoverpause' : true
		});   
	}
});
 
 /* Placeholders.js v2.1.0 */
!function(a){"use strict";function b(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function c(a,b){var c,d;for(c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function d(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function e(a,b){try{return a.type=b,!0}catch(c){return!1}}a.Placeholders={Utils:{addEventListener:b,inArray:c,moveCaret:d,changeType:e}}}(this),function(a){"use strict";function b(){}function c(a){var b;return a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)?(a.setAttribute(H,"false"),a.value="",a.className=a.className.replace(F,""),b=a.getAttribute(I),b&&(a.type=b),!0):!1}function d(a){var b,c=a.getAttribute(G);return""===a.value&&c?(a.setAttribute(H,"true"),a.value=c,a.className+=" "+E,b=a.getAttribute(I),b?a.type="text":"password"===a.type&&R.changeType(a,"text")&&a.setAttribute(I,"password"),!0):!1}function e(a,b){var c,d,e,f,g;if(a&&a.getAttribute(G))b(a);else for(c=a?a.getElementsByTagName("input"):o,d=a?a.getElementsByTagName("textarea"):p,g=0,f=c.length+d.length;f>g;g++)e=g<c.length?c[g]:d[g-c.length],b(e)}function f(a){e(a,c)}function g(a){e(a,d)}function h(a){return function(){q&&a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)?R.moveCaret(a,0):c(a)}}function i(a){return function(){d(a)}}function j(a){return function(b){return s=a.value,"true"===a.getAttribute(H)&&s===a.getAttribute(G)&&R.inArray(C,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function k(a){return function(){var b;"true"===a.getAttribute(H)&&a.value!==s&&(a.className=a.className.replace(F,""),a.value=a.value.replace(a.getAttribute(G),""),a.setAttribute(H,!1),b=a.getAttribute(I),b&&(a.type=b)),""===a.value&&(a.blur(),R.moveCaret(a,0))}}function l(a){return function(){a===document.activeElement&&a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)&&R.moveCaret(a,0)}}function m(a){return function(){f(a)}}function n(a){a.form&&(x=a.form,x.getAttribute(J)||(R.addEventListener(x,"submit",m(x)),x.setAttribute(J,"true"))),R.addEventListener(a,"focus",h(a)),R.addEventListener(a,"blur",i(a)),q&&(R.addEventListener(a,"keydown",j(a)),R.addEventListener(a,"keyup",k(a)),R.addEventListener(a,"click",l(a))),a.setAttribute(K,"true"),a.setAttribute(G,v),d(a)}var o,p,q,r,s,t,u,v,w,x,y,z,A,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],D="#ccc",E="placeholdersjs",F=new RegExp("(?:^|\\s)"+E+"(?!\\S)"),G="data-placeholder-value",H="data-placeholder-active",I="data-placeholder-type",J="data-placeholder-submit",K="data-placeholder-bound",L="data-placeholder-focus",M="data-placeholder-live",N=document.createElement("input"),O=document.getElementsByTagName("head")[0],P=document.documentElement,Q=a.Placeholders,R=Q.Utils;if(Q.nativeSupport=void 0!==N.placeholder,!Q.nativeSupport){for(o=document.getElementsByTagName("input"),p=document.getElementsByTagName("textarea"),q="false"===P.getAttribute(L),r="false"!==P.getAttribute(M),t=document.createElement("style"),t.type="text/css",u=document.createTextNode("."+E+" { color:"+D+"; }"),t.styleSheet?t.styleSheet.cssText=u.nodeValue:t.appendChild(u),O.insertBefore(t,O.firstChild),A=0,z=o.length+p.length;z>A;A++)y=A<o.length?o[A]:p[A-o.length],v=y.attributes.placeholder,v&&(v=v.nodeValue,v&&R.inArray(B,y.type)&&n(y));w=setInterval(function(){for(A=0,z=o.length+p.length;z>A;A++)y=A<o.length?o[A]:p[A-o.length],v=y.attributes.placeholder,v&&(v=v.nodeValue,v&&R.inArray(B,y.type)&&(y.getAttribute(K)||n(y),(v!==y.getAttribute(G)||"password"===y.type&&!y.getAttribute(I))&&("password"===y.type&&!y.getAttribute(I)&&R.changeType(y,"text")&&y.setAttribute(I,"password"),y.value===y.getAttribute(G)&&(y.value=v),y.setAttribute(G,v))));r||clearInterval(w)},100)}Q.disable=Q.nativeSupport?b:f,Q.enable=Q.nativeSupport?b:g}(this);