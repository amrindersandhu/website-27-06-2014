		var firstClick = true;
  		$(document).ready(function(){
		    $('.signup_link').addClass('is_hidden');
  			function checkSignUpEmail(email) {
  				if($.trim(email).length == 0) return false;
				if (!$('#signup-source').val()) {
					if (/^([a-zA-Z0-9]+[-_\.]*)*\w@([a-zA-Z0-9]+\.)*(gmail|yahoo|hotmail|aol|rediff|rediffmail|ymail|rocketmail)(\.[a-zA-Z0-9_-]+)+$/i.test($.trim(email)))
						return false;
					else return /^[^@]+@[^@]+$/i.test($.trim(email));
				} else return true;
  			}
  			
  			function checkSignUpContactNumber(phone) {
				if($.trim(phone).length == 0) return false;
				return /^(\+?(\-* *[0-9])+)$/i.exec($.trim(phone));
			}
 			
  			$.ajax({
  			  url: loginpage,
  			  type: "POST",
  			  dataType: "json",
  			  data: "a=industries",
  			  cache: false,
  			  success: function(json){
  			  	  var sectorList = json.sector;
  			  	  var geoList = json.geo;
  	  				  	
  				  var signupsector = $('#signup-sector');	
  				  signupsector.append('<option selected disabled value="0">Select your Industry</option>');
  				  $.each(sectorList, function(){
  					  signupsector.append('<option value="'+this.k+'">'+this.t+'</option>');
  				  });
  				  
   				  var agencySector = $('#sectors');
  				  agencySector.append('<option selected disabled value="0">Select a sector you&rsquo;d be interested in</option>');
  				  $.each(sectorList, function(){
  				  	  if(this.k != "100"){
  				  		agencySector.append('<option value="'+this.k+'">'+this.t+'</option>');
  					  }
  				  });

  				  var userGeo = $('#signup-geo');
  				  userGeo.append('<option selected disabled value="0">Select your Geography</option>');
  				  $.each(geoList, function(){
  					  userGeo.append('<option value="'+this.k+'">'+this.t+'</option>');
  				  });
   				  signupsector.change(function(){		
  	  				//Check for agency sector
  	  	  			if (signupsector.find('option:selected').attr('value') == "100") {
  	  	  				agencySector.parent().css('display','block');
  	  	  			}
  	  	  			else {
  	  	  				agencySector.parent().css('display','none');
  	  	  			}		
  	  			  });  	  			  				  
  			  },
  			  error: function(){   				  
  			  }
  		});
  				
            function clear(){
                 $('#signup-form').reset();
            }
			   
  			$('#signup-form').submit(function(ev){
  				ev.preventDefault();
  				// To prevent multiple submits
  				if (!firstClick) {
  					return false;
  				}
  				var alert = $('.alert');
  				if (!$('#signup-name').val()) {
  					alert.text("Please enter your name");
  					alert.removeClass('is_hidden');
  		  			$('#signup-name').focus();
  					return false;
  				}
  				if (!checkSignUpEmail($('#signup-email').val())) {
  					alert.text("Please enter a valid corporate email address");
  					alert.removeClass('is_hidden');
  		  			$('#signup-email').focus();
 					return false;
  				}
  				if (!$('#signup-company').val()) {
  					alert.text("Please enter a company/product/brand name");
  					alert.removeClass('is_hidden');
  		  			$('#signup-company').focus();
  					return false;
  				}  				
				if (!checkSignUpContactNumber($('#signup-contact').val())) {
  					alert.text("Please specify a valid phone number");
					alert.removeClass('is_hidden');
  		  			$('#signup-contact').focus();
  					return false;
  				}
 				if ($('#signup-sector option:selected').attr('value') == '0') {
 					alert.text("Please choose a sector");
 					alert.removeClass('is_hidden');
					$('#signup-sector').focus();
 					return false;
 				} 				
 				if ($('#signup-sector option:selected').attr('value') == '100') {
 					if ($('#sectors option:selected').attr('value') == '0'){
 						alert.text("Please choose a sector of your interest");
 						alert.removeClass('is_hidden');
						$('#sectors').focus();
 						return false;
 					}
 				}  				
  				if ($('#signup-geo option:selected').attr('value') == '0'){
  					alert.text("Please choose a geography");
  					alert.removeClass('is_hidden');
					$('#signup-geo').focus();
 					return false;
  				}  				  
  				
 				$('body').css('cursor', 'wait');
 				firstClick = false;
				/* var vpartner = window.location.search.substring(1).split('=')[1]; */
				var vpartner = '';
 				var vname = encodeURIComponent($('#signup-name').val());
 				var vemail = encodeURIComponent($('#signup-email').val());
 	 			var vcompany = encodeURIComponent($('#signup-company').val());
 	 			var vcontact = encodeURIComponent($('#signup-contact').val());
 	 			var vsector = encodeURIComponent($('#signup-sector option:selected').text());
 	 			var vgeo = encodeURIComponent($('#signup-geo option:selected').text());
				
				var vsource = encodeURIComponent($('#signup-source').val());
				var vShiftSignupEmail = encodeURIComponent($('#shift-signup-email').val());
				var vtoken = encodeURIComponent($('#signup-token').val());
				
 	 			/* var vhearAbout = null; */
 	 			var vagencysector = null;
 	 			
 	 			/*
                if ($('#signup-heardFrom option:selected').attr('value') == '0') {
 	 				vhearAbout = '';
 	 			}
 	 			else{
 	 				vhearAbout = encodeURIComponent($('#signup-heardFrom option:selected').text());
 	 			}
 	 			 */
 	 			if ($('#sectors option:selected').attr('value') == '0') {
 	 				vagencysector = '';
 	 			}
 	 			else{
 	 				vagencysector = encodeURIComponent($('#sectors option:selected').text());
 	 			}
 	 			
 	 			if(vpartner==undefined){
 	 				vpartner='';
 	 			}
 				$.ajax({
 				  url: loginpage,
 				  type:"POST",
 				  dataType:"json",
 				  data:'a=signup&email='+vemail+'&name='+vname+'&company='+vcompany+'&contact='+vcontact+'&sector='+vsector+'&agencysector='+vagencysector+'&geo='+vgeo+'&source='+vsource+'&shiftSignupEmail='+vShiftSignupEmail+'&token='+vtoken+'&partner='+vpartner,
 				  cache: false,
 				  success: function(json){ 					  
 					  var msg = json.result; 	
 					  $('body').css('cursor', 'auto');
 					  firstClick = true;
 					  if (msg=='success') {
 						 window.location.href='thanks.php';
 					  } else {
 						  $('#signup-name').focus(); 	 					  
	 					  clear(); 	 					  
						  alert.text(msg);
						  alert.removeClass('is_hidden');
 					  } 					  
 				  },
 				  error: function() { 
 					 $('body').css('cursor', 'auto');
 					 firstClick = true;
 					 alert.text("An error occurred! Please try again.");
					 alert.removeClass('is_hidden');
 				  }
 				});		
  			});  			
			
  		});
		