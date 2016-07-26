<?php

namespace App\Http\Repositories;

use App\Http\Models\Pages;
use App\Http\Repositories\SettingsRepository;

class PagesRepository
{
    private $pages;
    private $settingsRepository;

    public function __construct(Pages $pages, SettingsRepository $settingsRepository) {
        $this->pages = $pages;
        $this->settingsRepository = $settingsRepository;
    }

    /**
     * Gets all page titles (useful to display the list of pages)
     */
    public function getTitles() 
    {
        return $this->pages->select('page_id', 'page_title', 'page_url')
                           ->where('page_active', 1)
                           ->where('page_gay', 0)
                           ->get();
    }

    /**
     * Gets a page based on it's ID
     *
     *  @param int $page_id     ID of the page to show
     */
    public function getPage($page_id = 1)
    {
        $page = $this->pages->where('page_active', 1)
                            ->where('page_gay', 0)
                            ->where('page_id', $page_id)
                            ->first();

        // we need to replace all the constants like [shortcode], [price], etc.
        $page->page_text = $this->settingsRepository->parseSettings($page->page_text);
        
        return $page;
    }
}
