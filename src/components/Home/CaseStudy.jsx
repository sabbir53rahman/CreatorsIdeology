import React from "react";
import bg_img from "../../assets/study_case.png";
function CaseStudy() {
  return (
    <div className="bg-black my_container pt-[50px] pb-[50px]">
      <div className=" mx-auto px-[15px]  ">
        <h1 className="md:text-[38px] text-[28px] text-center pb-[30px] mx-auto text-[#828282] font-semibold">
          Discover how we've{" "}
          <span className="text-white">Elevated Brands, Increased ROI,</span>{" "}
          and <span className="text-white">Crafted Memorable Narratives</span>{" "}
          through strategic influencer collaborations
        </h1>
        <div
          className="relative h-[30vh] w-full flex items-center justify-center border border-white rounded-[12px]"
          style={{
            backgroundImage: `url(${bg_img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-[12px]"></div>
          <button className=" border border-primary text-white rounded-[6px] group button">
            View Case Study
            <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
          </button>
        </div>
      </div>
      <div className="container pb-[50px] mx-auto flex flex-col items-center justify-center pt-[50px] text-center">
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

export default CaseStudy;
