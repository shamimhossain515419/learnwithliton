import { FaCheck } from "react-icons/fa6";
import SectionTitle from "../SectionTitle/SectionTitle";

const LearningObjects = ({ learning_objects }) => {
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
          {learning_objects?.map((item, index) => (
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

export default LearningObjects;
