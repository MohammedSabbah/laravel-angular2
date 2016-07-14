<?php

namespace App\Http\Repositories;

use App\Http\Models\Subcategories;

class SubcategoriesRepository
{
	private $subcategories;

    public function __construct(Subcategories $subcategories) {
    	$this->subcategories = $subcategories;
    }

    /**
     * Gets a subcategory based on it's ID
     *
     * 	@param int $sc_id 	ID of the subcategory to retrieve
     */
    public function getSubcategory($sc_id = 1)
    {
    	return $this->subcategories->where('sc_id', $sc_id)
                                   ->first();
    }

    /**
     * Get subcategory titles and ids
     */
    public function getTitles() {
        return $this->subcategories->select('sc_id', 'sc_title', 'sc_link')
                                   ->orderBy('sc_order')
                                   ->get();
    }
}
