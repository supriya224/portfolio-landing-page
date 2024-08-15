"use client";
import Button from "@/components/core/Button";
import React from "react";

const Newsletter = () => {
  const handleCreateClick = () => {
    alert("Create button clicked!");
  };

  return (
    <div>
      <div className="xl:mx-auto 2xl:container mx-4 py-8 ">
        <div className="w-full relative flex items-center justify-center">
          <div className=" md:my-6 lg:py-6 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9  text-center">
              Lets Design Together
            </h1>
            <p className="text-base leading-normal text-center  mt-6">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus <br /> netus in. Aliquet donec morbi convallis pretium
            </p>
            {/* <div className="flex gap-12 w-full"> */}
            <div className="flex-col sm:flex-row flex items-center gap-6 lg:w-6/12 w-full mt-12 space-y-12 sm:space-y-0">
              <input
                className="border bg-[#F8F8F8] rounded-lg text-base w-full font-medium leading-none  p-4 focus:outline-none bg-transparent "
                placeholder="Enter your Email"
              />
              <Button
                text="Contact Me"
                className="w-48 py-4"
                onClick={handleCreateClick}
              />
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
