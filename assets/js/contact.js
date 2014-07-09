var firstClick = true;
$(document).ready(function(){
	
	function checkContactEmail(email) {
		if($.trim(email).length == 0) return false;
		return /^[^\@]+\@[^\@\.]+\.[^\@\.]+$/i.exec($.trim(email));
	}

	$('#contact-form').submit(function(ev) {
		ev.preventDefault();
		// To prevent multiple submits
		if (!firstClick) {
			return false;
		}
        if ($('#contact-sector option:selected').is('[disabled]')) {
			$('.alert-error').text('Please select the relevant team to contact');
			$('.alert-error').removeClass('is_hidden');
			$('#contact-sector').focus();
			return false;
		}
		if (!$('#contact-name').val()) {
			$('.alert-error').text('Please enter your name');
			$('.alert-error').removeClass('is_hidden');
			$('#contact-name').focus();
			return false;
		}
		if (!checkContactEmail($('#contact-email').val())) {
			$('.alert-error').text('Please enter a valid email address');
			$('.alert-error').removeClass('is_hidden');
			$('#contact-email').focus();
			return false;
		}
		if (!$('#contact-message').val()) {
			$('.alert-error').text('Please enter your message');
			$('.alert-error').removeClass('is_hidden');
			$('#contact-message').focus();
			return false;
		}
        $('.alert-error').addClass('is_hidden'); //if it reaches here meaning, user has filled up all the details.
		$('body').css("cursor", "wait");
		firstClick = false;
		var vemail = encodeURIComponent($('#contact-email').val());
		var vname = encodeURIComponent($('#contact-name').val());
		var vmessage = encodeURIComponent($('#contact-message').val());
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
				$('.alert-success').removeClass('is_hidden');
                $('#contact-form').reset();
			},
			error : function() {
				firstClick = true;
				$('body').css("cursor", "auto");
				$('.alert-error').text('An error occurred while sending your message! Please try again.');
				$('.alert-error').removeClass('is_hidden');
			}
		});
	});
});