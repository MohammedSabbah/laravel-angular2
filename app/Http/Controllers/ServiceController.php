<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Repositories\EscortsRepository;
use App\Http\Repositories\RegionsRepository;
use App\Http\Repositories\PagesRepository;
use App\Http\Repositories\SubcategoriesRepository;

class ServiceController extends Controller
{

	private $escortsRepository;
	private $regionsRepository;
	private $pagesRepository;
	private $subcategoriesRepository;

	public function __construct(
		EscortsRepository $escortsRepository,
		RegionsRepository $regionsRepository,
		PagesRepository   $pagesRepository,
		SubcategoriesRepository $subcategoriesRepository
		) {
		$this->escortsRepository = $escortsRepository;
		$this->regionsRepository = $regionsRepository;
		$this->pagesRepository 	 = $pagesRepository;
		$this->subcategoriesRepository = $subcategoriesRepository;
	}

    public function getEscorts($limit = null, $rand = null) {
    	return json_encode($this->escortsRepository->getRandom(10));
    }

    public function getEscortsByArea($area = 1, $ageMin = null, $ageMax = null) {
    	return json_encode($this->escortsRepository->getByArea($area, $ageMin, $ageMax));
    }

    public function getRegions() {
    	return json_encode($this->regionsRepository->getRegions());
    }

    public function getPages() {
    	return json_encode($this->pagesRepository->getPages());
    }

    public function getSubcategories() {
    	return json_encode($this->subcategoriesRepository->getSubcategories());
    }
}
