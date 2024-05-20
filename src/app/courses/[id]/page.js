import CourseFaqs from "@/components/courses/CourseFaqs";
import CoursesBanner from "@/components/courses/CoursesBanner";
import Facilities from "@/components/courses/Facilities";
import InsideThisCourse from "@/components/courses/InsideThisCourse";
import LearningObjects from "@/components/courses/LearningObjects";
import LearningPurposes from "@/components/courses/LearningPurposes";
import Mentors from "@/components/courses/Mentors";
import Prerequisites from "@/components/courses/Prerequisites";

const page = ({ params }) => {
  const { id } = params;
  return (
    <div className="primaryBg text-[#64748B]   py-16 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9">
        <div className="col-span-1 lg:col-span-2 ">
          <CoursesBanner />

          <div className=" flex justify-center items-center">
            <div className="  bg-[#0284c7] text-white-base text-center text-[18px] rounded-l-md cursor-pointer  py-3 w-full text-white-base">
              কোর্সের বিস্তারিত
            </div>
            <div className="bg-[#0285c732] text-center py-3  text-[18px] cursor-pointer w-full">
              সিলেবাস
            </div>
            <div className="bg-[#0285c732] text-center py-3 text-[18px] cursor-pointer rounded-r-md  w-full ">
              প্রোজেক্ট ও অ্যাসাইনমেন্ট
            </div>
          </div>
          <InsideThisCourse />
          <LearningObjects />
          <Prerequisites />
          <Facilities />
          <LearningPurposes />
          <Mentors />
          <CourseFaqs />
        </div>
        <div className=" col-span-1">{/* <CoursesBanner /> */}</div>
      </div>
    </div>
  );
};

export default page;
