import React from "react";

const Card = () => {
  return (
    <div className="my-24">
        <h3 className="text-center text-5xl">Services</h3>
        <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className=" mt-6 flex w-fit gap-12 mx-12 rounded-xl  bg-clip-border text-gray-700">
        <div className="p-6 bg-[#F8F8F8]">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            UI/UX Review Check
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iusto ex nisi consectetur ea blanditiis maiores mollitia omnis
            dignissimos.
          </p>
        </div>
        <div className="p-6 bg-[#F8F8F8]">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Web design
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iusto ex nisi consectetur ea blanditiis maiores mollitia omnis
            dignissimos.
          </p>
        </div>
        <div className="p-6 bg-[#F8F8F8]">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           Graphics Design
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iusto ex nisi consectetur ea blanditiis maiores mollitia omnis
            dignissimos.
          </p>
        </div>
        <div className="p-6 bg-[#F8F8F8]">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           App design
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iusto ex nisi consectetur ea blanditiis maiores mollitia omnis
            dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
