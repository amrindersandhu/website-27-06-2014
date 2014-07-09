var firstClick = true;
$(document).ready(function() {
	
	function checkContactEmail(email) {
		if($.trim(email).length == 0) return false;
		return /^[^\@]+\@[^\@\.]+\.[^\@\.]+$/i.exec($.trim(email));
	}
	
	$('#forgot-form').submit(function(ev){
		ev.preventDefault();
		// To prevent multiple submits
		if (!firstClick) {
			return false;
		}
		if (!checkContactEmail($('#forgot-email').val())) {
			$('.alert').css('display', 'none');
			$('.alert-error').text('Please enter a valid email address!');
			$('.alert-error').css('display', 'block');
			return false;
		}
		firstClick = false;
		$("body").css("cursor", "wait");
		$.ajax({
			url: loginpage,
			type:"POST",
			dataType:"text",
			data:'a=forgotpwd&email='+encodeURIComponent($('#forgot-email').val()),
			cache: false,
			success: function(txt){
				firstClick = true;
				$("body").css("cursor", "auto");
				str1 = "result=";
				if (txt.substring(0,str1.length)==str1) {
					var res = txt.substring(str1.length,str1.length+1);
					if (res=='0') {
		  				$('#forgot-email').val('');
		  				$('.alert').css('display', 'none');
		  				$('.alert-success').css('display', 'block');
					} else if (res=='1') {
						$('.alert').css('display', 'none');
						$('.alert-error').text('Please enter a valid email address!');
						$('.alert-error').css('display', 'block');
					} else if (res=='5') {
						$('.alert').css('display', 'none');
						$('.alert-error').text("Hold up, you're currently using your Shift account to access Unmetric so you can't change your password here, sorry!");
						$('.alert-error').css('display', 'block');
					}
				} else {
					$('.alert').css('display', 'none');
					$('.alert-error').text("An error occurred when trying to send the email! Please try again.");
	  				$('.alert-error').css('display', 'block');
				}
			},
			error:function() { 
				firstClick = true;
				$("body").css("cursor", "auto");
				$('.alert').css('display', 'none');
				$('.alert-error').text("An error occurred when trying to send the email! Please try again.");
  				$('.alert-error').css('display', 'block');
			}
		});
	});
	//capture enter key for forgot pwd form
	$('#forgot-email').bind('keypress',function (event){
		if (event.keyCode === 13){
			event.preventDefault();
			$('.btn').trigger('click');
		}
	});
	
});