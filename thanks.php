<?php 
session_start(); 
$source = $_SESSION['suser_source'];
unset($_SESSION['suser_first_name']);
unset($_SESSION['suser_last_name']);
unset($_SESSION['suser_email']);
unset($_SESSION['suser_source']);
unset($_SESSION['suser_shift_signup_email']);
unset($_SESSION['suser_token']);
 
session_unset();
session_destroy();
?>
<!DOCTYPE html>
<html>
<head>
  <!-- Head include section starts -->
  <?php include 'head_new.php'; ?>
  <!-- Head include section ends -->
   
  <title>Unmetric Thank You</title>  
</head>  

<body class="land_pg">
   <a class="un_logo-center" href="/"><span>unmetric</span></a>
   <section class="section">   
      <div class="content w-pad center-size10of12">
	<?php 
				if(empty($source)) {
					echo "<h2>Thank you for your interest.</h2> <p class='intro'>Someone from our team will be reaching out shortly to learn a little bit more about you so we can customize your trial to provide you the insights you&rsquo;re looking for.</p>";
				} else {
					echo "<h2>Thanks for signing up!</h2> <p class='intro'>We&rsquo;re excited to have you join us. Look for an e-mail confirming your access to the Unmetric app.</p>";
				}
				?>
      </div>
   </section>
 
  <!-- Bottom include section starts -->
  <?php include 'bottom_include_new.php'; ?>
  <!-- Bottom include section ends -->
   
<!-- Retargeter starts -->

<!-- Retargeter ends -->

  <!-- Analytics section starts -->
  <?php include 'analytics.php'; ?>
  <!-- Analytics section ends -->
   
</body>
</html>
   		
   