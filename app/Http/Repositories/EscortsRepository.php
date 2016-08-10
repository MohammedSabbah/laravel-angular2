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
    public function getRandom($limit = 30, $available = true)
    {
    	$escorts = $this->escorts->select('esc_id', 'esc_title', 'esc_available', 'esc_img', 'esc_age');

        if($available) {
            $escorts = $escorts->where('esc_available', 'Yes');
        }

    	$escorts = $escorts->take($limit)->orderByRaw('RAND()');

    	return $escorts->get();
    }

    /**
     * Returns a list of escorts filtered by region and/or age
	 *
	 *	@param 	int 		$region     ID of the target region
	 * 	@param 	int|null 	$ageMin 	Lower boundary for age to filter by
	 * 	@param 	int|null 	$ageMax 	Upper boundary for age to filter by
     */
    public function getByRegion($region = 1, $ageMin = null, $ageMax = null)
    {
    	$escorts = $this->escorts->select('esc_id', 'esc_title', 'esc_available', 'esc_img', 'esc_age')
    							 ->where('esc_subcats', 'LIKE', '|' . sprintf($region, '%i') . '|');

    	if(!is_null($ageMin) && !is_null($ageMax)) {

    		$escorts = $escorts->where('esc_age', '>=', $ageMin)
    						   ->where('esc_age', '<', $ageMax);
    	}

        $output = $escorts->orderByRaw('RAND()')
                          ->get();
        
        // We are using CSS classes in our angular application to show if a profile is online or if it's not available
        // so what we have to do is to change the value of this object property because if the profile is
        // online we are going to use 'online' and if it's not available we will write 'dating'
        // or any other value we want to add.
        foreach($output as $key => $escort) {
            if($escort->esc_available == 'Yes') {
                $output[$key]->esc_available = 'online';
            }
            else {
                $output[$key]->esc_available = 'dating';
            }
        }

        return $output;
    }

    /**
     * Retrieves the list of profiles in a specific subcategory
     * 
     * @param  integer $sc_id ID of the subcategory to display
     */
    public function getBySubcategory($sc_id = 1) 
    {
        return $this->escorts->select('esc_id', 'esc_title', 'esc_available', 'esc_img', 'esc_age')
                             ->where('esc_status', $sc_id)
                             ->get();
    }

    /**
     * Retrieves an escort by it's ID
     *
     * @param int $esc_id Primary key of the escorts table
     */
    public function getById($esc_id) {
        return $this->escorts->where('esc_id', $esc_id)->first();
    }
}
