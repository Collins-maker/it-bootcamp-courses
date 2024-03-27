import React from "react";
import Hero from "../../../components/hero/Hero";
import Instructors from "../../../components/instructors/Instructors";
import heroInstructor from "../../../images/heroInstructor.jpg"


const InstructorsPage = () =>{
    return (
        <div className="Instructorspage">
            <Hero
        title="MEET OUR INSTRUCTORS"
        description="Throughout your bootcamp, you will be backed by a professional team dedicated to helping you accomplish your goals."
        heroImage={heroInstructor}
      />
            <Instructors />
        </div>
    );
};

export default InstructorsPage;