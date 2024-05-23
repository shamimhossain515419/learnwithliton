import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const CoursesBanner = ({title,video_url,photo_url,description}) => {
  return (
    <div>
      <h1 className="text-[25px] md:text-[35px] text-white-base font-semibold">
      {title}
      </h1>
      <p className="py-1 text-[17px]">
        {description}
      </p>
      <div className="relative">
        <Image
          className=" w-full   max-h-[800px] md:h-[500px] rounded-xl pt-7"
          width={800}
          height={600}
          src={`/uploads/courses/${photo_url}`}
          alt="image"
        />
        <div className=" w-[60px] h-[60px]">
          <div className="absolute  top-0 cursor-pointer flex justify-center z-40 items-center h-full w-full">
            <div className=" border-[7px] border-white rounded-full">
              <div className="bg-[#0284c7] flex justify-center items-center  w-[50px] rounded-full h-[50px] ">
                <FaPlay className=" text-white-base text-[17px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesBanner;
