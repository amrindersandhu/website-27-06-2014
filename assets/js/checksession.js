var homepage = '/app/';
var loginpage = '/app/login';
$(document).ready(function(){	
	//check if logged in
	function checkValidSession() {
		sid = getCookieValue("sid");
		if (sid && sid != '') {
			$.ajax({
			  url: loginpage,
			  type:"POST",
			  dataType:"text",
			  data:'a=valid&s='+sid,
			  cache: false,
			  success: function(txt){
				if (txt=='true') { $(".login_link").text("My Account"); }
			  },
			  error:function() { }
			  });
		}
	}

	function getCookieValue(name) {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				if (cookie.substring(0, name.length+1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(4));
					break;
				}
			}
		}
		return cookieValue;
	}

	checkValidSession();
	
	// Setting the active tab
	//var page = window.location.pathname.split("/",2)[1];
	//if (page.length > 0) {
    //    $("[id^=nav-main]").find('a[href*="'+page+'"]').addClass('active');
	//	  if (page == 'press.php' || page == 'events.php' || page == 'contact.php') {
    //        $("[id^=nav-main]").find('a[href*="about.php"]').addClass('active');
    //        $("[id^=nav-main]").find('.nav-about').find('a').removeClass('active');
    //        $("[id^=nav-main]").find('.nav-about').find('a[href*="'+page+'"]').addClass('active');
	//	  }		
	//}	
	
});