"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";

const CourseFaqsCard = ({ faq }) => {
  const [active, setActive] = useState(false);
  console.log(faq)
  return (
    <div className="px-6 border-b border-white-muted py-5">
      <div
        onClick={() => setActive(!active)}
        className=" flex justify-between items-center cursor-pointer gap-2"
      >
        <h3 className="text-[17px] text-white-base">{faq.title}</h3>
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
          <p className="text-[15px]">{faq.description}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default CourseFaqsCard;
