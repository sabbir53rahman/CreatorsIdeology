import React, { useState } from "react";
import img1 from "../../assets/Layer1.png";
import img2 from "../../assets/Layer2.png";
import img3 from "../../assets/Layer3.png";
import img4 from "../../assets/Ryan_Pictures.png";
import img5 from "../../assets/Moneyplix_Media.png";
import img6 from "../../assets/Leelajournals.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

function CreatorCard() {
  const [showParagraph, setShowParagraph] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleCardClick = (index) => {
    const updatedShowParagraph = showParagraph.map((item, idx) =>
      idx === index ? !item : item
    );
    setShowParagraph(updatedShowParagraph);
  };

  const creators = [
    {
      name: "Moon",
      subscribers: "1.34M Subscribers",
      image: img1,
      description: `
        <span class="font-bold">Moon Real</span> isn't just a YouTube channel, it's a hub of thought-provoking insights,
        eloquent analysis, and engaging discussions. With a focus on social commentary, Moon-Real dives deep into contemporary
        issues sparking conversations that matter.<br /><br />Their video essays are meticulously crafted, combining meticulous research
        with compelling storytelling that captivates and informs.
      `,
      social: { platform: FaYoutube, handle: "@Moon-Real" },
    },
    {
      name: "Marketing Psychology",
      subscribers: "745K Followers",
      image: img2,
      description: `
        <span class="font-bold">Marketing Psychology</span> isn't just a YouTube channel, it's a hub of thought-provoking insights,
        eloquent analysis, and engaging discussions. With a focus on social commentary, Marketing Psychology dives deep into contemporary
        issues sparking conversations that matter.<br /><br />Their video essays are meticulously crafted, combining meticulous research
        with compelling storytelling that captivates and informs.
      `,
      social: { platform: FaInstagram, handle: "@Marketing-Psychology" },
    },
    {
      name: "Patrick Cc.",
      subscribers: "1.87M Subscribers",
      image: img3,
      description: `
        <span class="font-bold">Patrick Cc</span> isn't just a YouTube channel, it's a hub of thought-provoking insights,
        eloquent analysis, and engaging discussions. With a focus on social commentary, Patrick Cc dives deep into contemporary
        issues sparking conversations that matter.<br /><br />Their video essays are meticulously crafted, combining meticulous research
        with compelling storytelling that captivates and informs.
      `,
      social: { platform: FaYoutube, handle: "@Patrick-Cc" },
    },
    {
      name: "Ryan Pictures",
      subscribers: "1.87M Subscribers",
      image: img4,
      description: `
        <span class="font-bold"> Ryan Pictures</span> is a rapidly growing YouTube channel focused on producing mini-documentaries about popular online personalities. Their content offers in-depth insights into the lives and journeys of digital creators, attracting a highly engaged audience interested in the digital creator space.
      `,
      social: { platform: FaYoutube, handle: "@Ryan Pictures " },
    },
    {
      name: "Moneyplix Media",
      subscribers: "1.87M Subscribers",
      image: img5,
      description: `
        <span class="font-bold">Moneyplix Media is a TikTok finance creator</span>  taking the platform by storm with a combined following of  700k across all platforms. This creator breaks down the world of investing, tech, and saving money in a way that's both informative and hilarious. Forget dry lectures – Moneyplix Media makes financial literacy fun and engaging for everyone!
      `,
      social: { platform: FaYoutube, handle: "@Moneyplix Media " },
    },
    {
      name: "Leelajournals ",
      subscribers: "1.87M Subscribers",
      image: img6,
      description: `
        <span class="font-bold">Leelajournals is both an artist and entrepreneur!</span>  She shares her inspiring journey of building a business around her art, documenting the wins, struggles, and valuable lessons learned. Her authenticity and passion resonate with a highly engaged audience of aspiring business owners worldwide.

      `,
      social: { platform: FaYoutube, handle: "@Leelajournals " },
    },
  ];



  return (
    <div className="bg-black my_container py-10">
      <h1 className="md:text-[52px] text-[38px] text-center lg:max-w-[1150px] mx-auto pb-[50px] text-white font-semibold px-4">
        Creators we worked with.
      </h1>
      <div className="mx-auto flex flex-col lg:flex-row lg:justify-between items-center px-[15px] lg:items-start">
        <Swiper
          className="flex justify-center"
          modules={[FreeMode, Autoplay]}
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            20: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {creators.map((creator, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                onClick={() => handleCardClick(index)}
                className="w-full mx-auto xl:max-w-[380px] lg:max-w-[320px] flex flex-col justify-center items-center my-4 p-6 border bg-white border-white rounded-[25px] gap-[30px] shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <h2 className="text-[32px] md:text-[48px] font-semibold text-[#431CBC]">
                    {creator.name}
                  </h2>
                  <h4 className="text-[18px] md:text-[23px] text-[#B7B7B7]">
                    {creator.subscribers}
                  </h4>
                </div>

                <img
                  src={creator.image}
                  className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full"
                  alt={creator.name}
                />
                {!showParagraph[index] && (
                  <div className="flex justify-start w-full">
                    <HiArrowLongRight className="text-[30px] md:text-[40px] rotate-[-45deg]" />
                  </div>
                )}

                {showParagraph[index] && (
                  <div>
                    <p
                      className="mt-4 text-center text-black"
                      dangerouslySetInnerHTML={{ __html: creator.description }}
                    ></p>
                    <div className="flex justify-center items-center pt-[50px]">
                      <creator.social.platform className="text-red-500 pr-[10px] text-[25px] md:text-[35px]" />
                      <p className="text-black font-bold">
                        {creator.social.handle}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CreatorCard;
