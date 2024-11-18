import React from "react";
import Scribe_logo from "../../assets/scribe_logo.png";
import { FaVideo } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

function Scribe() {
  const videoSrc =
    "https://res.cloudinary.com/drjkeiinn/video/upload/v1720952061/Brands%20%28Ads%29/i5dfmr6acjdn6xpfaioc.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div className="my_container flex flex-col justify-center bg-black text-white h-screen w-full">
        <div className="lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[40px] text-center md:text-left">
            Supercharging Workflow Efficiency with Scribe:
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            How we Achieved Double the results at a Third of the Cost.
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-white px-[30px] py-[10px] bg-black max-w-max">
            <div className="flex items-center justify-end text-white">
              <img src={Scribe_logo} className="w-[100px]" alt="Fum Logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="my_container text-white py-[80px]">
        {/* Challenge section */}
        <div className="pb-[50px]">
          <h4 className="text-[45px] font-semibold pb-[20px]">Challenge:</h4>
          <p className="text-[18px]">
            Scribe, a revolutionary AI-powered tool that simplifies creating
            step-by-step workflow guides, needed to reach its target
            audience-busy teams seeking streamlned processes. However,
            traditional influencers marketing on platforms like YouTube proved
            cost-prohibitive due to high creator fees and a potential mismatch
            between Scribe's average order value and the platform's cost
            structure.
          </p>
        </div>

        {/* Solution section */}

        <div className="flex flex-col lg:flex-row gap-[30px]  pb-[30px]">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h4 className="text-[45px] w-full font-semibold pb-[20px]">
              Solution:
            </h4>
            <p className="text-[18px]">
              Our agency devised a strategic and cost-effective influencer
              marketing campaign leveraging the power of short-form content
              creators on Instagram. We identified four highly-regarded creators
              within the business and marketing niche who possessed a strong and
              engaged follower base.
            </p>
            <div className="flex justify-center my-[30px] lg:hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full object-cover rounded-[25px]"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[18px]">
              By strategically leveraging the power of micro-influencers and
              captivating short-form content on Instagram, our agency delivered
              a highly successful campaign for Scribe. This case study
              demonstrates the potential for achieving superior results at a
              fraction of the cost compared to traditional influencer marketing
              approaches. It underscores the importance of understanding target
              audiences, platform-specific strengths, and the power of relatable
              content creation.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 hidden lg:flex justify-center">
            <video
              autoPlay
              muted
              loop
              className="w-full object-cover rounded-[25px]"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <h4 className="text-[45px] font-semibold pb-[20px]">Key Takeaway</h4>
          <p className="text-[18px]">
            By cultivating closer relationship with their followers and
            fostering a more genuine tone, micro-influencers achieve higher
            engagement with the brand, while their dedicated followings within
            the precise businedd and marketing demographic ensure targeted reach
            for brand messaging. This cost-effective approach, offering an 80%
            reduction compared to high-profile YouTube personalities, allowed
            Scribe to stretch its marketing budget forther and achieve
            exceptional results exceeding traditional YouTube advertising
            benchmarks.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098B72] pb-[80px] font-semibold">
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <FaVideo className="text-[80px]" />
            <p className="text-[30px] font-bold">1,500,000 </p>
            <p className="text-[25px]">Views</p>
          </div>
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <BiSolidLike className="text-[80px]" />
            <p className="text-[30px] font-bold">100k </p>
            <p className="text-[25px]">likes</p>
          </div>

          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <RiCustomerService2Fill className="text-[80px]" />
            <p className="text-[30px] font-bold">$0.60 </p>
            <p className="text-[25px] text-center">Cost Per Engagement</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[30px] justify-center">
          <Link to={"/ekster"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              <FaAnglesLeft /> Previous
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
          <Link to={"/growth"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              View Next <FaAnglesRight />
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Scribe;
