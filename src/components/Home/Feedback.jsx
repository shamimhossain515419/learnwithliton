import React from 'react';
import Container from '../CommonComponent/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';

import feedback1 from '../../../public/image/home/success1.png'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const Feedback = () => {
     return (
          <div className=' py-20  border-b border-[#FFFFFF80]' >

               <Container>

                    <div className=' py-10'>
                         <SectionTitle size={'text-[34px]'} alignment={"text-center"} title_1={"কোর্স সম্পর্কে"} title_2={"লার্নারদের"} title_3={"অভিমত"} paragraph={"লার্নাররা সর্বদাই লার্ন উইথ সুমিত এর প্রতি তাদের ভালবাসা প্রকাশ করেছেন"}></SectionTitle>
                    </div>


                    <div>
                         <ResponsiveMasonry
                              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}

                         >
                              <Masonry gutter={"15px"}>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I have learned a lot of things and gained confidence about redux. The quiz helps me learn from the documentation and the model test helped me practice new things in redux. The code review and result section is the perfect things in this course. every task has been checked and giving reviews about the programmer skills is awesome. I get more confidence when I see the ranking section. Because a lot of good programmers have ranked in this course</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I think this is the most valuable course I have ever taken. After taking this course I know I made the right decision at the right time and I did not lose my money. I got a solution as soon as I asked for help, and their support was sufficient. The content was very premium and the quizzes were mind-blowing. Thanks, LWS Team..</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>খুব অল্প সময়ের মধ্যে রিডাক্সের সবকিছু শিক্ষতে পারছি এটাই বড় পাওনা। এত সুন্দর ভাবে বুঝানোর জন্য ধন্যবাদ জানায় সুমিত দাদাকে। আর এই কোর্স করে আমি আমার বাস্তব জীবনে অনেক উপকৃত হয়েছি।</p>
                                        </div>
                                   </div>

                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I have learned a lot of things and gained confidence about redux. The quiz helps me learn from the documentation and the model test helped me practice new things in redux. The code review and result section is the perfect things in this course. every task has been checked and giving reviews about the programmer skills is awesome. I get more confidence when I see the ranking section. Because a lot of good programmers have ranked in this course</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>Quality not depends on Quantity! এর চাক্ষুষ প্রমাণ সুমিত ভাইয়ের থিংক ইন এ রিডাক্স ওয়ে কোর্সটি। যদি আপনি কোর্সটিকে এর মাত্র ১৯৯৯ টাকা ফি দিয়ে বিচার করেন তাহলে আপনি ষোল আনাই ভুল। সুমিত ভাইয়ের শেখানোর পদ্ধতি নিয়ে নতুন করে কিছুই বলার নেই। বিলাসী নারীদের কাছে অলংকার ( সোনা, হীরা ) যেমন প্রিয় ঠিক তেমনই প্রকৃত লার্নারদের কাছে সুমিত ভাইয়ের টিউটোরিয়াল তেমন প্রিয়। যদি স্পেশালভাবে কিছু বলার থাকে তাহলে আমি বলব LWS এর চমৎকার সাপোর্টের কথা। এইটা আসলেই স্পেশাল ছিল । সুমিত ভাই ও বাকি এডমিন প্যানেল আমাদের সাথে এতটাই আন্তরিক ও ইন্টার‍্যাক্টিভ ছিল যা আপনাকে আমি বলে বুঝাতে পারব না । আর কিছু বলতে চাই না তবে LWS কে একটা ধন্যবাদের আনলিমিটেড প্যাকেজ দিয়ে দিলাম।.</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I have learned a lot of things and gained confidence about redux. The quiz helps me learn from the documentation and the model test helped me practice new things in redux. The code review and result section is the perfect things in this course. every task has been checked and giving reviews about the programmer skills is awesome. I get more confidence when I see the ranking section. Because a lot of good programmers have ranked in this course</p>
                                        </div>
                                   </div>

                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I have learned a lot of things and gained confidence about redux. The quiz helps me learn from the documentation and the model test helped me practice new things in redux. The code review and result section is the perfect things in this course. every task has been checked and giving reviews about the programmer skills is awesome. I get more confidence when I see the ranking section. Because a lot of good programmers have ranked in this course</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>Quality not depends on Quantity! এর চাক্ষুষ প্রমাণ সুমিত ভাইয়ের থিংক ইন এ রিডাক্স ওয়ে কোর্সটি। যদি আপনি কোর্সটিকে এর মাত্র ১৯৯৯ টাকা ফি দিয়ে বিচার করেন তাহলে আপনি ষোল আনাই ভুল। সুমিত ভাইয়ের শেখানোর পদ্ধতি নিয়ে নতুন করে কিছুই বলার নেই। বিলাসী নারীদের কাছে অলংকার ( সোনা, হীরা ) যেমন প্রিয় ঠিক তেমনই প্রকৃত লার্নারদের কাছে সুমিত ভাইয়ের টিউটোরিয়াল তেমন প্রিয়। যদি স্পেশালভাবে কিছু বলার থাকে তাহলে আমি বলব LWS এর চমৎকার সাপোর্টের কথা। এইটা আসলেই স্পেশাল ছিল । সুমিত ভাই ও বাকি এডমিন প্যানেল আমাদের সাথে এতটাই আন্তরিক ও ইন্টার‍্যাক্টিভ ছিল যা আপনাকে আমি বলে বুঝাতে পারব না । আর কিছু বলতে চাই না তবে LWS কে একটা ধন্যবাদের আনলিমিটেড প্যাকেজ দিয়ে দিলাম।</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>খুব অল্প সময়ের মধ্যে রিডাক্সের সবকিছু শিক্ষতে পারছি এটাই বড় পাওনা। এত সুন্দর ভাবে বুঝানোর জন্য ধন্যবাদ জানায় সুমিত দাদাকে। আর এই কোর্স করে আমি আমার বাস্তব জীবনে অনেক উপকৃত হয়েছি।</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I think this is the most valuable course I have ever taken. After taking this course I know I made the right decision at the right time and I did not lose my money. I got a solution as soon as I asked for help, and their support was sufficient. The content was very premium and the quizzes were mind-blowing. Thanks, LWS Team.</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>It was a great experience. I was completey afraid of Redux. But now, I am applying redux confidently. The price of the course was reasonable. And the way of teaching is always excellent. I am not complaining but suggesting that, Assignment Timeline can be more relaxed.</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I think this is the most valuable course I have ever taken. After taking this course I know I made the right decision at the right time and I did not lose my money. I got a solution as soon as I asked for help, and their support was sufficient. The content was very premium and the quizzes were mind-blowing. Thanks, LWS Team.</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I think this is the most valuable course I have ever taken. After taking this course I know I made the right decision at the right time and I did not lose my money. I got a solution as soon as I asked for help, and their support was sufficient. The content was very premium and the quizzes were mind-blowing. Thanks, LWS Team.</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I think this is the most valuable course I have ever taken. After taking this course I know I made the right decision at the right time and I did not lose my money. I got a solution as soon as I asked for help, and their support was sufficient. The content was very premium and the quizzes were mind-blowing. Thanks, LWS Team.</p>
                                        </div>
                                   </div>
                                   <div className='  flex justify-start items-start gap-4  bg-[#1E293B99]  rounded-[12px] p-4 border border-[#F8FAFC14]'>
                                        <div className='w-[40px] h-[40px]'>
                                             <Image className=' w-[40px] h-[40px] rounded-full  object-fill' src={feedback1} alt='image'></Image>
                                        </div>
                                        <div className=' space-y-1 w-full'>
                                             <h1 className=' text-[#F8FAFC] text-[14px] font-semibold capitalize ' > Masud Pervez</h1>
                                             <div className=' flex items-center gap-1'>
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                                  <FaStar className='text-[#FFE81A]' size={14} />
                                             </div>
                                             <p className=' text-[#F8FAFC] text-[14px] font-normal '>I think this is the most valuable course I have ever taken. After taking this course I know I made the right decision at the right time and I did not lose my money. I got a solution as soon as I asked for help, and their support was sufficient. The content was very premium and the quizzes were mind-blowing. Thanks, LWS Team.</p>
                                        </div>
                                   </div>
                              </Masonry>
                         </ResponsiveMasonry>
                    </div>





               </Container>

          </div>
     );
};

export default Feedback;