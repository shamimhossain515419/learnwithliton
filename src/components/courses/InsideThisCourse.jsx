import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

import { FaCheck } from "react-icons/fa";

const InsideThisCourse = () => {
  return (
    <div className=" pt-10">
      <SectionTitle
        size={" text-[17px]  md:text-[22px]"}
        title_1={"কী কী শিখবেন "}
        title_2={"এ কোর্স থেকে?"}
      />
      {/* inside  contentt section  */}
      <div className=" border bg-primary-muted border-white-muted p-6 rounded-lg ">
        <div className=" grid grid-cols-1  sm:grid-cols-2 gap-4">
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>The Product Development Process</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>From Idea to Execution</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>Validating Your Hypothesis</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>The Product Development Process</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>The Product Development Process</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>The Product Development Process</p>
          </div>
          <div>
            <a className="text-[17px] px-6 text-white-base bg-blue-base py-2 rounded text-center inline-block">
              {" "}
              পুরো সিলেবাস দেখুন{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideThisCourse;
