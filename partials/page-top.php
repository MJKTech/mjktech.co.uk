<?php require_once('template-vars.php'); ?>
<!DOCTYPE html>
<html xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:website="http://ogp.me/ns/website" lang="en-GB" class="no-js">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="apple-mobile-web-app-capable" content="YES"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title><?php echo $pageTitle ?> | MJK TECH</title>
    <meta name="description" content="<?php echo isset($pageDescription)? $pageDescription : "Building creative digital products & services: MJK Tech specialises in custom web application development & bespoke websites. Web Developer services based in London."; ?>"/>
    <meta name="keywords" content="<?php echo isset($pageKeywords)? $pageKeywords : "web development,bespoke websites,custom websites,web apps,web app development,web development london,web developer london,client-side developer,front end developer,web designer london,freelance"; ?>"/>
    <meta name="author" content="Nathan Johnson"/>

    <meta name="google-site-verification" content="zDeX5-VR_kgsDNp0OevqnxKtGTbmVt4kXBmC_48aCN8" />
    <link rel="canonical" href="http://www.mjktech.co.uk<?php echo $_SERVER['REQUEST_URI'];?>" />
	
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="MJKTech | Unique Web App &amp; Website Development" />
    <meta property="og:description" content="MJK Tech provides digital consultation services specialising in custom web application &amp; bespoke website development in London" />
    <meta property="og:url" content="http://www.mjktech.co.uk<?php echo $_SERVER['REQUEST_URI'];?>" />
    <meta property="og:site_name" content="MJK Tech" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="MJKTech | Unique Web App &amp; Website Development" />
    <meta name="twitter:description" content="MJK Tech provides digital consultation services specialising in custom web application &amp; bespoke website development in London" />
    <meta name="twitter:site" content="@mjktech" />
    <meta name="twitter:creator" content="@mjktech" />

<?php if ($_MJK_["issaLocalhost"]) { ?>
	<link href="/assets/fonts/poiret_one/stylesheet.css" rel="stylesheet">
<?php } else { ?>
	<link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet">
<?php } ?>

    <script> (function(h){ h.className = ('js '+h.className.replace('no-js','')).trim(); })(document.documentElement) </script>
    <link rel="stylesheet" type="text/css" href="/assets/css/styles.css" />
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> -->

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
    <link rel="manifest" href="/assets/icons/site.webmanifest">
    <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#603cba">
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="msapplication-config" content="/assets/icons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
