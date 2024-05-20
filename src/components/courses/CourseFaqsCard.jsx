"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";

const CourseFaqsCard = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="px-6 border-b border-white-muted py-3">
      <div
        onClick={() => setActive(!active)}
        className=" flex justify-between items-center cursor-pointer gap-2"
      >
        <h3 className="text-[17px] md:text-[22px]">
          প্রোডাক্ট ম্যানেজমেন্ট কোর্সটা কি শুধু সফটওয়্যার ও ডিজিটাল
          ইন্ডাস্ট্রির জন্য?
        </h3>
        <div
          className={`${
            active
              ? " bg-blue-base text-white-base rotate-180"
              : " bg-blue-muted text-blue-base "
          }  duration-300  w-[25px] h-[25px]  flex justify-center items-center rounded-full `}
        >
          <FaAngleDown />
        </div>
      </div>
      <Collapse isOpened={active}>
        <div className="py-4">
          <p className="text-[15px]">
            হ্যাঁ। পুরো ক্যারিয়ার ট্র্যাকটা টেক ইন্ডাস্ট্রি প্র্যাকটিসের
            ভিত্তিতে বানানো হয়েছে। তাই শুধু সফটওয়্যার ও ডিজিটাল ইন্ডাস্ট্রিতে
            যারা কাজ করতে চান, তাদের জন্য এ ক্যারিয়ার ট্র্যাক কাজে দেবে।
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default CourseFaqsCard;
