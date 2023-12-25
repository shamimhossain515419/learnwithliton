import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../CommonComponent/Container/Container';
import Rectangle from '../../../public/image/home/instructor.png'
import Image from 'next/image';

const Instructor = () => {
     return (
          <div className=' py-20 bg-[#0F172A ]'>


               <div>
                    <SectionTitle alignment={"text-center"} size={"text-[34px]"} title_1={'কোর্স ইন্সট্রাক্টর'}></SectionTitle>
               </div>


               <Container>

                    <div className='  md:grid md:grid-cols-2 gap-5 py-16'>
                         <div className=' mx-auto'>
                              <div className=" relative">

                                   <div className="   relative top-0   z-0 mx-auto h-[300px] w-[200px] border-4 border-white !bg-[#2c9ecf] lg:-bottom-3 lg:h-[350px] lg:w-[280px]  rounded-[10px]">   </div>
                                   <div className='box-border block  absolute  right-[60px] -top-[48px] lg:w-[280px] w-[200px]  h-auto bg-none opacity-100 border-0 m-0 p-0 max-w-full'>
                                        <Image className='  h-[320px]  lg:h-[380px] w-full' src={Rectangle} alt='image'></Image>
                                   </div>
                              </div>
                         </div>
                         <div className=' mt-10  md:mt-0 md:border-l-2 sm:pl-7 md:border-[#FACC15] '>
                              <div>
                                   <div>

                                        <p className=' heading-16 '>সুমিত সাহা একজন প্রযুক্তি উদ্যোক্তা। বুয়েটে কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং নিয়ে পড়া অবস্থায় ২০০৮ সালে তিনি প্রতিষ্ঠা করেন বাংলাদেশের প্রথম ডিজিটাল এজেন্সি - অ্যানালাইজেন। প্রোগ্রামিং এর প্রতি ভালবাসা এবং মানুষকে শেখানোর প্রতি আগ্রহ থেকে এরপরে তিনি ২০২০ সালে প্রতিষ্ঠা করেন লার্ন উইথ সুমিত প্লাটফর্ম যেখানে প্রায় ৩৫০+ প্রোগ্রামিং রিলেটেড ভিডিও টিউটোরিয়াল রয়েছে। লার্ন উইথ সুমিত ইউটিউব চ্যানেল এবং পাবলিক ফেসবুক গ্রুপ থেকে প্রায় এক লক্ষেরও বেশি মানুষ ফ্রি প্রোগ্রামিং শিখছে।</p>
                                        <p className=' heading-16  mt-2  '>তিনি নিজে একজন ফুল স্ট্যাক ওয়েব ডেভেলপার ও সফটওয়্যার আর্কিটেক্ট এবং দীর্ঘ 14 বছর ধরে তিনি ওয়েব ডেভেলপমেন্ট ও সফটওয়্যার পেশার সাথে জড়িত।</p>
                                   </div>
                                   <div className=' my-2 mt-4 text-[#F8FAFC]'>

                                        <h1 className=' tex-[14px] font-medium '>সুমিত সাহা</h1>
                                        <p>প্রতিষ্ঠাতা - লার্ন উইথ সুমিত</p>
                                   </div>
                                   <p className=' mt-20 text-[#64748B]   font-normal'>ট্রেড লাইসেন্স - TRAD/DNCC/009595/2022</p>
                              </div>
                         </div>
                    </div>
               </Container>




          </div>
     );
};

export default Instructor;


