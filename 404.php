<?php
$pageTitle = "404";
include('partials/page-top.php');
?>
    
    <?php include('partials/page-background.php'); ?>
	

    <main role="main" id="main-content" class="page__not-found sploosh-wrapper">
		
        <div class="sploosh">
            <h1 class="header" role="heading">Sorry,</h1>
            <h6 class="sub-header">We cant find that on <a href="http://www.mjktech.co.uk">MJKTech.co.uk</a></h6>
			<p>The page you are looking for doesn't seem to exist!<br/>
				Try one of the links below...</p>
			
			<button class="scroll-down-button logo-button" title="Scroll Down" data-scroll-to=".page-footer" fade-when-page-ready data-delay="3500"></button>
        </div>
		
    </main>

	
    <?php include('partials/page-footer.php'); ?>

<?php include('partials/page-bottom.php'); ?>
