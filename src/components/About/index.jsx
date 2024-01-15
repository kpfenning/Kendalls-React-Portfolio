import React from "react";
import profilepic from "../../assets/cover/profile-pic.png";
import './about.css';

function About() {
    return (
      <div className='aboutPg'>
        <h1> Kendall Pfenning </h1>
        <div className="img-container">
          <img src={profilepic} alt="Profile Pic"/>
        </div>
        <div className="aboutMe">
          
          <p> My name is Kendall Pfenning. I am a University of Oregon graduate with a Major in General Science and minor in Anthropology. You may be wondering, "Why software development? Well, after college and once I entered the real world I was left with many doubts on my academic decisions. I originally went into college with my mind set on Computer Science. But ultimately I chose the social aspect of college over the academic. Ever since then, the question of 'What if?' constantly popped in head. What if I would have committed to Computer Science, where would I be now? So I decided to join the UofO Coding Bootcamp! And here I am! Learning more everyday and I couldn't be more proud of myself for taking on a new challenge to better my future!" </p>
        </div>

      </div>
    );
  }
  
  export default About;