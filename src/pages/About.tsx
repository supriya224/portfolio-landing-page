import Image from 'next/image';
import React from 'react';
import IMG from "/public/assets/Group 7.png"


const About: React.FC = () => {
  const skills = [
    { name: 'UX', percentage: 80, color: 'bg-[#FD6F00]' },
    { name: 'Graphic Design', percentage: 70, color: 'bg-[#FD6F00]' },
    { name: 'Website Design', percentage: 60, color: 'bg-[#FD6F00]' },
    { name: 'App Design', percentage: 30, color: 'bg-[#FD6F00]' },
    ];

  return (
    <div className='flex'>
          <div>
        <Image src={IMG} alt="" />
      </div>
      <div>
        <h3>
          About Me
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
      {skills.map((skill, index) => (
        <div key={index}>
          <h1 className="pl-10 pt-2 sm:pt-5  sm:pl-80">
            {skill.name} 
            <p className='bg-gray-400 border border-[#FD6F00] w-4 h-4 rounded-full'/>
          </h1>
          <div className="mt-2 ml-10 sm:ml-80 h-2 relative w-60 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute"></div>
            <div className={`${skill.color} h-full absolute`} style={{ width: `${skill.percentage}%` }}></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default About;
