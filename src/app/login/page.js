import Container from '@/components/CommonComponent/Container/Container';
import React from 'react';
import login from '../../../public/image/other/IMAGE (15).png'
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { FaEye } from 'react-icons/fa';
const page = () => {
     return (
          <div className=' py-24'>

               <Container>
                    <div className='grid md:grid-cols-2  gap-3 md:gap-8 '>


                         <div>
                              <div>
                                   <SectionTitle title_1={"লগইন"} title_2={"করুন"} paragraph={"আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না"} size={"text-[34px]"} alignment={"text-center"}></SectionTitle>
                              </div>
                              <div>
                                   <div className=" w-full py-3">
                                        <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার ইমেইল এড্রেস <span className=' text-[#FF6B6B]'>*</span> </h1>
                                        <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।</p>

                                        <input className=" w-full  text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B] " type="email" name="" id="" />
                                   </div>
                                   <div className=" w-full py-3">
                                        <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">পাসওয়ার্ড দিন  <span className=' text-[#FF6B6B]'>*</span>
                                        </h1>
                                        <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি লেটার এবং 1 টি নাম্বার থাকতেই হবে।
                                        </p>
                                        <div className="  cursor-pointer relative ">
                                             <input className="  relative w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B]" type="password" name="" id=""  />
                                             <div className=" absolute  top-6 right-2">
                                                  <FaEye size={20} />
                                             </div>
                                        </div>
                                       
                                   </div>
                                   <div className=' flex justify-between items-center gap-2'>
                                        <div className=" py-2">
                                             <div className=" inline-block my-2 sm:my-0 ">
                                                  <button className="   text-[#FFF]    cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                                                       তথ্য জমা দিন
                                                  </button>
                                             </div>
                                        </div>
                                        <p className=' text-[#38BDF8] text-[16px] font-normal ' href="#"> পাসওয়ার্ড ভুলে গেছেন?</p>
                                   </div>
                              </div>

                         </div>
                         <div>
                              <div>
                                   <Image src={login} alt='img' />
                              </div>
                         </div>

                    </div>
               </Container>

          </div>
     );
};

export default page;