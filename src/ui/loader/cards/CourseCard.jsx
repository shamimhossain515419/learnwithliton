import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CourseCard = ({ item }) => {
  return (
    <div className=" border border-[#F8FAFC14] rounded-lg overflow-hidden">
      <div>
        <Image
          className=" w-full h-[200px] object-fill"
          width={300}
          height={200}
          src={`/uploads/courses/${item?.photo_url}`}
          alt="image"
        />
      </div>
      <div className=" py-3 border-b   border-[#FFFFFF80]">
        <div className=" text-white-base flex items-center gap-4 text-[12px] px-4">
          <button className=" bg-[#1F273D] px-3 py-[2px] rounded-md">
            {item?.batch?.[0]?.name}
          </button>
          <button className=" bg-[#1F273D] px-3 py-[2px] rounded-md">
            ৫০ সিট বাকি
          </button>
          <button className=" bg-[#1F273D] px-3 py-[2px] rounded-md">
            {" "}
            ৯ দিন বাকি
          </button>
        </div>
      </div>
      <div className="p-3">
        <h1 className="text-[16px] md:text-[18px] leading-7  lg:text-[px] text-white-base">
          {" "}
          {item?.name}
        </h1>
        <div className="pt-3 ">
          <Link
            href={`/courses/${item?.id}`}
            className=" group py-2 text-white-base bg-[#1F273D]  rounded  flex items-center gap-4 justify-center text-center w-full "
          >
            {" "}
            <span>বিস্তারিত দেখি</span>
            <FaArrowRightLong className="text-[18px]  group-hover:translate-x-3 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
