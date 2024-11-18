import React from "react";
import bg_img from "../../assets/creator_banner.png";

function CreatorBanner() {
  return (
    <>
      <div
        className="flex items-center my_container bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "100vh",
          width: "100%",
          // Media query for mobile devices
          "@media (max-width: 768px)": {
            backgroundPosition: "left",
          },
        }}
      >
        <div className=" w-full mx-auto  lg:px-[0px] text-center md:text-left">
          <h2 className="text-[52px] md:text-[80px] font-bold leading-[50px] md:leading-[90px] text-white">
            Scaling your{" "}
            <span className="text-primary rounded-[20px]">Income</span> <br />
            Not Your Time.
          </h2>
          <p className="text-white text-[20px] md:text-[23px] pt-[20px]">
            Collaborate with Ease, Create & Captivate <br />
            top global brands.
          </p>
          <div className="flex flex-row items-center md:items-start justify-center md:justify-start pt-[50px] gap-[20px] md:gap-[30px]">
            <button className="flex items-center button px-[25px] py-[10px] border-2 rounded bg-primary text-black group ">
              Get me Started
              <span className="button-hover group-hover:w-[330px] group-hover:h-[330px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatorBanner;
