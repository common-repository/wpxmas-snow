<?php
/**
 * Plugin Name: Wp-Xmas Snow
 * Description: This plugin add the Christmas Snow on your activated theme.
 * Version: 1.1
 * Author: Pankaj Kumar
 */

function add_settings_link($links) {
    $settings_link = '<a href="options-general.php?page=wp_xmas_settings">Settings</a>';
    $links = array_merge(array($settings_link), $links);
    return $links;
}

add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'add_settings_link'); 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'WpXmas' ) ) :

// Include settings file
include_once('settings.php');	

/**
 * Main WpXmas Class
 *
 * @class WpXmas
 */
final class WpXmas {

	/**
	 * @var string
	 */
	public $version = '1.1';

	/**
	 * @var WpXmas The single instance of the class
	 */
	protected static $_instance = null;

	/**
	 * Main WpXmas Instance
	 *
	 * Ensures only one instance of WpXmas is loaded or can be loaded.
	 *
	 * @see WpXmas()
	 * @return WpXmas - Main instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * WpXmas Constructor.
	 * @access public
	 * @return Curated WpXmas
	 */
	public function __construct() {

		// Define constants
		$this->define_constants();
		
		// Include required files
		$this->includes();

		// Init Hook
		add_action( 'init', array( $this, 'init' ), 0 );		
	}


	/**
	 * Define WpXmas Constants
	 */
	private function define_constants() {
		define( 'WpXmas_PLUGIN_FILE', __FILE__ );
		define( 'WpXmas_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
		define( 'WpXmas_VERSION', $this->version );
		define( 'WpXmas_PLUGIN_URL', $this->plugin_url() );
		define( 'WpXmas_PLUGIN_PATH', $this->plugin_path() );
	}
	
	/**
	 * Include required core files used in admin and on the frontend
	 */
	private function includes() {
		include_once( 'includes/class-WpXmas-frontend.php' );
	}
	
	/**
	 * Get the plugin url.
	 *
	 * @return string
	 */
	public function plugin_url() {
		return untrailingslashit( plugins_url( '/', __FILE__ ) );
	}
	
	/**
	 * Get the plugin path.
	 *
	 * @return string
	 */
	public function plugin_path() {
		return untrailingslashit( plugin_dir_path( __FILE__ ) );
	}

	/**
	 * Init Cards when WordPress Initialises.
	 */
	public function init() {
		do_action( 'WpXmas_init' );
	}

}

/**
 * Returns the main instance of WpXmas to prevent the need to use globals.
 *
 * @since  1.0
 * @return WpXmas
 */

function WpXmas() {
	return WpXmas::instance();
}

WpXmas();

endif;
