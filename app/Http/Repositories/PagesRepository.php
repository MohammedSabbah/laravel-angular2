<?php

namespace App\Http\Repositories;

use App\Http\Models\Pages;

class PagesRepository
{
	private $pages;

    public function __construct(Pages $pages) {
    	$this->pages = $pages;
    }

    /**
     * Gets a random number of escorts limited by $limit
     *
     * 	@param int|null $limit 	Defines how many results we get
     */
    public function getPages()
    {
    	return $this->pages->where('page_active', 1)
                           ->where('page_gay', '<>', 0)
                           ->get();
    }
}
