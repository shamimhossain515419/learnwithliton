import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const Mentors = () => {
  return (
    <>
      <div className=" pt-10">
        <SectionTitle
          size={" text-[17px]  md:text-[22px]"}
          title_1={"আপনি যার কাছ"}
          title_2={" থেকে শিখবেন"}
        />
        {/* inside  contentt section  */}
        <div className=" border bg-primary-muted border-white-muted p-6 rounded-lg ">
          <div className=" flex items-center gap-4">
            <div>
              <Image
                width={90}
                height={90}
                className=" w-[80px] h-[80px] rounded-full"
                src={"https://i.ibb.co/PZrSh6B/profile-1.jpg"}
                alt="image"
              />
            </div>
            <div>
              <h1 className="text-[15px] md:text-[21px] font-medium text-white-base">
                Shamim Hossain
              </h1>
              <p className="text-[14px]">Co-Founder and SVP at Pathao</p>
            </div>
          </div>
          <div className=" border-b border-white-muted my-6"></div>
          <p className="text-[16px] text-white-base">আহমেদ ফাহাদ মাত্র ১৭ বছর বয়স থেকে বাংলাদেশের অন্যতম শীর্ষ স্টার্টআপ Pathao-তে প্রোডাক্ট লিড হিসেবে কাজ করছেন। বর্তমানে তিনি এ কোম্পানির Senior Vice President এবং Head of Product হিসেবে কর্মরত। ঢাকা বিশ্ববিদ্যালয়ের IBA থেকে ফিন্যান্স অ্যান্ড ইকোনমিকস নিয়ে পড়াশোনা করা ফাহাদ ভাইয়া ‘Dhaka Rides’ নামে একটি কারপুলিং প্ল্যাটফর্ম প্রতিষ্ঠা করেছিলেন। এছাড়া, Hackhouse এবং Chaldal-এ ইঞ্জিনিয়ার এবং ডিজাইনারের দায়িত্বও পালন করেছেন।</p>
        </div>
      </div>
    </>
  );
};

export default Mentors;
