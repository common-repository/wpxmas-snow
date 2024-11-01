<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'WpXmas_Frontend' ) ) :

/**
 * Main WpXmas_Frontend Class
 *
 * @class WpXmas_Frontend
 */
class WpXmas_Frontend {

	/**
	 * Constructor
	 *
	 * @access public
	 */
	public function __construct() {
		$this->hooks(); // Setup Hooks/Filters
	}
	
	/**
	 * Setup FrontEnd Hooks/Filters
	 */
	 public function hooks() {
		add_action( 'template_redirect', array( $this, 'render' ) ); // add the action only when the loop is initializate
	}
	
	/**
	 * Enque custom function
	 */
	 public function render() {
			add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
			add_action('wp_footer',array($this, 'wpXmas_snow')); 
	}

	/**
	 * Include the css & js script to frontend
	 *
	 * @return string
	 */
	public function enqueue_assets() {

		//Load Styles
		wp_enqueue_style('WpXmasfront_style', WpXmas_PLUGIN_URL.'/assets/css/style.css');

	}

	/**
	 * Show Snow on frontend theme
	 *
	 * @return N/A
	 */
	public function wpXmas_snow() {
		$dir = plugin_dir_url( __FILE__ );
		wp_enqueue_script( 'WpXmas_front_script', WpXmas_PLUGIN_URL.'/assets/js/script.js', '', true );
		wp_localize_script( 'WpXmas_front_script', 'wpXmas_vars', array(
			'plugin_url'      =>  WpXmas_PLUGIN_URL,
			'add_snow_color'  =>  get_option('wp_xmas_enable_snow', false),
	    ));
	}

}

endif;

new WpXmas_Frontend();
