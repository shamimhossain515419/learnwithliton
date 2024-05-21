import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const Mentors = ({ mentors }) => {
  return (
    <>
      <div className=" pt-10">
        <SectionTitle
          size={" text-[17px]  md:text-[22px]"}
          title_1={"আপনি যার কাছ"}
          title_2={" থেকে শিখবেন"}
        />
        {/* inside  contentt section  */}
        <div>
          {mentors?.map((mentor, index) => (
            <div
              key={index}
              className=" border bg-primary-muted border-white-muted p-6 rounded-lg "
            >
              <div className=" flex items-center gap-4">
                <div>
                  <Image
                    width={90}
                    height={90}
                    className=" w-[80px] h-[80px] rounded-full"
                    src={`/uploads/mentors/${mentor?.photo}`}
                    alt="image"
                  />
                </div>
                <div>
                  <h1 className="text-[15px] md:text-[21px] font-medium text-white-base">
                    {mentor?.name}
                  </h1>
                  <p className="text-[14px]">{mentor?.about}</p>
                </div>
              </div>
              <div className=" border-b border-white-muted my-6"></div>
              <p className="text-[16px] text-white-base">
                {mentor?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mentors;
