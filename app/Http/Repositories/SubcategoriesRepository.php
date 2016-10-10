<?php

namespace App\Http\Repositories;

use App\Http\Models\Subcategories;
use App\Http\Repositories\SettingsRepository;

class SubcategoriesRepository
{
	private $subcategories;
    private $hiddenSubcategories; // avoid displaying these pages
    private $settingsRepository;

    public function __construct(Subcategories $subcategories, SettingsRepository $settingsRepository) {
    	$this->subcategories = $subcategories;
        $this->settingsRepository = $settingsRepository;

        $this->hiddenSubcategories = [76, 84, 86, 88];
    }

    /**
     * Gets a subcategory based on it's ID
     *
     * 	@param int $sc_id 	ID of the subcategory to retrieve
     */
    public function getSubcategory($sc_id = 1)
    {
        $subcategory = $this->subcategories->where('sc_id', $sc_id)
                                           ->first();

        $subcategory->sc_text = $this->settingsRepository->parseSettings($subcategory->sc_text);

        return $subcategory;
    }

    /**
     * Get subcategory titles and ids
     */
    public function getTitles() {
        return $this->subcategories->select('sc_id', 'sc_title', 'sc_link')
                                   ->whereNotIn('sc_id', $this->hiddenSubcategories)
                                   ->orderBy('sc_order')
                                   ->get();
    }
}
