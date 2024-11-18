import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import img1 from "../../assets/customer-logo-1.png";
import img2 from "../../assets/customer-logo-2.png";
import img3 from "../../assets/customer-logo-3.png";
import img4 from "../../assets/customer-logo-4.png";
import img5 from "../../assets/customer-logo-5.png";
import img6 from "../../assets/customer-logo-6.png";

function Industry() {
  const logos = [
    { id: 1, src: img1, alt: "Customer logo 1" },
    { id: 2, src: img2, alt: "Customer logo 2" },
    { id: 3, src: img3, alt: "Customer logo 3" },
    { id: 4, src: img4, alt: "Customer logo 4" },
    { id: 5, src: img5, alt: "Customer logo 5" },
    { id: 6, src: img6, alt: "Customer logo 6" },
    { id: 7, src: img1, alt: "Customer logo 1" },
    { id: 8, src: img2, alt: "Customer logo 2" },
    { id: 9, src: img3, alt: "Customer logo 3" },
    { id: 10, src: img4, alt: "Customer logo 4" },
    { id: 11, src: img5, alt: "Customer logo 5" },
    { id: 12, src: img6, alt: "Customer logo 6" },
  ];

  return (
    <div className="bg-black my_container pt-[80px]">
      <h1 className="text-white text-center text-[42px] lg:text-[54px]">
        Trusted by Industry Leaders
      </h1>
      <div className=" mx-auto px-[15px] items-center pt-[30px] pb-[50px] lg:pt-[50px]">
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id} className="flex justify-center">
              <div className="py-[20px] px-[30px] flex justify-center items-center bg-[#181818] h-[120px] hover:border hover:border-white rounded-[10px]">
                <img src={logo.src} alt={logo.alt} className="industry_logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Industry;
