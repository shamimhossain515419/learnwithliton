import { FaCheck } from "react-icons/fa6";
import SectionTitle from "../SectionTitle/SectionTitle";

const Facilities = () => {
  return (
    <div>
    <div className=" pt-10">
      <SectionTitle
        size={" text-[17px]  md:text-[22px]"}
        title_1={"যে সকল সুবিধা পাবেন"}
       />
      {/* inside  contentt section  */}
      <div className=" border bg-primary-muted border-white-muted p-6 rounded-lg ">
        <div className=" grid grid-cols-1  sm:grid-cols-2 gap-4">
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>সফটওয়্যার ও ডিজিটাল প্রোডাক্ট নিয়ে বেসিক আইডিয়া</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>ইন্ডাস্ট্রি এক্সপার্টের বানানো কন্টেন্ট</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>ইন্ডাস্ট্রি এক্সপার্টের বানানো কন্টেন্ট</p>
          </div>
          <div className=" flex items-center gap-3 text-white-base">
            <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
              <FaCheck className="text-[12px] " />
            </div>
            <p>২ বছরের কন্টেন্ট অ্যাক্সেস</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Facilities;