var firstClick = true;
$(document).ready(function(){
	
	function checkContactEmail(email) {
		if($.trim(email).length == 0) return false;
		return /^[^\@]+\@[^\@\.]+\.[^\@\.]+$/i.exec($.trim(email));
	}

	$('.contact-form').submit(function(ev) {
		ev.preventDefault();
		// To prevent multiple submits
		if (!firstClick) {
			return false;
		}
		$('.contact-form').find('input').removeClass('has_error');
		$('.contact-form').find('textarea').removeClass('has_error');
		$('.contact-form').find('select').removeClass('has_error');
        if ($('#contact-sector option:selected').is('[disabled]')) {
			//$('.alert').css('display', 'none');
			$('.alert-error').text('Please select the relevant team to contact');
			$('.alert-error').css('display', 'block');
			$('#contact-sector').focus();
			$('#contact-sector').addClass('has_error');
			return false;
		}
		if (!$('.name').val()) {
			//$('.alert').css('display', 'none');
			$('.alert-error').text('Please enter your name');
			$('.alert-error').css('display', 'block');
			$('.name').focus();
			$('.name').addClass('has_error');
			return false;
		}
		if (!checkContactEmail($('.email').val())) {
			//$('.alert').css('display', 'none');
			$('.alert-error').text('Please enter a valid email address');
			$('.alert-error').css('display', 'block');
			$('.email').focus();
			$('.email').addClass('has_error');
			return false;
		}
		if (!$('.message').val()) {
			//$('.alert').css('display', 'none');
			$('.alert-error').text('Please enter your message');
			$('.alert-error').css('display', 'block');
			$('.message').focus();
			$('.message').addClass('has_error');
			return false;
		}
        $('.alert-error').css('display', 'none'); //if it reaches here meaning, user has filled up all the details.
		$('body').css("cursor", "wait");
		firstClick = false;
		var vemail = encodeURIComponent($('.email').val());
		var vname = encodeURIComponent($('.name').val());
		var vmessage = encodeURIComponent($('.message').val());
		var vsector = encodeURIComponent($('#contact-sector option:selected').text());
		var msg = vmessage + "\nMessage from: " + vname + '\nMessage to: ' + vsector;
		$.ajax({
			url : loginpage,
			type : "POST",
			dataType : "text",
			data : 'a=contactus&email=' + vemail + '&message=' + msg,
			cache : false,
			success : function(txt) {
				firstClick = true;
				$('body').css("cursor", "auto");
				//$('.alert').css('display', 'none');
				$('.alert-success').css('display', 'block');
                /*
				$('.name').val('');
				$('.email').val('');
				$('.message').val('');
                 document.getElementById('contact-sector').selectedIndex = 0;
				*/
                $('.contact-form')[0].reset();
			},
			error : function() {
				firstClick = true;
				$('body').css("cursor", "auto");
				//$('.alert').css('display', 'none');
				$('.alert-error').text('An error occurred while sending your message! Please try again.');
				$('.alert-error').css('display', 'block');
			}
		});
	});
});