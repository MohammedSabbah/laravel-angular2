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

    /**
     * Returns the details of a single region
     *
     * @param int $region_id    ID of the target region
     */
    public function getRegion($region_id = 1) {
        return $this->regions->where('region_id', $region_id)
                             ->first();
    }
}
