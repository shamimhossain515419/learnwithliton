import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaCheck } from "react-icons/fa";
const InsideThisCourse = ({ inside_this_course,price,id }) => {
  return (
    <div className=" pt-10">
      {/* inside  contentt section  */}
      <div className=" border bg-primary-muted border-white-muted px-8 py-5  rounded-lg ">
        <SectionTitle
          size={" text-[17px]  md:text-[22px]"}
          title_1={"এই কোর্সের ভেতরে  "}
          title_2={"যা যা রয়েছে"}
        />

        <div className=" grid grid-cols-1  items-start sm:grid-cols-2 gap-4">
          {inside_this_course?.map((item, index) => (
            <div
              key={index}
              className=" flex items-center gap-3 text-white-base"
            >
              <div>
                <div className=" w-[10px] h-[10px]  rounded-full bg-blue-base "></div>
              </div>
              <p>{item?.name}</p>
            </div>
          ))}
        </div>
        <div className=" flex justify-between text-white-base items-center gap-5  py-4 mt-3 border-t border-white-muted">
          <h1>কোর্সের মূল্য</h1>
          <p className="text-[25px] font-medium">৳ {price}</p>
        </div>
        <Link
          href={"/"}
          className=" bg-blue-base w-full block rounded text-white-base py-3 text-center px-2
        "
        >
          এখনই ভর্তি হোন{" "}
        </Link>
      </div>
    </div>
  );
};

export default InsideThisCourse;
