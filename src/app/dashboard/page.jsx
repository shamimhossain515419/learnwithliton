
import Container from '@/components/CommonComponent/Container/Container';
import React from 'react';
import { MdArrowDownward } from "react-icons/md"
export const generateMetadata = () => {
     return {
          title: " Dashboard | Asian It"
     }
}
const page = () => {
     return (
          <div className=' py-20  secondBg  border-b   border-[#F8FAFC14] '>

               <Container>
                    {/* কোর্স অগ্রগতি   */}
                    <div className=' py-3 flex justify-between gap-3  items-center'>
                         <h1 className=' heading-18 '> কোর্স অগ্রগতি - Batch-2 </h1>
                         <button className='bg-gradient-to-r from-[#0a8a63] to-[#1971c2] text-white-base text-[16px] font-normal   rounded-2xl px-3 py-[6px]'>কোর্স সার্টিফিকেট</button>
                    </div>

                    <div className='  grid md:grid-cols-3 gap-5   bg-[#0F172A]   rounded-lg border border-[#F8FAFC14]'>
                         <div className=' p-4 md:p-6 flex justify-between  items-end gap-3'>
                              <div>
                                   <h1 className='   heading-16 '>মডিউল শেষ করেছেন</h1>
                                   <p className=' heading-14  pt-2'>  <span className=' text-[24px] font-bold  text-[#38BDF8]'>1 টি </span> (বাকি আছে 13 টি)</p>
                              </div>
                              <div className=' inline-block'>
                                   <div className=' px-2 rounded-3xl   bg-[#FEE2E2] flex justify-center items-center gap-1 text-red-500' >
                                        <MdArrowDownward />
                                        <span>7%</span>
                                   </div>
                              </div>
                         </div>
                         <div className=' p-4 md:p-6 md:border-l  border-t  md:border-t-0  border-[#F8FAFC14] flex justify-between  items-end gap-3'>
                              <div>
                                   <h1 className='   heading-16 '>মডিউল শেষ করেছেন</h1>
                                   <p className=' heading-14  pt-2'>  <span className=' text-[24px] font-bold  text-[#38BDF8]'>1 টি </span> (বাকি আছে 13 টি)</p>
                              </div>
                              <div className=' inline-block'>
                                   <div className=' px-2 rounded-3xl   bg-[#FEE2E2] flex justify-center items-center gap-1 text-red-500' >
                                        <MdArrowDownward />
                                        <span>7%</span>
                                   </div>
                              </div>
                         </div>
                         <div className=' p-4 md:p-6 md:border-l  border-t  md:border-t-0 border-[#F8FAFC14]  flex justify-between  items-end gap-3'>
                              <div>
                                   <h1 className='   heading-16 '>মডিউল শেষ করেছেন</h1>
                                   <p className=' heading-14  pt-2'>  <span className=' text-[24px] font-bold  text-[#38BDF8]'>1 টি </span> (বাকি আছে 13 টি)</p>
                              </div>
                              <div className=' inline-block'>
                                   <div className=' px-2 rounded-3xl   bg-[#FEE2E2] flex justify-center items-center gap-1 text-red-500' >
                                        <MdArrowDownward />
                                        <span>7%</span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* কুইজ রিপোর্ট সামারি */}

                    <div class="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 py-24">
                         <div className='  h-full w-full'>
                              <h1 className=' heading-18'>কুইজ রিপোর্ট সামারি</h1>
                              <div className="flex mt-3  h-full  text-white-base flex-col justify-center rounded-lg border  border-[#F8FAFC14]  bg-[#0F172A]  px-2 py-4 text-center   sm:p-6">
                                   <p>কোন কুইজে অংশগ্রহণ করেন নি!  </p>
                              </div>
                         </div>
                         <div className='h-full w-full'>
                              <div className=' flex justify-between  items-center gap-3 pb-3'>
                                   <h1 className='  heading-18'>কুইজ মার্কস</h1>
                                   <p className=' text-[12px] font-normal  text-[#64748B]'>কমপক্ষে 70% মার্ক পেলে সবুজ দেখানো হয়েছে</p>
                              </div>
                              <div className=' py-3  px-3 md:px-20 rounded-md text-[#94A3B8] border h-full   border-[#F8FAFC14]  bg-[#0F172A] '>
                                   <div className=' flex gap-5 h-full   flex-wrap '>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>
                                        <div className=" cursor-pointer text-1 flex h-4 w-5 items-center justify-center rounded border  border-[#F8FAFC14] bg-slate-50 text-sm dark:bg-slate-800"></div>

                                   </div>

                              </div>
                         </div>
                    </div>

                    {/* কুইজ রিপোর্ট সামারি  */}


                    <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-10 pt-24 pb-0  ">

                         <div className='col-span-2   h-full w-full '>
                              <div className=''>
                                   <h1 className=' heading-18'>কুইজ রিপোর্ট সামারি</h1>
                                   <div className=' mt-5   h-full  p-2 md:p-4 rounded-lg  border border-[#F8FAFC14] '>
                                        <div>
                                             <p className=' text-end text-[14px] text-[#64748B] font-normal py-2' >* এসাইনমেন্টে ইন্সট্রাকটরের মতামত দেখতে, সংশ্লিষ্ট লেসনের এসাইনমেন্ট ট্যাব দেখুন* </p>
                                             <div>
                                                  {/* dashboard table  */}
                                                  <table class="min-w-full border border-[#F8FAFC14] text-white-base">
                                                       <thead>
                                                            <tr>
                                                                 <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">এসাইনমেন্ট</th>
                                                                 <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">নাম্বার</th>
                                                                 <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">জমার সময়</th>
                                                                 <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">ডেডলাইন</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                            <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8] cursor-pointer py-2 px-4">Batch 2 - Assignment 1 - Scoreboard Application</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">-/100</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#94A3B8] py-2 px-4">জমা দেননি</td>
                                                                 <td class="border border-[#F8FAFC14] text-[12px]  font-medium  text-[#F87171] py-2 px-4">Batch 2 - Assignment 3 - Product Cart</td>
                                                            </tr>
                                                       </tbody>
                                                  </table>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>

                         <div className='col-span-1 h-full w-full  '>
                              <h1 className=' heading-18'>কুইজ রিপোর্ট সামারি</h1>
                              <div className='flex mt-5  h-[90%]  text-white-base  items-center justify-center rounded-lg border  border-[#F8FAFC14]  bg-[#0F172A]  px-2 py-4 text-center   sm:p-6'>
                                   <h1 className=' heading-18'>কুইজ রিপোর্ট সামারি</h1>
                              </div>
                         </div>
                    </div>



               </Container>


          </div>
     );
};

export default page;