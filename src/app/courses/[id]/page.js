import AssignmentShowcase from "@/components/courses/AssignmentShowcase";
import CourseFaqs from "@/components/courses/CourseFaqs";
import CoursesBanner from "@/components/courses/CoursesBanner";
import Facilities from "@/components/courses/Facilities";
import InsideThisCourse from "@/components/courses/InsideThisCourse";
import LearningObjects from "@/components/courses/LearningObjects";
import LearningPurposes from "@/components/courses/LearningPurposes";
import Mentors from "@/components/courses/Mentors";
import Prerequisites from "@/components/courses/Prerequisites";
import StudentFeedback from "@/components/courses/StudentFeedback";
import TargetAudience from "@/components/courses/TargetAudience";
async function getData(id) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/courses/get-id-by-single-course?id=${id}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
 const { data } = await getData(params?.id);
 console.log(data)

  return (
    <div className="primaryBg text-[#64748B]   py-16 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9">
        <div className="col-span-1 lg:col-span-2 ">
          <CoursesBanner title={data?.name} description={data?.description} photo_url={data?.photo_url} video_url={data?.video_url} />

          <div className=" flex justify-center items-center">
            <div className="  bg-[#0284c7] text-center text-[18px] rounded-l-md cursor-pointer  py-3 w-full text-white-base">
              কোর্সের বিস্তারিত
            </div>
            <div className="bg-[#0285c732] text-center py-3  text-[18px] cursor-pointer w-full">
              সিলেবাস
            </div>
            <div className="bg-[#0285c732] text-center py-3 text-[18px] cursor-pointer rounded-r-md  w-full ">
              প্রোজেক্ট ও অ্যাসাইনমেন্ট
            </div>
          </div>

          <LearningObjects  learning_objects={data?.learning_objects}  />
          <TargetAudience  targetAudience={data?.targetAudience} />
          <Prerequisites prerequisites={data?.prerequisites} />
          <Facilities facilities={data?.facilities} />
          <LearningPurposes learning_objects={data?.learning_objects}  />
          <AssignmentShowcase targetAudience={data?.assignmentShowcase}  />
          <StudentFeedback student_feedbacks={data?.student_feedbacks} />
          <Mentors  mentors={data?.mentors}  />
          <CourseFaqs course_faqs={data?.course_faqs} />
        </div>
        <div className=" col-span-1">
          <InsideThisCourse id={data?.id} price={data?.price} inside_this_course={data?.inside_this_course} />

          <div className="border bg-primary-muted border-white-muted p-6 rounded-lg mt-10">
            <div className="   grid grid-cols-2 gap-8">
              <div className=" border-r border-white-muted">
                <h1>ভর্তি শেষ</h1>
                <h1>২৫ মে, ২০২৪</h1>
              </div>
              <div>
                <h1>কোর্স শুরু</h1>
                <h1>২৫ মে, ২০২৪</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
