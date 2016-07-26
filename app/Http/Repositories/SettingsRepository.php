<?php

namespace App\Http\Repositories;

use App\Http\Models\Settings;

class SettingsRepository
{
	private $settings;

    public function __construct(Settings $settings) {
    	$this->settings = $settings;
    }

    /**
     * Receives a text string as an argument and replaces all the settings with it's value
     * i.e. [shortcode], [price], [smallTerms], etc.
     * 
     * @param  string $text The text to parse
     * @return string       Parsed text
     */
    public function parseSettings($text) 
    {
        $settings = $this->settings->all();
        foreach($settings as $setting) {
            $text = str_replace($setting->set_code, $setting->set_value, $text);
        }
        return $text;
    }
}
