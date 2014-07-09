		var firstClick = true;
  		$(document).ready(function(){
  			function checkSignUpEmail(email) {
  				if($.trim(email).length == 0) return false;
				if (!$('#signup-source').val()) {
	  				if (/^([a-zA-Z0-9]+[-_\.]*)*\w@([a-zA-Z0-9]+\.)*(gmail|yahoo|hotmail|aol|rediff|rediffmail|ymail)(\.[a-zA-Z0-9_-]+)+$/i.test($.trim(email)))
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
  				  signupsector.append('<option selected disabled value="0">Sector of Interest</option>');
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
  				  userGeo.append('<option selected disabled value="0">Geography</option>');
  				  $.each(geoList, function(){
  					  userGeo.append('<option value="'+this.k+'">'+this.t+'</option>');
  				  });
  				  /* Commented out heardfrom
  				  var heardFrom = $('#signup-heardFrom');  				
  				  heardFrom.append('<option selected disabled value="0">How did you hear about us? (optional)</option>');
  				  heardFrom.append('<option value="1">Conference</option>');
  				  heardFrom.append('<option value="2">Employee Referral</option>');
  				  heardFrom.append('<option value="3">Press</a></option>');
  				  heardFrom.append('<option value="4">Social Media</option>');
  				  heardFrom.append('<option value="5">Search Engine</option>');
  				  heardFrom.append('<option value="6">Others</a></option>');
  				  */
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
                /*
                  document.getElementById('signup-company').value = '';
                  document.getElementById('signup-name').value = '';
                  document.getElementById('signup-contact').value = '';
                  document.getElementById('sectors').selectedIndex = 0;
                  document.getElementById('signup-sector').selectedIndex = 0;
                  document.getElementById('signup-geo').selectedIndex = 0;
                  document.getElementById('signup-heardFrom').selectedIndex = 0;
                  */
                $('.signup-form')[0].reset();
            }
			   
  			$('.signup-form').submit(function(ev){
  				ev.preventDefault();
  				// To prevent multiple submits
  				if (!firstClick) {
  					return false;
  				}
  				var alert = $('.alert');
				$('.signup-form').find('input').removeClass('has_error');
				$('.signup-form').find('select').removeClass('has_error');
  				if (!$('#signup-name').val()) {
  					alert.text("Please enter your name");
  					alert.css('display', 'block');
  		  			$('#signup-name').focus();
					$('#signup-name').addClass('has_error');
  					return false;
  				}
  				if (!checkSignUpEmail($('#signup-email').val())) {
  					alert.text("Please enter a valid corporate email address");
  					alert.css('display', 'block');
  		  			$('#signup-email').focus();
					$('#signup-email').addClass('has_error');
 					return false;
  				}
  				if (!$('#signup-company').val()) {
  					alert.text("Please enter a company/product/brand name");
  					alert.css('display', 'block');
  		  			$('#signup-company').focus();
					$('#signup-company').addClass('has_error');
  					return false;
  				}  				
				if (!checkSignUpContactNumber($('#signup-contact').val())) {
  					alert.text("Please specify a valid phone number");
  					alert.css('display', 'block');
  		  			$('#signup-contact').focus();
					$('#signup-contact').addClass('has_error');
  					return false;
  				}
 				if ($('#signup-sector option:selected').attr('value') == '0') {
 					alert.text("Please choose a sector");
 					alert.css('display', 'block');
					$('#signup-sector').focus();
					$('#signup-sector').addClass('has_error');
 					return false;
 				} 				
 				if ($('#signup-sector option:selected').attr('value') == '100') {
 					if ($('#sectors option:selected').attr('value') == '0'){
 						alert.text("Please choose a sector of your interest");
 						alert.css('display', 'block');
						$('#sectors').focus();
						$('#sectors').addClass('has_error');
 						return false;
 					}
 				}  				
  				if ($('#signup-geo option:selected').attr('value') == '0'){
  					alert.text("Please choose a geography");
  					alert.css('display', 'block');
					$('#signup-geo').focus();
					$('#signup-geo').addClass('has_error');
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
						  alert.css('display', 'block');
 					  } 					  
 				  },
 				  error: function() { 
 					 $('body').css('cursor', 'auto');
 					 firstClick = true;
 					 alert.text("An error occurred! Please try again.");
					 alert.css('display', 'block');
 				  }
 				});		
  			});  			
			
  		});
		