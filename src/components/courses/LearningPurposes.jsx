import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SiFuturelearn } from "react-icons/si";

const LearningPurposes = ({ learning_objects }) => {
  return (
    <div className=" pt-10">
      <SectionTitle
        size={" text-[17px]  md:text-[22px]"}
        title_1={"কোর্সটি যে "}
        title_2={"উদ্দেশ্যে করবেন"}
      />
      {/* inside  contentt section  */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {learning_objects?.map((item, index) => (
          <div
            key={index}
            className=" border bg-primary-muted border-white-muted text-center flex  flex-col items-center justify-center gap-3 p-4 rounded-lg "
          >
            <SiFuturelearn className="text-[25px]   rotate-[42deg] text-blue-base md:text-[30px]  lg:text-[40px]" />
            <p className="text-[17px] text-white-base font-medium">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPurposes;
