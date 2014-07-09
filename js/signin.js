var firstClick = true;
$(document).ready(function(){	
	
	function checkEmail(email) {
		if($.trim(email).length == 0) return false;
		return true;
		//return /^[^\@]+\@[^\@\.]+\.[^\@\.]+$/i.exec(email);
	}
	
	$('#signin-full-form').submit(function(ev){
		ev.preventDefault();
		// To prevent multiple submits
		if (!firstClick) {
			return false;
		}
		if (!checkEmail($('#signin-email').val())) {
			$('.alert').css("display", "block");
			return false;
		}
		if (!$('#signin-password').val()) {
			$('.alert').css("display", "block");
	  		return false;
		}		
		firstClick = false;
		$("body").css("cursor", "wait");
		$.ajax({
		  url: loginpage,	
		  type:"POST",
		  dataType:"text",
		  data:'a=login&u='+encodeURIComponent($('#signin-email').val())+'&p='+encodeURIComponent($('#signin-password').val())+'&r='+$('#remember-me').is(':checked'),
		  cache: false,
		  success: function(txt){
			  firstClick = true;
			  $("body").css("cursor", "auto");
			  str1 = "sessionid=";
			  if (txt.substring(0,str1.length)==str1) {
				  window.location = homepage;
			  } else {
				  $('.alert').css("display", "block");
			  }
		  },
		  error:function() { 
			  firstClick = true;
			  $("body").css("cursor", "auto");
			  $('.alert').css("display", "block");
		  }
		});
	});

	//capture enter key for login form
	$('#signin-email, #signin-password').bind('keypress',function (event){
		if (event.keyCode === 13){
			event.preventDefault();
			$('.btn').trigger('click');
		}
	});

});