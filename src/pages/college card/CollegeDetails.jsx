import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const college = useLoaderData();
    const {college_name, college_image, admission_process, events_details,events, research_works, sports_categories} = college;
    return (
        <div>
            <img src={college_image} alt="" />
            <p>{college_name}</p>
            <p>Admission Process:</p>
            <p>Steps:</p>
            <p>1. {admission_process.steps[0]}</p>
            <p>2. {admission_process.steps[1]}</p>
            <p>3. {admission_process.steps[2]}</p>
            <p>4. {admission_process.steps[3]}</p>
            <p>5. {admission_process.steps[4]}</p>
            <p>Requirements:</p>
            <p>1. {admission_process.requirements[0]}</p>
            <p>2. {admission_process.requirements[1]}</p>
            <p>3. {admission_process.requirements[2]}</p>
            <p>4. {admission_process.requirements[3]}</p>
            <p>Events Details:</p>
            <p>{events_details.Orientation_Day}</p>
            <p>{events_details.Annual_Cultural_Fest}</p>
            <p>{events_details.Career_Fair}</p>
            <p>Research Works:</p>
            <p>Title: {research_works[0].title}</p>
            <p>Authors: {research_works[0].authors[0]}, {research_works[0].authors[1]}</p>
            <p>Publication Date: {research_works[0].publication_date}</p>
            <p>Description:</p>
            <p>{research_works[0].description}</p>
            <p>Sports Categories:</p>
            <p>Team Sports:</p>
            <p>1. {sports_categories.team_sports[0]}</p>
            <p>2. {sports_categories.team_sports[1]}</p>
            <p>3. {sports_categories.team_sports[2]}</p>
            <p>Individual Sports:</p>
            <p>1. {sports_categories.individual_sports[0]}</p>
            <p>2. {sports_categories.individual_sports[1]}</p>
            <p>3. {sports_categories.individual_sports[2]}</p>
            <p>Intramural Sports:</p>
            <p>1. {sports_categories.intramural_sports[0]}</p>
            <p>2. {sports_categories.intramural_sports[1]}</p>
            <p>3. {sports_categories.intramural_sports[2]}</p>
        </div>
    );
};

export default CollegeDetails;