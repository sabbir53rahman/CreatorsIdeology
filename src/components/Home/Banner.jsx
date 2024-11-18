import React from "react";
import bg_img from "../../assets/crid.png";

function Banner() {
  return (
    <>
      <div
        className="flex items-center my_container bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjusted to viewport height
          width: "100%",
        }}
      >
        <div className=" mx-auto md:mx-[0] px-[20px] lg:px-[0px] text-center md:text-left">
          <h2 className="text-[52px] md:text-[80px] font-bold leading-[50px] md:leading-[90px] text-white">
            The Creators <br /> Network
            <span className="text-primary rounded-[20px]">.</span>
          </h2>
          <p className="text-white text-[20px] md:text-[23px] pt-[20px]">
            We're a creative community of Influencers.
          </p>
          <div className="flex flex-row items-center md:items-start justify-center md:justify-start pt-[50px] gap-[20px] md:gap-[30px]">
            <button className="px-[25px] py-[10px] border-2 border-primary rounded-[6px] bg-primary button group ">
              Join Our Network
              <span className="button-hover group-hover:w-[350px] group-hover:h-[350px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              Learn more
              <span className="button-hover group-hover:w-[250px] group-hover:h-[250px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
