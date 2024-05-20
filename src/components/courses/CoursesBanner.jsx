import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const CoursesBanner = () => {
  return (
    <div>
      <h1 className="text-[25px] md:text-[35px] text-white-base font-semibold">
        ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট
      </h1>
      <p className="py-1 text-[17px]">
        সফটওয়্যার ও ডিজিটাল প্রোডাক্ট ম্যানেজমেন্টের কোয়ালিফিকেশন অর্জন করুন।
        Pathao-এর হেড অফ প্রোডাক্ট আহমেদ ফাহাদকে এ কোর্সে পাচ্ছেন আপনার
        ইন্সট্রাক্টর হিসাবে।
      </p>
      <div className="relative">
        <Image
          className=" w-full   max-h-[800px] rounded-xl pt-7"
          width={800}
          height={800}
          src={"https://i.ibb.co/7vyLQ86/ap3dmaecaatbxtk9f9k1.webp"}
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
