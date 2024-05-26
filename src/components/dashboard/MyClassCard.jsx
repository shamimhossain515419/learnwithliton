import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MyClassCard = ({ course }) => {
  return (
    <div>
      <div>
        <div className=" grid grid-cols-2 gap-3 border border-[#F8FAFC14] rounded-lg overflow-hidden">
          <div>
            <Image
              className=" w-full h-[200px] object-fill"
              width={300}
              height={200}
              src={`/uploads/courses/${course?.course?.photo_url}`}
              alt="image"
            />
          </div>
          <div className="p-3 flex flex-col justify-between">
            <div>
              <h1 className="text-[18px] capitalize md:text-[22px] leading-7  lg:text-[px] text-white-base">
                {" "}
                {course?.course?.name}
              </h1>
              <h4 className="text-[15px] text-blue-base capitalize md:text-[18px] leading-7  pt-3 lg:text-[px] ">
                {" "}
                {course?.mentors?.[0]?.name}
              </h4>
              {/* data  */}
              <div className=" flex items-center justify-between gap-5 mt-5">
                <div className="h-[10px] w-full  bg-primary-muted rounded-full overflow-hidden ">
                  <div
                    className="h-full bg-blue-base transition-all duration-500"
                    style={{ width: `${80}%` }}
                  ></div>
                </div>
                <div>
                  <p className="text-white-base "> 80% </p>
                </div>
              </div>
            </div>
            <div className="pt-3 ">
              <Link
                href={`/courses/${course?.id}`}
                className=" group py-2 text-white-base bg-[#1F273D]  rounded  flex items-center gap-4 justify-center text-center w-full "
              >
                {" "}
                <span>শুরু করা যাক</span>
                <FaArrowRightLong className="text-[18px]  group-hover:translate-x-3 duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
