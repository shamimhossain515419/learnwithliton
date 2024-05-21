import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import CourseFaqsCard from "./CourseFaqsCard";

const CourseFaqs = ({ course_faqs }) => {

  return (
    <div className=" pt-10">
      <SectionTitle
        size={" text-[17px]  md:text-[22px]"}
        title_1={"সচরাচর প্রশ্নগুলোর উত্তর"}
      />
      {/* inside  contentt section  */}
      <div className="  border-x border-t bg-primary-muted border-white-muted  rounded-lg pt-4 ">
        {course_faqs?.map((faq, index) => (
          <CourseFaqsCard faq={faq} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseFaqs;
