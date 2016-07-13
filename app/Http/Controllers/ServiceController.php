<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Repositories\EscortsRepository;
use App\Http\Repositories\RegionsRepository;
use App\Http\Repositories\PagesRepository;
use App\Http\Repositories\SubcategoriesRepository;
use App\Http\Repositories\SubjectsRepository;

class ServiceController extends Controller
{

	private $escortsRepository;
	private $regionsRepository;
	private $pagesRepository;
	private $subcategoriesRepository;
    private $subjectsRepository;

	public function __construct(
		EscortsRepository $escortsRepository,
		RegionsRepository $regionsRepository,
		PagesRepository   $pagesRepository,
		SubcategoriesRepository $subcategoriesRepository,
        SubjectsRepository $subjectsRepository
		) {
		$this->escortsRepository = $escortsRepository;
		$this->regionsRepository = $regionsRepository;
		$this->pagesRepository 	 = $pagesRepository;
		$this->subcategoriesRepository = $subcategoriesRepository;
        $this->subjectsRepository = $subjectsRepository;
	}

    public function getEscorts($limit = null, $rand = null) {
    	return json_encode($this->escortsRepository->getRandom(10));
    }

    public function getEscortsByArea($area = 1, $ageMin = null, $ageMax = null) {
    	return json_encode($this->escortsRepository->getByArea($area, $ageMin, $ageMax));
    }

    // --------------------------------
    //  Regions
    // --------------------------------
    public function getRegions() {
    	return json_encode($this->regionsRepository->getRegions());
    }

    // --------------------------------
    // Pages
    // --------------------------------

    public function getPage($page_id = 1) {
    	return json_encode($this->pagesRepository->getPage($page_id));
    }

    public function getPageTitles() {
        return json_encode($this->pagesRepository->getTitles());
    }

    // --------------------------------
    // Subcategories
    // --------------------------------

    public function getSubcategory($sc_id = null) {
    	return json_encode($this->subcategoriesRepository->getSubcategory($sc_id));
    }

    public function getSubcategoryTitles() {
        return json_encode($this->subcategoriesRepository->getTitles());
    }

    // --------------------------------
    // Subjects
    // --------------------------------

    public function getSubject($subject_id = 1) {
        return json_encode($this->subjectsRepository->getSubject($subject_id));
    }

    public function getSubjectTitles() {
        return json_encode($this->subjectsRepository->getTitles());
    }
}
