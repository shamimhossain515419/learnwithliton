import { FaCheck } from "react-icons/fa6";
import SectionTitle from "../SectionTitle/SectionTitle";

const Prerequisites = ({ prerequisites }) => {
  return (
    <div>
      <div className=" pt-10">
        <SectionTitle
          size={" text-[17px]  md:text-[22px]"}
          title_1={"কোর্সটি করার জন্য  "}
          title_2={"আগে কী কী"}
          title_3={" জানা থাকা লাগবে?"}
        />
        {/* inside  contentt section  */}
        <div className=" border bg-primary-muted border-white-muted p-6 rounded-lg ">
          <div className=" grid grid-cols-1  sm:grid-cols-2 gap-4">
            {prerequisites?.map((item, index) => (
              <div
                key={index}
                className=" flex items-center gap-3 text-white-base"
              >
                <div className=" w-[22px] h-[22px] flex justify-center items-center  bg-blue-base  rounded-full  text-white-base  bg-">
                  <FaCheck className="text-[12px] " />
                </div>
                <p>{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prerequisites;
