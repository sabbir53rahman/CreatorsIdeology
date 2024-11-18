import React from "react";
import campaign from "../../assets/campaign.png";
function Campaign() {
  return (
    <div className="bg-black pt-12 my_container text-white">
      <h1 className="text-white text-[52px] text-center md:text-[65px] font-bold">
        Coming Soon
      </h1>

      <div className="pt-[80px] md:pb-[70px] mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-[57px] 2xl:text-[80px] leading-[60px] 2xl:leading-[85px] font-bold pb-[15px]">
            Multi-Platform <br />{" "}
            <span className="text-[#441DBC]">Campaigns</span>
          </h1>
          <p className="text-[20px]">
            Our agency designs influencer marketing campaigns across various
            social media platforms, blogs, and other digital channels.
          </p>
        </div>
        <div className="lg:col-span-7 flex items-center px-[20px] lg:px-0 justify-center lg:justify-end">
          <img
            src={campaign}
            alt="Engaged Customer"
            className="w-full h-auto md:w-[480px] md:h-[500px] xl:w-[90%] xl:h-[600px] rounded-[45px] object-cover"
          />
        </div>
      </div>

      <div className=" mx-auto flex flex-col items-center justify-center text-center pt-[50px] pb-[100px]">
        <h1 className="text-white text-[42px] md:text-[65px] font-bold">
          Ready to work with us?
        </h1>
        <button className="flex items-center button border bg-primary text-black rounded-[6px] group ">
          Start a Project
          <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
        </button>
      </div>
    </div>
  );
}

export default Campaign;
