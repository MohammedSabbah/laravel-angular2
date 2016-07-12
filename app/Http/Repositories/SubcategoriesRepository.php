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
     * Gets a random number of escorts limited by $limit
     *
     * 	@param int|null $limit 	Defines how many results we get
     */
    public function getSubcategories()
    {
    	return $this->subcategories->orderBy('sc_order')->get();
    }
}
