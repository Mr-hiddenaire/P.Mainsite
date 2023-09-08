<!doctype html>
<html <?php language_attributes(); ?> class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    -->
     <?php wp_head(); ?>
     <script>var $ = jQuery.noConflict();</script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZHZHWNKV3K"></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZHZHWNKV3K');
      </script>
  </head>

  <body <?php body_class(); ?> itemscope="itemscope" itemtype="http://schema.org/WebPage">

  <header id="top-menu" class="top-bar" itemscope="itemscope">
  <?php echo wp_nav_menu( array( "theme_location" => "mega_main_sidebar_menu" ) ); ?>
  </header>
<!--  
<div id="searchwrap">
  <div class= "row">
    <div class="columns">
      <?php get_search_form(); ?>
    </div>
  </div>
</div>
-->
<?php if ( is_active_sidebar( 'top-widget-area' ) ) : ?>
    <div id="top-widget-area" class="widget-area" role="complementary">
      <?php dynamic_sidebar( 'top-widget-area' ); ?>
    </div><!-- .top-widget-area -->
<?php endif; ?> 