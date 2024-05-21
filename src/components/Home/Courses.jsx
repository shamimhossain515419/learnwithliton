import React from "react";
import Container from "../CommonComponent/Container/Container";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import reduxImage from "../../../public/image/home/image 3.png";
import CourseCard from "@/ui/loader/cards/CourseCard";

async function getData() {
  const res = await fetch("http://localhost:5000/api/courses/course?name=");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Courses = async () => {
  const {data} = await getData();
  console.log(data)
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
          {
            data?.map((item, index)=><CourseCard item={item} key={index} />)
          }
          
        </div>
      </div>
    </Container>
  );
};

export default Courses;
