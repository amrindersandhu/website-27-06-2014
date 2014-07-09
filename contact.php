<!DOCTYPE html>
<html>
<head>
	<meta name="description" content="For inquiries, support, jobs, feedback or even if you just want to say hello, this is the place to get in touch with us" />
	<meta name="keywords" content="contact, unmetric phone number, unmetric email, unmetric address, unmetric offices" />

  <!-- Head include section starts -->
  <?php include 'head_new.php'; ?>
  <!-- Head include section ends -->
  
  <title>Contact Unmetric</title>
</head>  

<body class="contact_pg">
  <!-- Header include section starts -->
  <?php include 'header_new.php'; ?>
  <!-- Header include section ends -->
    
   <div class="page_header contact_header">
      <div class="content">
         <h1 class="page_title">We&rsquo;d love to hear from you.</h1>   
      </div>
      <span class="scroll">&darr;</span>
   </div>

   <div class="section contact_wrap">
	   <div class="content">
      	<div class="contact_med tw_med">
      		<a target="_blank" href="https://www.twitter.com/unmetric">Twitter power-user? <br>Mention <b>@unmetric</b>.</a>
      	</div>
      	<div class="contact_med fb_med">
      		<a target="_blank" href="https://www.facebook.com/unmetric">140 chars not enough? <br>Post on our <b>Facebook page</b>.</a>
      	</div>
      	<div class="contact_med co_med">
      		<a href="#contact_form-wrap" class="scroll">Oh, and you can still use <br>that old <b>contact form</b>.</a>
      	</div>
      	<div class="contact_med te_med">
      		<a class="tel" href="tel:1-855-558-5588" >Feel free to call us <br>at <b>1-855-558-5588</b></a><br>
         </div>
         <div class="contact_med em_med">
         	<a href="mailto: info@unmetric.com" class="mail">Or you can email us <br>at <b>info@unmetric.com</b></a>
      	</div>
      </div>
   </div>
   
   <div class="section loc_wrap">
      <div class="content">
      	<div class="loc_map-wrap size1of1">
         	<img src="assets/i/map.png" alt="World Map" />
         </div>
         <ul class="loc_list">
      		<li class="loc_item ny_loc">
      			<address class="vcard">
          			<h3>New York</h3>
          			<span class="street-address">25 Broadway</span>, <br>
          			<span class="city-name">New York</span>, 
          			<span class="state">NY</span> 
          			<span class="postal-code">10004</span>
      			</address>
      		</li>
      		<li class="loc_item cn_loc">
      			<address class="vcard">
      				<h3>Chennai</h3>
      				<span class="loc">SP InfoCity</span>, <br>
      				<span class="street-address">MGR Salai, Perungudi</span>, <br>
      				<span class="city-name">Chennai</span>, 
      				<span class="state">TN</span> 
      				<span class="postal-code">600096</span>
      			</address>
      		</li>
      	</ul>
      </div>
   </div>
              
   <section class="section contact_form-wrap" id="contact_form-wrap">
      <div class="content">
      	<h2 class="t-center push_btm-6">Contact Us</h2>
      	
      	<p class="alert alert-success is_hidden">Thanks for reaching out, we&rsquo;ll review your message and make sure the right person gets back to you asap.</p>
         <p class="alert alert-error is_hidden"><strong>Oops!</strong> Your email address isn&rsquo;t valid.</p>
            
      	<form method="post" class="contact-form" id="contact-form">
      	   <div class="input-wrap select-wrap">
            	<select id="contact-sector" tabindex="1">
            		<option selected>Please Choose a Department</option>
            		<option>Sales</option>
            		<option>Marketing</option>
            		<option>Technology</option>
            		<option>Support</option>
            		<option>Careers</option>
            		<option>CEO</option>
            	</select>
            	<label alt="Send this message to" placeholder="Where should we send this message?"></label>
            </div>
      	
      		<div class="input-wrap">
         		<textarea required="" rows="5" name="message" class="input-message" id="contact-message" tabindex="2"></textarea>
         		<label alt="Message" placeholder="Your Message" >
            </div>
      		<div class="input-wrap">
         		<input type="text" required="" name="name" class="input-name" id="contact-name" tabindex="3"/>
         		<label alt="Name" placeholder="Your Name" >
            </div>
            <div class="input-wrap">
         		<input type="email" required="" name="email" class="input-email" id="contact-email" tabindex="4"/>
         		<label alt="Email" placeholder="Your Email" >
            </div>
      		<div class="input-wrap">
   				<button type="submit" tabindex="5" class="btn btn-pri">Send Message</button>
   			</div>
      	</form>
      </div>
   </section>
   
   <!-- Footer include section starts -->
  <?php include 'footer.php'; ?>
  <!-- Footer include section ends -->
   
   <!-- Bottom include section starts -->
   <?php include 'bottom_include_new.php'; ?>
   <!-- Bottom include section ends -->
  
   <script src="/assets/js/contact.js"></script>
   
   <!-- Analytics section starts -->
   <?php include 'analytics.php'; ?>
   <!-- Analytics section ends -->
 </body>
 </html>
      