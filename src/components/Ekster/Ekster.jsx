import React from "react";
import Ekster_banner from "../../assets/Ekster_banner.png";
import Ekster_logo from "../../assets/Ekster_logo.png";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";

function Ekster() {
  return (
    <div className="bg-black">
      {/* banner section */}
      <div
        className="my_container flex flex-col justify-center bg-black text-white h-screen w-full"
        style={{
          backgroundImage: `url(${Ekster_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="lg:pb-[18vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div>
          <h2 className="md:text-[60px] xl:w-1/2 md:leading-[70px] text-[40px] text-center md:text-left">
            Supercharging Ekster's Brand with Influencers Marketing
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            (Limited Budget, Big Results)
          </p>
        </div>
        <div className="w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-white p-[15px] max-w-max">
            <div className="flex items-center justify-end">
              <img src={Ekster_logo} className="w-[100px]" alt="Ekster Logo" />
              <span className="px-[20px]">x</span>
              <p className="text-[18px]">Ryan Picture</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my_container text-white py-[80px]">
        {/* challenge section */}
        <div className="pb-[50px]">
          <h4 className="text-[45px] font-semibold pb-[20px]">Challenge:</h4>
          <p className="text-[18px]">
            Ekster, a leading provider of minimaslist wallet, approached us with
            a challenge: increase brand awareness and drive sales despite a
            limited marketing budget. They needed a strategic influencer
            marketing campaign that delivered impactfull without breaking the
            bank.
          </p>
        </div>
        {/* Solution section */}
          
          <div className="flex flex-col gap-[30px] lg:flex-row pb-[30px]">
            <div className="lg:w-1/2 order-2 lg:order-1">
            <h4 className="text-[45px] w-full font-semibold pb-[20px]">
            Solution:
          </h4>
              <p className="text-[18px]">
                Instead of focusing on securing a single high-profile
                influencer, we developed a two-pronged approach utilizing
                micro-influencers with distinct target audiences. We
                meticulously selected two micro-influencers who resonated with
                Ekster's brand message and target demographics. Both creators
                featured Ekster wallets in a mini-documentary showcasing a young
                entrepreneur known for their minimalist lifestyle. The focus was
                on the wallet's sleek design, functionality, and ability to
                streamline daily routines.
              </p>
              <div className="flex justify-center my-[30px] lg:hidden">
                <video src="#" className="w-full object-cover rounded-[25px]" controls></video>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 hidden lg:flex justify-center">
              <video src="#" className="w-full object-cover rounded-[25px]" controls></video>
            </div>
          </div>
        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <h4 className="text-[45px] font-semibold pb-[20px]">Key Takeaway</h4>
          <p className="text-[18px]">
            The campaign surpassed exjpectations! With over 740k views and an
            impressive engagement rate exceeding 10%, partnering with
            micro-influencers whose audiences directly align with the brand's
            target demographies helped to maximize the campaign's effectiveness.
            Interactive elements in the ad encouraged audience interaction,
            bossting brand recognition and potential sales
          </p>
          <p className="text-[18px]">
            By employing these strategies, we were able to help Ekster achieve
            singnificant brand growth and sales success within the constraints
            of their limited budget. This case study is a testament to the
            effectivencess of a well-crefted influencer marketing campaign,
            proving that big results are achievable with focused planning and
            creative execution.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098B72] pb-[80px] font-semibold">
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <FaVideo className="text-[80px]" />
            <p className="text-[30px] font-bold">735k </p>
            <p className="text-[25px]">Views</p>
          </div>
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <BiSolidLike className="text-[80px]" />
            <p className="text-[30px] font-bold">13k </p>
            <p className="text-[25px]">likes</p>
          </div>
          
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <GiClick className="text-[80px]" />
            <p className="text-[30px] font-bold">6,000 </p>
            <p className="text-[25px]">clicks</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[30px] justify-center">
          <Link to={"/fum"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
            <FaAnglesLeft /> Previous
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
          <Link to={"/scribe"}>
            <button className="px-[25px] py-[10px] border-2 text-white  border-white rounded button group">
              View Next <FaAnglesRight/> 
              <span className="button-hover group-hover:w-[300px] group-hover:h-[300px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ekster;
