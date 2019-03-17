	<!-- Styling -->
	<link href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600|Raleway:400,700|Roboto:100,300,400,500,700,900" rel="stylesheet">
	<link href="{$WEB_ROOT}/templates/{$template}/css/all.min.css?v={$versionHash}" rel="stylesheet">
  <link href="{$WEB_ROOT}/assets/css/fontawesome-all.min.css" rel="stylesheet">


    <!-- ====Owl Carousel Stylesheet==== -->
    <link href="{$WEB_ROOT}/templates/{$template}/css/owl.carousel.min.css" rel="stylesheet">
    
    <!-- ====bxSlider Stylesheet==== -->
    <link href="{$WEB_ROOT}/templates/{$template}/css/jquery.bxslider.min.css" rel="stylesheet">
    
    <!-- ====Main Stylesheet==== -->
    <link href="{$WEB_ROOT}/templates/{$template}/css/style_ordomain.css" rel="stylesheet">
    
    <!-- ====Responsive Stylesheet==== -->
    <link href="{$WEB_ROOT}/templates/{$template}/css/responsive-style.css" rel="stylesheet">

    <!-- ====Main Color Scheme CSS==== -->
    <link href="{$WEB_ROOT}/templates/{$template}/css/main-color-1.css" rel="stylesheet" type='text/css' id="theme_color">
	

    <!-- Custom Styling -->
    <link rel="stylesheet" href="{$WEB_ROOT}/templates/{$template}/css/custom.css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<script type="text/javascript">
    var csrfToken = '{$token}',
        markdownGuide = '{lang key="markdown.title"}',
        locale = '{if !empty($mdeLocale)}{$mdeLocale}{else}en{/if}',
        saved = '{lang key="markdown.saved"}',
        saving = '{lang key="markdown.saving"}',
        whmcsBaseUrl = "{\WHMCS\Utility\Environment\WebHelper::getBaseUrl()}",
        requiredText = '{lang key="orderForm.required"}',
        recaptchaSiteKey = "{if $captcha}{$captcha->recaptcha->getSiteKey()}{/if}";
</script>
<script src="{$WEB_ROOT}/templates/{$template}/js/scripts.min.js?v={$versionHash}"></script>

{if $templatefile == "viewticket" && !$loggedin}
  <meta name="robots" content="noindex" />
{/if}
