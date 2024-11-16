import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {skills, experiences} from '../constants/index';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello I'm <span className="blue-gradient_text font-semibold drop-shadow">Dane</span></h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Full-Stack developer based in Colorado</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          
          {/* Map over each skill and for each skill return div with image */}
          {skills.map((skill => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"  />
                </div>
            </div>
          )))}
          </div>
           </div>

           {/* Work experience section */}
<div className="py-16">
  <h3 className="subhead-text">Work Experience</h3>
  <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I've been able to work with many of the top brands in the cycling world as a photographer and am now focusing on building my development skills</p>
      </div>

      {/* Animated vertical timeline */}
<div className="mt-12 flex">
  <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement 
            key={experience.company_name} 
            date={experience.date} 
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain "/>
              
              </div>
            }  
            iconStyle={{
              background: experience.iconBg
            }}
           contentStyle= {{
              borderBottom: '8px',
              borderStyle: 'solid',
              borderBottomColor: experience.iconBg,
              boxShadow: 'none',

              }}>

              <div>
                <h3 className="font-semibold text-black text-xl font-poppins">{experience.title}</h3>
                <p className="text-black-500 font-medium font-base" syle={{margin: 0}}>
                  {experience.company_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                        {point}
                    
                    </li>
                ))}
              
              </ul>

            </VerticalTimelineElement>

          ))}
  </VerticalTimeline>

</div>

</div>

{/* CTA section to link to Contact */}
<hr className='border-slate-200'/>
<CTA/>


    </section>

  )
}

export default About
