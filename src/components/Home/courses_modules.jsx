'use client';

import React, { useEffect } from 'react';
import reduxImage from '../../../public/image/home/image 3.png';
import moduleImage from '../../../public/image/home/image 2.png';
import moduleBanner from '../../../public/image/home/image 1.png';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { RiCodeSSlashLine } from 'react-icons/ri';

import Image from 'next/image';

import initializeAOS from '../../share/aos/aos';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../CommonComponent/Container/Container';

const Courses_modules = () => {
  useEffect(() => {
    initializeAOS();
  });
  return (
    <div>
      <Container>
        <div className=" mx-4 sm:mx-16  md:mx-24 xl:mx-32 ">
          {/* এই কোর্সে যা যা থাকছে  */}
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
                  size={'text-[34px]'}
                  title_1={'এক নজরে আমাদের'}
                  title_2={'রিডাক্স'}
                  title_3={'কোর্স'}
                  alignment={'text-center'}
                  paragraph={'এই কোর্সে যা যা থাকছে'}
                ></SectionTitle>
              </div>
            </div>

            <div className=" m-2 bg-[#1E293B99]  my-10 py-5  rounded-[12px]  px-3 border border-[#ffffff14]  grid    md:grid-cols-2  xl:grid-cols-3 ">
              <div className="  border-b border-[#F8FAFC14]  flex justify-center items-center gap-2     px-4 md:px-8 py-8 ">
                <div className=" text-center  transform  hover:scale-110   duration-300   ">
                  <GoDeviceCameraVideo
                    className=" block  mx-auto text-[#38BDF8]"
                    size={42}
                  />
                  <h3 className=" text-[#E2E8F0] leading-[24.8px]     font-medium pt-2  text-[16px] pb-1">
                    12 টি মডিউলে 135+ ভিডিও
                  </h3>
                  <p className=" primaryColor text-[16px] m-0">
                    আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি
                    মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।
                  </p>
                </div>
              </div>
              <div className="  border-b md:border-l xl:border-r border-[#F8FAFC14] flex justify-center items-center gap-2     px-4 md:px-8 py-8 ">
                <div className=" text-center transform  hover:scale-110   duration-300  ">
                  <div className="  flex justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="39"
                      viewBox="0 0 42 39"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 39V36C15 36 15 34.2 15 33H1.5L0 31.5V1.5L1.5 0H40.5L42 1.5V29.22L39 26.22V3H3V30H20.19L18.69 31.5L26.19 39H9ZM32.58 39L40.08 31.5L37.95 29.4L33 34.35V15H30V34.32L25.08 29.37L22.95 31.5L30.45 39H32.58Z"
                        fill="#38BDF8"
                      />
                    </svg>
                  </div>
                  <h3 className=" text-[#E2E8F0]     font-medium pt-2  text-[16px] pb-1">
                    30 ঘণ্টার 15GB রেকোর্ডেড কন্টেন্ট
                  </h3>
                  <p className=" primaryColor text-[16px] m-0">
                    সময় এবং ব্যান্ডউইডথ খরচ এর বিষয়টি বিবেচনা করে ভিডিও সাইজ এবং
                    ডিউরেশন অপটিমাইজ করা হয়েছে।
                  </p>
                </div>
              </div>
              <div className="border-b xl:border-r-0 md:border-r  border-[#F8FAFC14] flex justify-center items-center gap-2     px-4 md:px-8 py-8 ">
                <div className=" text-center transform  hover:scale-110   duration-300  ">
                  <div className="  flex justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="36"
                      viewBox="0 0 42 36"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.71 17.097L24.789 2.289L22.755 0L6.819 13.788L2.289 8.292L0 10.326L5.55 16.968L7.71 17.097ZM42 12H17.472L24.393 6H42V12ZM15 18H42V24H15V18ZM42 30H15V36H42V30Z"
                        fill="#38BDF8"
                      />
                    </svg>
                  </div>
                  <h3 className=" text-[#E2E8F0]     font-medium pt-2  text-[16px] pb-1">
                    120+ টি কুইজ
                  </h3>
                  <p className=" primaryColor text-[16px] m-0">
                    আপনারা যেন শেখার সাথে সাথে নিজেদের প্রোগ্রেস যাচাই করতে
                    পারেন সেজন্য প্রতিটি ভিডিও শেষে ব্যাখ্যা ও উত্তর সহ কুইজ
                    থাকবে।
                  </p>
                </div>
              </div>
              <div className="  border-b xl:border-b-0 border-[#F8FAFC14]   flex justify-center items-center gap-2     px-4 md:px-8 py-8 ">
                <div className=" text-center transform  hover:scale-110   duration-300  ">
                  <RiCodeSSlashLine
                    className=" block  mx-auto text-[#38BDF8]"
                    size={42}
                  />
                  <h1 className=" text-[#E2E8F0]     font-medium pt-2  text-[16px] pb-1">
                    10 টি এসাইনমেন্ট
                  </h1>
                  <p className=" primaryColor text-[16px] m-0">
                    প্রতিটি মডিউল শেষেই থাকবে এসাইনমেন্ট যেগুলো আপনারা নিজে
                    করবেন। এসাইনমেন্ট এর সল্যুশন গিটহাবে রিপোজিটরিতে শেয়ার করে
                    দেয়া হবে যেন নিজেরা প্র্যাকটিস করতে পারেন।
                  </p>
                </div>
              </div>
              <div className="  border-b md:border-b-0   md:border-r xl:border-l  border-[#F8FAFC14] flex justify-center items-center gap-2     px-4 md:px-8 py-8 ">
                <div className=" text-center  transform  hover:scale-110   duration-300 ">
                  <FiUsers
                    className=" block  mx-auto text-[#38BDF8]"
                    size={42}
                  />
                  <h3 className=" text-[#E2E8F0]     font-medium pt-2  text-[16px] pb-1">
                    ৫ টি রেকোর্ডেড সেশন
                  </h3>
                  <p className=" primaryColor text-[16px] m-0">
                    এসাইনমেন্টের উপর গুরুত্ত্বপূর্ণ টপিক নিয়ে আলোচনা সহ
                    রেকোর্ডেড সেশন থাকবে যেগুলো দেখে আপনারা নিজে নিজে এসাইনমেন্ট
                    করতে সহযোগিতা পাবেন।
                  </p>
                </div>
              </div>
              <div className=" flex justify-center items-center gap-2     px-4 md:px-8 py-8 ">
                <div className=" text-center transform  hover:scale-110   duration-300  ">
                  <div className="  flex justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="39"
                      viewBox="0 0 42 39"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.5 0H40.5L42 1.5V37.5L40.5 39H1.5L0 37.5V1.5L1.5 0ZM3 12V36H39V12H3ZM3 9H39V3H3V9Z"
                        fill="#38BDF8"
                      />
                    </svg>
                  </div>
                  <h3 className=" text-[#E2E8F0]     font-medium pt-2  text-[16px] pb-1">
                    10 টি প্রজেক্ট
                  </h3>
                  <p className=" primaryColor text-[16px] m-0">
                    পুরো কোর্সটিতে আমরা প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো
                    করেছি। কোর্সে আমরা মিলেমিশে 10 টি প্রজেক্ট করবো। কিছু
                    প্রজেক্ট সরাসরি মডিউলে করে দেখানো হবে এবং কিছু নিজেরা করবেন।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* কোর্সে যে যে মডিউল থাকছে  */}

          <div className=" my-12 py-4">
            <div>
              <Image
                data-aos="fade-up"
                className=" block mx-auto py-3"
                src={moduleImage}
                alt=""
              />
              <div>
                <SectionTitle
                  size={'text-[34px]'}
                  title_1={'কোর্সে যে যে'}
                  title_2={'মডিউল'}
                  title_3={'থাকছে'}
                  alignment={'text-center'}
                  paragraph={'12 টি মডিউলে সাজানো হয়েছে পুরো কোর্সটি'}
                ></SectionTitle>
              </div>
            </div>

            <div className=" my-4 grid md:grid-cols-2  items-start mt-10">
              <div className=" py-3 md:p-8">
                <Image src={moduleBanner} alt="" />
              </div>
              <div className="   pt-10  md:pt-0 moduleScrollBar max-h-[500px] overflow-y-scroll">
                <div className="   relative     ">
                  <div className=" flex gap-3 items-start py-2 ">
                    <div className=" ">
                      <div className=" w-[30px] h-[30px] rounded-full bg-[#075985]  flex justify-center  items-center text-[14px]  secondColor">
                        {' '}
                        1{' '}
                      </div>
                    </div>
                    <div className=" w-full">
                      <h1 className=" text-[#94A3B8] text-[16px] font-semibold">
                        {' '}
                        প্রথম সপ্তাহ
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[13px]   pt-[5px] ">
                        আমরা দুইটি মডিউল শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক
                        বিষয়সমূহ বুঝবো।
                      </p>
                      <div className=" sm:flex items-center flex-wrap gap-4  mt-3  mb-2 ">
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              রিডাক্স ফান্ডামেন্টালস
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="  text-start text-[#64748B] font-normal text-[14px]">
                        4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-3 items-start py-2 ">
                    <div className=" ">
                      <div className=" w-[30px] h-[30px] rounded-full bg-[#075985]  flex justify-center  items-center text-[14px]  secondColor">
                        {' '}
                        2{' '}
                      </div>
                    </div>
                    <div className=" w-full">
                      <h1 className=" text-[#94A3B8] text-[16px] font-semibold">
                        দ্বিতীয় সপ্তাহ
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[13px]   pt-[5px] ">
                        আমরা দুইটি মডিউল শেষ করবো এবং রিয়্যাক্ট-রিডাক্স ব্যবহার
                        করে দুটি প্রজেক্ট করবো।
                      </p>
                      <div className=" sm:flex items-center flex-wrap gap-4  mt-3  mb-2 ">
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              প্রজেক্ট - সিম্পল টুডু এপ্লিকেশন
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              প্রজেক্ট - এডভান্সড টুডু এপ্লিকেশন
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="  text-start text-[#64748B] font-normal text-[14px]">
                        3+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-3 items-start py-2 ">
                    <div className=" ">
                      <div className=" w-[30px] h-[30px] rounded-full bg-[#075985]  flex justify-center  items-center text-[14px]  secondColor">
                        {' '}
                        3{' '}
                      </div>
                    </div>
                    <div className=" w-full">
                      <h1 className=" text-[#94A3B8] text-[16px] font-semibold">
                        {' '}
                        তৃতীয় সপ্তাহ
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[13px]   pt-[5px] ">
                        আমরা দুইটি মডিউল শেষ করবো এবং রিডাক্স টুলকিট নিয়ে
                        বিস্তারিত জানবো ও একটি প্রজেক্ট করবো।
                      </p>
                      <div className=" sm:flex items-center flex-wrap gap-4  mt-3  mb-2 ">
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              প্রজেক্ট - সিম্পল টুডু এপ্লিকেশন
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              প্রজেক্ট - ভিডিও ওয়েবসাইট উইথ রিডাক্স টুলকিট
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="  text-start text-[#64748B] font-normal text-[14px]">
                        প্রায় 5 ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-3 items-start py-2 ">
                    <div className=" ">
                      <div className=" w-[30px] h-[30px] rounded-full bg-[#075985]  flex justify-center  items-center text-[14px]  secondColor">
                        {' '}
                        4{' '}
                      </div>
                    </div>
                    <div className=" w-full">
                      <h1 className=" text-[#94A3B8] text-[16px] font-semibold">
                        {' '}
                        চতূর্থ সপ্তাহ এবং পঞ্চম সপ্তাহ
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[13px]   pt-[5px] ">
                        আমরা দুইটি মডিউল শেষ করবো এবং রিয়াক্ট এর ইকোসিস্টেম এবং
                        রিয়াল লাইভ এ প্রয়োজন এবং অনেক লাইব্রেরি সম্পর্কে জানবো
                      </p>
                      <div className=" sm:flex items-center flex-wrap gap-4  mt-3  mb-2 ">
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              মিডিলওয়্যার
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              রাউট হ্যান্ডলার
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              মিডিলওয়্যার
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="  text-start text-[#64748B] font-normal text-[14px]">
                        3+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-3 items-start py-2 ">
                    <div className=" ">
                      <div className=" w-[30px] h-[30px] rounded-full bg-[#075985]  flex justify-center  items-center text-[14px]  secondColor">
                        {' '}
                        5{' '}
                      </div>
                    </div>
                    <div className=" w-full">
                      <h1 className=" text-[#94A3B8] text-[16px] font-semibold">
                        {' '}
                        ষষ্ঠ সপ্তাহ
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[13px]   pt-[5px] ">
                        আমরা একটি মডিউল শেষ করবো এবং রিয়্যাক্টের বিভিন্ন
                        এন্টি-প্যাটার্ন সম্পর্কে জানবো
                      </p>
                      <div className=" sm:flex items-center flex-wrap gap-4  mt-3  mb-2 ">
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              প্রপ ড্রিলিং & প্রপ প্লোয়িং
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              কম্পোনেন্ট নেস্টিং এবং বড় কম্পোনেন্ট
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              আনওয়ান্টেড প্যারেন্ট ট্যাগস
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              সবকিছু স্টেট হিসেবে রাখা
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="  text-start text-[#64748B] font-normal text-[14px]">
                        একটি প্রোজেক্ট করে দেখানো হবে এবং একটি এসাইনমেন্ট
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-3 items-start py-2 ">
                    <div className=" ">
                      <div className=" w-[30px] h-[30px] rounded-full bg-[#075985]  flex justify-center  items-center text-[14px]  secondColor">
                        {' '}
                        4{' '}
                      </div>
                    </div>
                    <div className=" w-full">
                      <h1 className=" text-[#94A3B8] text-[16px] font-semibold">
                        {' '}
                        চতূর্থ সপ্তাহ এবং পঞ্চম সপ্তাহ
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[13px]   pt-[5px] ">
                        আমরা দুইটি মডিউল শেষ করবো এবং রিয়াক্ট এর ইকোসিস্টেম এবং
                        রিয়াল লাইভ এ প্রয়োজন এবং অনেক লাইব্রেরি সম্পর্কে জানবো
                      </p>
                      <div className=" sm:flex items-center flex-wrap gap-4  mt-3  mb-2 ">
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              মিডিলওয়্যার
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              রাউট হ্যান্ডলার
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block my-2 sm:my-0 ">
                          <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[15px] py-[4px] flex items-center   justify-center  gap-2">
                            <p className=" text-[13px]  text-[#38BDF8]  font-semibold  ">
                              মিডিলওয়্যার
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="  text-start text-[#64748B] font-normal text-[14px]">
                        3+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট
                      </p>
                    </div>
                  </div>

                  <div className=" w-[3px] left-[13px] -z-10  absolute   top-2  h-full bg-[#075985]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses_modules;
