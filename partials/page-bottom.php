<?php require_once('template-vars.php'); ?>

	<div id="loaderrr" class="loading-icon"></div>
    

<?php if ($_MJK_["issaLocalhost"]) { ?>
    <script type="text/javascript" src="/assets/js/jquery/jquery-1.11.3.min.js"></script>
<?php } else { ?>
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<?php } ?>
	<script type="text/javascript" src="/assets/js/particles.js/particles.min.js"></script> 
	<script type="text/javascript" src="/assets/js/arena/arena.min.js"></script>
    <script type="text/javascript" src="/assets/js/arena/extras/addClassOnScroll.js"></script>
    <script type="text/javascript" src="/assets/js/arena/extras/appLoadingIndicator.js"></script>
	<script type="text/javascript" src="/assets/js/mjk.app.js"></script>
</body>
</html>