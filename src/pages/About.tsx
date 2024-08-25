import Image from "next/image";
import React from "react";
import IMG from "/public/assets/Group 7.png";
import ProgressBar from "@/components/ProgressBar";

const About: React.FC = () => {


  return (
    <div className="flex mx-auto container">
      <div>
        <Image src={IMG} alt="" />
      </div>
      <div className=" flex flex-col items-center mx-32  ">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">About me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <ProgressBar label="UX/UI Design" initialProgress={70} />
        <ProgressBar label="Web Design" initialProgress={50} />
        <ProgressBar label="App Design" initialProgress={30} />
        <ProgressBar label="Graphics Design" initialProgress={90} />
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default About;
