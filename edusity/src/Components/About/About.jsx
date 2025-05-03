import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
           <img src={about_img} alt="" className='about-img'/>
           <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERSITY</h3>
           <h2>Nurturing Tomorrow's Leaders Today</h2>
           <p>University life is often considered one of the most transformative periods
             in a person's journey. It’s a time when students transition from adolescence
            into adulthood, taking on new responsibilities and exploring their personal
            and academic interests. Many students experience living away from home for the 
            first time, learning not only from textbooks but also from the challenges and 
            opportunities of daily life on campus.</p>

            <p>Apart from academics, universities offer a wide variety of extracurricular
            activities. Clubs, sports teams, and student unions provide platforms for students 
            to pursue their passions, develop leadership skills, and form lasting friendships.</p>

            <p>The university environment also encourages critical thinking and innovation. 
            Students are introduced to diverse perspectives through lectures, discussions, 
            and collaborative projects. Professors act as mentors, guiding students to question
            assumptions and seek creative solutions to real-world problems. This culture of 
            intellectual curiosity and experimentation is what makes the university experience 
            so valuable.</p>

        </div>

    </div>
  )
}

export default About