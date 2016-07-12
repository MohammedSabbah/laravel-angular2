<?php

namespace App\Http\Repositories;

use App\Http\Models\Escorts;

class EscortsRepository
{
	private $escorts;

    public function __construct(Escorts $escorts) {
    	$this->escorts = $escorts;
    }

    /**
     * Gets a random number of escorts limited by $limit
     *
     * 	@param int|null $limit 	Defines how many results we get
     */
    public function getRandom($limit = 30)
    {
    	$escorts = $this->escorts;
    	$escorts = $escorts->take($limit)->orderByRaw('RAND()');
    	return $escorts->get();
    }

    /**
     * Returns a list of escorts filtered by area and/or age
	 *
	 *	@param 	int 		$area 		ID of the target area
	 * 	@param 	int|null 	$ageMin 	Lower boundary for age to filter by
	 * 	@param 	int|null 	$ageMax 	Upper boundary for age to filter by
     */
    public function getByArea($area = 1, $ageMin = null, $ageMax = null)
    {
    	$escorts = $this->escorts->select()
    							 ->where('esc_subcats', 'LIKE', '|' . sprintf($area, '%i') . '|');

    	if(!is_null($ageMin) && !is_null($ageMax)) {

    		$escorts = $escorts->where('esc_age', '>=', $ageMin)
    						   ->where('esc_age', '<', $ageMax);
    	}

    	return $escorts->get();
    }
}
