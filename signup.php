<?php 
session_start(); 
if (!empty($_GET['source'])) {
	$_SESSION['suser_first_name'] = $_GET['firstName'];
	$_SESSION['suser_last_name'] = $_GET['lastName'];
	$_SESSION['suser_email'] = $_GET['email'];
	$_SESSION['suser_source'] = $_GET['source'];
	$_SESSION['suser_shift_signup_email'] = $_GET['shiftSignupEmail'];
	$_SESSION['suser_token'] = $_GET['token'];
	session_write_close();
}

$firstName = $_SESSION['suser_first_name'];
$lastName = $_SESSION['suser_last_name'];
$email = $_SESSION['suser_email'];
$source = $_SESSION['suser_source'];
$shiftSignupEmail = $_SESSION['suser_shift_signup_email'];
$token = $_SESSION['suser_token'];
if (!empty($firstName)) { $name = $firstName . " " . $lastName; }
?>

<!DOCTYPE html>
<html>
<head>
	<meta name="description" content="Unmetric provides brands and agenices with customized trials to evaluate the platform for a short period. Request your trial." />
	<meta name="keywords" content="trial, Unmetric trial, Unmetric license, evaluation, demo" />

  <!-- Head include section starts -->
  <?php include 'head_new.php'; ?>
  <!-- Head include section ends -->
  
  <title>Unmetric Sign Up</title>
</head>  

<body class="signup_pg">
  <!-- Header include section starts -->
  <?php include 'header_new.php'; ?>
  <!-- Header include section ends -->   
      
   <section class="section signup_form-wrap">
      <div class="content">
      	<h2 class="t-center">Try Unmetric Free for 6 Days</h2>
      	<p class="center-size8of12 t-center push_btm-6">Find out how turning big data into smart data can help you plan better content.  <span class="break-line">Request a trial now and we&rsquo;ll be in touch to get you started.</span></p>
      	
         <form method="post" class="signup-form" id="signup-form">
			<input type="hidden" id="signup-source" value="<?php echo $source; ?>"/>
			<input type="hidden" id="signup-token" value="<?php echo $token; ?>"/>
			<input type="hidden" id="shift-signup-email" value="<?php echo $shiftSignupEmail; ?>"/>
            <div class="input-wrap">
         		<input type="text" required="" name="name" class="input-name" tabindex="1" id="signup-name" autofocus="" <?php if(!empty($name)) echo "value='$name'"; ?> />
         		<label alt="First and Last Name" placeholder="Your Name"></label>
            </div>
         	<div class="input-wrap">
               <input type="email" required="" name="email" class="input-email" tabindex="2" id="signup-email" <?php if(!empty($email)) echo "disabled='disabled' value='$email'"; ?>/>
               <label alt="Work Email" placeholder="Your Email"></label>
            </div>
            <div class="input-wrap">
               <input type="text" required="" name="company-name" class="input-company" tabindex="3" id="signup-company" />
               <label alt="Company Name" placeholder="Your Company"></label>
            </div>
            <div class="input-wrap">
               <input type="tel" required="" name="contact-number" class="input-contact" tabindex="4" id="signup-contact" />
               <label alt="Phone Number" placeholder="Your Phone No."></label>
            </div>
         	<div class="input-wrap select-wrap">
               <select tabindex="5" id="signup-sector">
               </select>
               <label alt="Industry" placeholder="Choose your Industry"></label>
            </div>
			<div class="input-wrap select-wrap" style="display: none;">
               <select tabindex="6" id="sectors">
               </select>
               <label alt="Sector of Interest" placeholder="Select a sector you&rsquo;d be interested in"></label>
            </div>
            <div class="input-wrap select-wrap">
      			<select tabindex="7" id="signup-geo">
               </select>
               <label alt="Your Geography" placeholder="Choose your Geography"></label>
      		</div>
      		<p class="alert alert-warning is_hidden">Please fill in all the fields above.</p>
      		
            <div class="input-wrap">
               <button type="submit" class="btn btn-pri" tabindex="8">Sign Up</button>
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
  
  <script src="/assets/js/signup.js"></script>
   
   <!-- Analytics section starts -->
   <?php include 'analytics.php'; ?>
   <!-- Analytics section ends -->	
</body>
</html>   
   		
   