import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperCustom.css"; // Import the custom CSS file
import "swiper/css/free-mode";
import img1 from "../../assets/dsidess.jpeg";
import img2 from "../../assets/scri.png";
import img3 from "../../assets/honey.png";
import Collaborate from "../../assets/collaborate.png";
import Create from "../../assets/create.png";
import Captivate from "../../assets/captivate.png";

const Card = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (card) => {
    setShowMore((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <div className="bg-black my_container">
      <div>
        <h1 className="md:text-[56px] text-[42px] text pb-[10px] font-bold text-center text-white">
          We Make It Simple{" "}
        </h1>
        <p className="text-white text-center text-[18px] md:text-[23px]">
          Are you a Creator? Looking for sponsorships?
        </p>
      </div>
      <div className="w-full mx-auto flex-col lg:flex-row flex justify-between items-center py-[40px]">
        {/* card-1 */}
        <div className="xl:max-w-sm md:max-w-[300px] max-w-[380px] mx-auto my-4 p-6 bg-transparent border border-white rounded-[25px] shadow-md">
          <img
            src={Collaborate}
            className="h-[332px] w-[280px] lg:w-[332px] lg:object-cover"
            alt=""
          />
          <h2 className="text-[32px] font-semibold text-white my-[15px]">
            Collaborate
          </h2>
          <button
            onClick={() => toggleShowMore("card1")}
            className="flex items-center button group mt-4 px-4 py-2 border border-white text-white rounded "
          >
            {showMore.card1 ? "Back" : "Explore"}
            <HiArrowLongRight className="text-[25px]" />
            <span className="button-hover group-hover:w-[250px] group-hover:h-[250px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
          </button>
          {showMore.card1 && (
            <p className="mt-4 text-white">
              We get to know you inside and out – your values, aspirations, and
              who you're trying to reach. Then, we team you up with a dream
              squad of creators whose styles and audiences perfectly match
              yours.
            </p>
          )}
        </div>

        {/* card-2 */}
        <div className="xl:max-w-sm md:max-w-[300px] max-w-[350px] mx-auto my-4 p-6 bg-transparent border border-white rounded-[25px] shadow-md">
          <img
            src={Create}
            className="h-[332px] w-[280px] lg:w-[332px] object-cover"
            alt=""
          />
          <h2 className="text-[32px] font-semibold text-white my-[15px]">
            Create
          </h2>
          <button
            onClick={() => toggleShowMore("card2")}
            className="flex items-center button group mt-4 px-4 py-2 border border-white text-white rounded "
          >
            {showMore.card2 ? "Back" : "Explore"}
            <HiArrowLongRight className="text-[25px]" />
            <span className="button-hover group-hover:w-[250px] group-hover:h-[250px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
          </button>
          {showMore.card2 && (
            <p className="mt-4 text-white">
              Every campaign is meticulously planned, with quantifiable KPIs
              aligned to your specific goals, ensuring every collaboration
              delivers tangible value.
            </p>
          )}
        </div>

        {/* card-3 */}
        <div className="xl:max-w-sm md:max-w-[300px] max-w-[350px] mx-auto my-4 p-6 bg-transparent border border-white rounded-[25px] shadow-md">
          <img
            src={Captivate}
            className="h-[332px] w-[280px] lg:w-[332px] object-cover"
            alt=""
          />
          <h2 className="text-[32px] font-semibold text-white my-[15px]">
            Captivate
          </h2>
          <button
            onClick={() => toggleShowMore("card3")}
            className="flex items-center button group mt-4 px-4 py-2 border border-white text-white rounded "
          >
            {showMore.card3 ? "Back" : "Explore"}
            <HiArrowLongRight className="text-[25px]" />
            <span className="button-hover group-hover:w-[250px] group-hover:h-[250px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
          </button>
          {showMore.card3 && (
            <p className="mt-4 text-white">
              Turning customers into true believers is our vision, the kind who
              not only clicks but truly cares about your brand.
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-white text-center pt-[30px] text-[18px] md:text-[21px]">
          Connect with top brands seeking creator like you.
        </p>
        <div className="flex justify-center items-center pt-[30px] gap-[20px]">
          <button className="px-[25px] py-[10px] border-2 border-primary rounded-[6px] bg-primary button group ">
            Get me Started
            <span className="button-hover group-hover:w-[330px] group-hover:h-[330px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
          </button>

          <button className="px-[25px] py-[10px] border-2 text-primary border-primary rounded button group">
            Learn More
            <span className="button-hover group-hover:w-[270px] group-hover:h-[270px] group-hover:bottom-[-100%] group-hover:right-[-100%]"></span>
          </button>
        </div>
      </div>
      {/* connects */}

      <div className=" mx-auto px-[15px] pt-[30px] pb-[50px] lg:pt-[50px]">
        <style>{`
      .swiper-pagination-bullet {
        background-color: white !important;
      }
      .swiper-pagination-bullet-active {
        background-color: white !important;
      }
      .swiper-pagination-bullet.swiper-pagination-bullet-active-main {
        background-color: white !important;
      }
    `}</style>
        <h1 className="md:text-[56px] text-[42px] pb-[30px] font-bold text-center text-white">
          Our Connects{" "}
        </h1>
        <Swiper
          className="lg:w-[850px] h-[320px]"
          modules={[FreeMode, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".swiper-pagination", // Custom pagination class
          }}
        >
          <SwiperSlide>
            <div className="flex items-center flex-col justify-center text-white h-full border rounded-[10px] border-white p-[25px]">
              <p className="text-[14px] md:text-lg ">
                " my app was like a ghost town. Then I found Creators Ideology!
                They didn't just do ads, they wove this amazing story around the
                app. Downloads BLEW UP. Now everyone's obsessed, and they can't
                stop talking about the creators who brought it to life.
                Seriously, they rock!"
              </p>

              <div className="pt-[40px] flex items-center self-start gap-[30px]">
                <img
                  src={img1}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <h4 className="text-[18px] font-semibold">Side Piece App</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center flex-col justify-center text-white h-full border rounded-[10px] border-white p-[25px]">
              <p className="text-[14px] md:text-lg ">
                "Creators Ideology is amazing! They bring innovation and
                perfectly matched creators to us. Unlike Typical agencies, they
                are a game-changer and our secret weapon. Highly recommend! "
              </p>
              <div className="pt-[40px] flex items-center self-start gap-[30px] ">
                <img
                  src={img2}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <h4 className="text-[18px] font-semibold"> Scribe</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center flex-col justify-center text-white h-full border rounded-[10px] border-white p-[25px]">
              <p className="text-[14px] md:text-lg ">
                "Our downloads soared, CAC plummeted. Creators Ideology is the
                queen bee of influencer marketing!"
              </p>
              <div className="pt-[40px] flex items-center self-start gap-[30px]">
                <img
                  src={img3}
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <h4 className="text-[18px] font-semibold">Honeygains</h4>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination text-primary"></div>{" "}
          {/* Add custom pagination container */}
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
