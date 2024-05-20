import React from "react";
import Container from "../CommonComponent/Container/Container";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import reduxImage from "../../../public/image/home/image 3.png";
import CourseCard from "@/ui/loader/cards/CourseCard";
const getFetch = async () => {
  const response = await fetch("http://localhost:5000/api/courses/course");
  const data = await response.json();
  console.log(data);
  return data;
};
const Courses = async () => {
  const { data } = await getFetch();
  console.log(data);
  return (
    <Container>
      <div className=" my-10">
        <div>
          <Image
            data-aos="fade-up"
            className=" block mx-auto py-3"
            src={reduxImage}
            alt=""
          />
          <div>
            <SectionTitle
              size={"text-[34px]"}
              title_1={"আমাদের "}
              title_2={"কোর্সসমুহ"}
              alignment={"text-center"}
              paragraph={"এই কোর্সে যা যা থাকছে"}
            ></SectionTitle>
          </div>
        </div>

        <div className=" grid grid-cols-4  gap-3">
          <CourseCard />
        </div>
      </div>
    </Container>
  );
};

export default Courses;
