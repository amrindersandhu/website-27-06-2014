<!-- All JS goes here-->
   
<script src='/assets/js/vendor/jquery-1.9.1.min.js'></script>
<script src='/assets/js/vendor/jquery.smooth-scroll.min.js'></script>
<script src='/assets/js/vendor/bjqs-1.3.min.js'></script>
<script src='/assets/js/checksession.js'></script>
<script src='/assets/js/main.js'></script>
<script src='/assets/js/vendor/jquery.sticky.js'></script>

<script> 
      
      $(window).load(function(){
         $("#c-nav").sticky({ topSpacing: 15 });
      });
      
		$(document).ready(function() {
			$(".scroll").click(function(event) {
				event.preventDefault();
				var id = $(this).attr('href');
				$('html,body').animate({
					scrollTop : $(this.hash).offset().top
				}, 600);
			});
		});
</script>