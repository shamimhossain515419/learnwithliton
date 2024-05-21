"use client";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const AssignmentShowcase = ({ targetAudience }) => {
  console.log(targetAudience);
  const data = [1, 2, 4, 5];
  return (
    <>
      <div className=" pt-10">
        <SectionTitle
          size={" text-[17px]  md:text-[22px]"}
          title_1={"প্রজেক্ট /"}
          title_2={"এসাইনমেন্ট শোকেস"}
        />
        {/* inside  contentt section  */}
        <Swiper
          navigation={{
            prevEl: ".custom-swiper-button-prev-category",
            nextEl: ".custom-swiper-button-next-category",
          }}
          //  setting swiper
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper"
        >
          {/* single slider  */}
          {targetAudience?.map((feedback, i) => (
            <SwiperSlide key={i} className=" min-h-[400px]">
              <div className=" border h-[280px] w-full relative  bg-primary-muted border-white-muted  overflow-hidden rounded-lg ">
                <div className=" w-full ">
                  <Image
                    className=" w-full h-full"
                    width={250}
                    height={250}
                    src={`/uploads/images/${feedback?.photo}`}
                    alt="image"
                  />
                  <h1 className="text-white-base  px-3  py-2 text-[15px] md:text-[25px]  absolute  bottom-0">
                    {" "}
                    {feedback?.name}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AssignmentShowcase;
