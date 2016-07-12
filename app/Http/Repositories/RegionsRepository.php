<?php

namespace App\Http\Repositories;

use App\Http\Models\Regions;

class RegionsRepository
{
	private $regions;

    public function __construct(Regions $regions) {
    	$this->regions = $regions;
    }

    /**
     * Gets a random number of escorts limited by $limit
     *
     * 	@param int|null $limit 	Defines how many results we get
     */
    public function getRegions()
    {
    	return $this->regions->where('region_girl', 1)
                             ->orderBy('region_order')
                             ->get();
    }
}
