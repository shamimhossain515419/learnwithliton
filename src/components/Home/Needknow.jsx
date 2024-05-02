import React from 'react';
import Container from '../CommonComponent/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { BiSolidEdit } from 'react-icons/bi';
import Link from 'next/link';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandVscode } from 'react-icons/tb';

const Needknow = () => {
  return (
    <div className="  py-24 border-t   border-[#FFFFFF4D]">
      <Container>
        <div className=" xl:grid xl:grid-cols-5  gap-6">
          <div className="xl:col-span-2">
            {/* Needknow title  */}
            <SectionTitle
              size={'text-[34px]'}
              alignment={'text-center sm:text-start'}
              title_1={'কোর্স করতে'}
              title_2={'যা জানতে হবে '}
            ></SectionTitle>
            <p className=" text-[17px] font-normal text-center sm:text-start   text-[#94A3B8] py-4">
              এই কোর্সটি একেবারে বিগিনারদের জন্য নয়। কোর্সটি করতে হলে উল্লিখিত
              বিষয়গুলো সম্পর্কে আপনার ধারণা থাকতে হবে। এই কোর্সে ধরে নেয়া হবে
              আপনি বিষয়গুলো জানেন। যদি না জানেন, তাহলে রেকোমেন্ডেড লিঙ্ক থেকে
              শিখে নিতে পারেন।{' '}
            </p>
          </div>
          <div className=" xl:col-span-3 ">
            <div className=" grid   sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {/* Needknow technology  card */}
              <div
                className=" hover:scale-105 duration-300 rounded-lg bg-black p-4  shadow-md"
                style={{
                  boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
                }}
              >
                <div className=" text-center">
                  <div className=" bg-[#EA580C] rounded-full    inline-block   p-3">
                    <FaHtml5 className=" text-white" size={20} />
                  </div>
                </div>
                <h1 className=" heading-16 text-center text-[#E2E8F0] py-1">
                  {' '}
                  বেসিক HTML
                </h1>
                <p className=" heading-14 py-1 text-center ">
                  HTML সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
                </p>
                <div className=" flex justify-center items-center">
                  <div className=" text-center  inline-block">
                    <Link
                      className=" mt-3   rounded-[32px]  text-[#38BDF8] py-2 px-4    border-2 border-[#38BDF8] flex items-center justify-center gap-2"
                      href={'/'}
                    >
                      <BiSolidEdit size={20} />
                      <span className=" text-[14px] font-medium">
                        এখান থেকে শিখুন
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="  hover:scale-105 duration-300 rounded-lg bg-black p-4   shadow-md"
                style={{
                  boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
                }}
              >
                <div className=" text-center">
                  <div className=" bg-[#EA580C] rounded-full    inline-block   p-3">
                    <FaCss3Alt className=" text-[#E2E8F0]" size={20} />
                  </div>
                </div>
                <h1 className=" heading-16 text-center text-[#E2E8F0] py-1">
                  {' '}
                  বেসিক CSS
                </h1>
                <p className=" heading-14 py-1 text-center ">
                  CSS সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
                </p>
                <div className=" flex justify-center items-center">
                  <div className=" text-center  inline-block">
                    <Link
                      className=" mt-3   rounded-[32px]  text-[#38BDF8] py-2 px-4    border-2 border-[#38BDF8] flex items-center justify-center gap-2"
                      href={'/'}
                    >
                      <BiSolidEdit className="text-[#3B82F6]" size={20} />
                      <span className=" text-[14px] font-medium">
                        এখান থেকে শিখুন
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg bg-black p-4  hover:scale-105 duration-300 shadow-md"
                style={{
                  boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
                }}
              >
                <div className=" text-center">
                  <div className=" bg-[#FACC15] rounded-full    inline-block   p-3">
                    <IoLogoJavascript className="" size={20} />
                  </div>
                </div>
                <h1 className=" heading-16 text-center text-[#E2E8F0] py-1">
                  {' '}
                  বেসিক ও মডার্ন JavaScript
                </h1>
                <p className=" heading-14 py-1 text-center ">
                  বেসিক ও মডার্ন JavaScript সম্পর্কে ধারণা থাকতে হবে।
                </p>
                <div className=" flex justify-center items-center">
                  <div className=" text-center  inline-block">
                    <Link
                      className=" mt-3   rounded-[32px]  text-[#38BDF8] py-2 px-4    border-2 border-[#38BDF8] flex items-center justify-center gap-2"
                      href={'/'}
                    >
                      <BiSolidEdit size={20} />
                      <span className=" text-[14px] font-medium">
                        এখান থেকে শিখুন
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg bg-black p-4  hover:scale-105 duration-300 shadow-md"
                style={{
                  boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
                }}
              >
                <div className=" text-center">
                  <div className=" bg-[#38BDF8] rounded-full    inline-block   p-3">
                    <FaReact size={20} />
                  </div>
                </div>
                <h1 className=" heading-16 text-center text-[#E2E8F0] py-1">
                  {' '}
                  বেসিক React.js
                </h1>
                <p className=" heading-14 py-1 text-center ">
                  React.js সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
                </p>
                <div className=" flex justify-center items-center">
                  <div className=" text-center  inline-block">
                    <Link
                      className=" mt-3   rounded-[32px]  text-[#38BDF8] py-2 px-4    border-2 border-[#38BDF8] flex items-center justify-center gap-2"
                      href={'/'}
                    >
                      <BiSolidEdit size={20} />
                      <span className=" text-[14px] font-medium">
                        এখান থেকে শিখুন
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg bg-black p-4  hover:scale-105 duration-300 shadow-md"
                style={{
                  boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
                }}
              >
                <div className=" text-center">
                  <div className=" bg-[#334155] rounded-full    inline-block   p-3">
                    <FaGithub size={20} />
                  </div>
                </div>
                <h1 className=" heading-16 text-center text-[#E2E8F0] py-1">
                  {' '}
                  বেসিক Git/GitHub
                </h1>
                <p className=" heading-14 py-1 text-center ">
                  Git/GitHub সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
                </p>
                <div className=" flex justify-center items-center">
                  <div className=" text-center  inline-block">
                    <Link
                      className=" mt-3   rounded-[32px]  text-[#38BDF8] py-2 px-4    border-2 border-[#38BDF8] flex items-center justify-center gap-2"
                      href={'/'}
                    >
                      <BiSolidEdit size={20} />
                      <span className=" text-[14px] font-medium">
                        এখান থেকে শিখুন
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg bg-black p-4  hover:scale-105 duration-300 shadow-md"
                style={{
                  boxShadow: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
                }}
              >
                <div className=" text-center">
                  <div className=" bg-[#fff] rounded-full    inline-block   p-3">
                    <TbBrandVscode className="text-[#38BDF8]" size={20} />
                  </div>
                </div>
                <h1 className=" heading-16 text-center text-[#E2E8F0] py-1">
                  {' '}
                  VS Code এডিটর
                </h1>
                <p className=" heading-14 py-1 text-center ">
                  VS Code এডিটরে কাজ করার অভ্যাস থাকতে হবে।
                </p>
                <div className=" flex justify-center items-center">
                  <div className=" text-center  inline-block">
                    <Link
                      className=" mt-3   rounded-[32px]  text-[#38BDF8] py-2 px-4    border-2 border-[#38BDF8] flex items-center justify-center gap-2"
                      href={'/'}
                    >
                      <BiSolidEdit size={20} />
                      <span className=" text-[14px] font-medium">
                        এখান থেকে শিখুন
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Needknow;
