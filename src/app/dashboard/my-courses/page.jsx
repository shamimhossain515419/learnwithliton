"use client";
import Container from "@/components/CommonComponent/Container/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import MyClassCard from "@/components/dashboard/MyClassCard";
import { useFetchUserMyCoursesQuery } from "@/redux/features/enrollment/enrollmentApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  const { data, error } = useFetchUserMyCoursesQuery();
  console.log(data);

  return (
    <Container>
      <div className=" pt-16">
        <SectionTitle
          title_1={"আপনার "}
          title_2={"ক্লাসসমূহ"}
          size={"text-[32px]"}
          alignment={"text-center"}
        />
        <div className=" container py-14">
          {/* my courses  */}
          <div className=" grid grid-cols-2 md:grid-cols-2  gap-7">
            {data?.data?.map((course) => (
              <MyClassCard course={course} key={course?.id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
