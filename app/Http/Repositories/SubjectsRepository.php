<?php

namespace App\Http\Repositories;

use App\Http\Models\Subjects;

class SubjectsRepository
{
    private $subjects;

    public function __construct(Subjects $subjects) {
        $this->subjects = $subjects;
    }

    /**
     * Gets all subject titles (useful to display the list of subjects)
     */
    public function getTitles() {
        return $this->subjects->select('subject_id', 'subject_title')
                              ->get();
    }

    /**
     * Gets a subject based on it's ID
     *
     *  @param int $subject_id     ID of the subject to show
     */
    public function getSubject($subject_id = 1)
    {
        $subject = $this->subjects->where('subject_id', $subject_id)
                                  ->first();

        if($subject->subject_desc != "") {
            $subject->subject_desc = file_get_contents(app_path('Http/Includes/Subjects/') . $subject->subject_desc);
            return $subject;
        }
        return false;
    }
}
