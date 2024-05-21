"use client";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const StudentFeedback = ({ student_feedbacks }) => {
  const data = [1, 2, 4, 5, 6, 7, 8];
  console.log(student_feedbacks)
  return (
    <>
      <div className=" pt-10">
        <SectionTitle
          size={" text-[17px]  md:text-[22px]"}
          title_1={"বহুব্রীহির শিক্ষার্থীরা "}
          title_2={" যা বলছেন"}
        />

        {/* use swiper slider  */}
        <Swiper
          navigation={{
            prevEl: ".custom-swiper-button-prev-category",
            nextEl: ".custom-swiper-button-next-category",
          }}
          //  setting swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper"
        >
          {/* single slider  */}
          {student_feedbacks?.map((feedback, i) => (
            <SwiperSlide key={i}>
              <div className="min-h-[500px] w-full ">
                <div className=" border bg-primary-muted border-white-muted py-6 rounded-lg px-10">
                  <div className=" py-10">
                    <FaQuoteLeft className="text-[25px] md:text-[40px] text-center mx-auto text-blue-base" />
                  </div>
                  <p className="text-center">{feedback?.description}</p>
                  <div className=" flex items-center gap-4 py-5  justify-center">
                    <div>
                      <Image
                        width={50}
                        height={50}
                        className=" w-[50px] h-[50px] rounded-full"
                        src={`/uploads/users/${feedback?.users?.photo}`}
                        alt="image"
                      />
                    </div>
                    <div>
                      <h1 className="text-[15px] md:text-[21px] font-medium text-white-base">
                        {feedback?.users?.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default StudentFeedback;
