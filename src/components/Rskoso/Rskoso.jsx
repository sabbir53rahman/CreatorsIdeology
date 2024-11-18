import React from "react";
import koso_banner from "../../assets/koso.jpg";
import koso_logo from "../../assets/koso_logo.png";
import { FaComment, FaShare, FaVideo } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { GiClick } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

function Rskoso() {
  const videoSrc =
    "https://res.cloudinary.com/drjkeiinn/video/upload/v1720952063/Brands%20%28Ads%29/vznzdo3dyfldoi181xtv.mp4";
  return (
    <div className="bg-black">
      {/* Banner section */}
      <div
        className="my_container flex flex-col justify-center text-white h-screen w-full relative"
        style={{
          backgroundImage: `url(${koso_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="relative lg:pb-[15vh] pb-[50px]">
          <h4 className="text-[23px] font-semibold">Case studies</h4>
        </div>
        <div className="relative">
          <h2 className="md:text-[60px] md:leading-[70px] xl:w-1/2 text-[40px] text-center md:text-left">
            Brewing Up Success:
          </h2>
          <p className="text-[22px] pb-[30px] md:text-[30px] text-center md:text-left">
            How we helped R'S Koso conquer coffee culture with Moon.
          </p>
        </div>
        <div className="relative w-full flex justify-center md:pt-[150px] md:justify-end">
          <div className="inline-block border border-black p-[15px] bg-white max-w-max">
            <div className="flex items-center justify-end text-black">
              <img src={koso_logo} className="w-[80px]" alt="Fum Logo" />
              <span className="px-[20px]">x</span>
              <p className="text-[18px]">Moon</p>
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
            R'S Koso, a healthy alternative to coffe, needed to break into a
            saturate markert dominated by caffeine giants. Traditional
            advertising wouldn't resonate with their target
            audience-health-conscious individuals concemed about gut health.
          </p>
          <p className="text-[18px]">
            They required a strategy that not only educated but also sparked a
            genuine interest in their product.
          </p>
        </div>

        {/* Solution section */}
        <div className="flex flex-col lg:flex-row gap-[30px] pb-[30px]">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h4 className="text-[45px] font-semibold pb-[20px]">Solution:</h4>
            <p className="text-[18px]">
              Partnering with one of YouTube's best video essay channels - Moon,
              we crafted a <strong>12-minute documentary style video</strong>{" "}
              that tackled a topic relevant to coffee drinkers:{" "}
              <strong>the unhealthy competition in the coffee industry.</strong>
            </p>
            <div className="flex justify-center my-[30px] lg:hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full object-cover rounded-[25px]"
              >
                <source
                  src="https://res.cloudinary.com/drjkeiinn/video/upload/v1720952063/Brands%20%28Ads%29/vznzdo3dyfldoi181xtv.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-[18px]">
              The documentary presented a balanced perspective, educating
              viewers on the concerns and the impact of industry competition on
              coffee consumption. Importantly, it also introduced R'S Koso as a
              delicious and gut-friendly beverage for those seeking an
              alternative morning routine solution.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 hidden lg:flex justify-center">
            <video
              autoPlay
              muted
              loop
              className="w-full object-cover rounded-[25px]"
            >
              <source
                src="https://res.cloudinary.com/drjkeiinn/video/upload/v1720952063/Brands%20%28Ads%29/vznzdo3dyfldoi181xtv.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Key Takeaway section */}
        <div className="pb-[50px]">
          <h4 className="text-[45px] font-semibold pb-[20px]">Key Takeaway</h4>
          <p className="text-[18px]">
            The campaign exceeded expactations, gamenning a total of{" "}
            <strong>200,000 impressions</strong> and over{" "}
            <strong>3,000 unique clicks.</strong> This translated into a
            singnificant increase in brand awareness and website traffic for R'S
            Koso.
          </p>
          <p className="text-[18px]">
            More importantly, the campaign resonated with the target audience,
            sparking curiosity and positive conversations about about good
            health and alternative beverage options.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-[15px] justify-between items-center text-[#098B72] pb-[80px] font-semibold">
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <FaVideo className="text-[80px]" />
            <p className="text-[30px] font-bold">200k </p>
            <p className="text-[25px]">Impressions</p>
          </div>
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <BiSolidLike className="text-[80px]" />
            <p className="text-[30px] font-bold">7,500+ </p>
            <p className="text-[25px]">likes</p>
          </div>
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <FaComment className="text-[80px]" />
            <p className="text-[30px] font-bold">1200+ </p>
            <p className="text-[25px]">comments</p>
          </div>
          <div className="flex items-center md:flex-col bg-[#181818] rounded-[10px] py-[20px] w-[350px] lg:w-[250px] px-[30px] gap-[10px]">
            <GiClick className="text-[80px]" />
            <p className="text-[30px] font-bold">3000 </p>
            <p className="text-[25px]">clicks</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link to={"/fum"}>
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

export default Rskoso;
