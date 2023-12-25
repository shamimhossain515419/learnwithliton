import Container from '@/components/CommonComponent/Container/Container';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';

import   payment from '../../../public/image/other/image 8.png'
import Image from 'next/image';

const page = () => {
     return (
          <div className=' py-28'>
               <Container>

                    <div>
                         <SectionTitle title_1={"পেমেন্ট"} title_2={"করুন"} paragraph={"কোর্স ফি পরিশোধ করতে আপনার মোবাইল নাম্বার দিন"} size={"text-[34px]"} alignment={'text-center'}></SectionTitle>
                    </div>



                    <div className=' md:grid md:grid-cols-2 gap-3 xl:gap-6 py-8'>
                         <div>
                              <div className=" w-full py-3">
                                   <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার নিবন্ধিত মোবাইল নাম্বার</h1>
                                   <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">যে মোবাইল নাম্বারটি দিয়ে আপনি নিবন্ধন করেছিলেন কিন্তু পেমেন্ট করেন নি। কান্ট্রি কোড লিখতে হবেনা।</p>

                                   <input className=" w-full text-[#64748B] md:pl-6 my-2 outline-none border-none p-3 rounded-[4px] bg-[#1E293B] " type="text" name="" id="" placeholder="Ex: MD. LITON HOSSAIN" />
                              </div>

                              <div className=" py-2">
                                   <div className=" inline-block my-2 sm:my-0 ">

                                        <button className="   text-[#FFF]    cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                                             তথ্য জমা দিন

                                        </button>
                                   </div>
                              </div>

                         </div>
                         <div>
                               <Image src={payment} alt='image'></Image>
                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default page; 