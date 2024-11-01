<?php

// settings.php

if (!class_exists('WpXmas_Settings')) :

class WpXmas_Settings {

    /**
     * Initialize the settings
    */   
    public function __construct() {
        add_action('admin_menu', array($this, 'add_plugin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }

    /**
     * Add plugin menu to WordPress admin
    */
    public function add_plugin_menu() {
        add_menu_page(
            'Wp-Xmas Snow Settings',
            'Wp-Xmas Settings',
            'manage_options',
            'wp_xmas_settings',
            array($this, 'render_settings_page'),
            plugin_dir_url(__FILE__).'assets/img/tree.png',
            90
        );
    }

    /**
     * Register plugin settings
    */
    public function register_settings() {
        register_setting('wp_xmas_settings_group', 'wp_xmas_enable_snow'); // New setting for snow color

        if (isset($_POST['submit'])) {
            update_option('wp_xmas_enable_snow', sanitize_text_field($_POST['wp_xmas_enable_snow'])); // Save snow color setting

            // Add a success message
            add_settings_error(
                'wp_xmas_settings_group',
                'wp_xmas_settings_saved',
                'Settings saved successfully',
                'updated'
            );
        }
    }

    public function render_settings_page() {
        ?>
            <div class="wrap">
                <h2>Wp-Xmas Snow Settings</h2>
                <?php
                // Display settings update message
                settings_errors('wp_xmas_settings_group');
                ?>
                <form method="post" action="options.php?page=wp_xmas_settings">
                    <table class="form-table">
                        <tr valign="top">
                            <th scope="row">Add Snow Multi Color</th>
                            <td>
                                <select name="wp_xmas_enable_snow">
                                    <option value="yes" <?php selected('yes', get_option('wp_xmas_enable_snow', 'no')); ?>>Yes</option>
                                    <option value="no" <?php selected('no', get_option('wp_xmas_enable_snow', 'no')); ?>>No</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <?php submit_button('Save Changes'); ?>
                </form>                                                                                                    
            </div>
        <?php
    }
}

new WpXmas_Settings();
endif;
?>