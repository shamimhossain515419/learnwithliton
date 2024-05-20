import { FaCheck } from "react-icons/fa6";
import SectionTitle from "../SectionTitle/SectionTitle";


const LearningObjects = () => {
  return (
    <div className=" pt-10">
    <SectionTitle
      size={" text-[17px]  md:text-[22px]"}
      title_1={"কোর্সটি  "}
      title_2={"যাদের জন্য?"}
    />
    {/* inside  contentt section  */}
    <div className=" border bg-primary-muted border-white-muted p-6 rounded-lg ">
      <div className=" grid grid-cols-1  sm:grid-cols-2 gap-4">
        <div className=" flex items-center gap-3 text-white-base">
          <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
            <FaCheck className="text-[12px] " />
          </div>
          <p>সফটওয়্যার প্রোডাক্ট ম্যানেজমেন্টে ক্যারিয়ার গড়তে আগ্রহী ইয়াং প্রফেশনাল</p>
        </div>
        <div className=" flex items-center gap-3 text-white-base">
          <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
            <FaCheck className="text-[12px] " />
          </div>
          <p>ভার্সিটি পর্যায়ের শিক্ষার্থী (যেকোনো ব্যাকগ্রাউন্ডের)</p>
        </div>
       
      </div>
    </div>
  </div>
  );
};

export default LearningObjects;