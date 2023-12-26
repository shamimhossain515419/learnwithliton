import Container from '@/components/CommonComponent/Container/Container';
import React from 'react';

const page = () => {
     return (
          <div>

               <div>
                    <div>
                          {/* enrolment title? */}
                         <div className=" border-b border-[#F8FAFC14] text-start py-3">
                              <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">পাসওয়ার্ড পরিবর্তন করুন</h1>
                              <p className="text-start  font-medium text-[13px] text-[#6B7280]">আপনার পাসওয়ার্ড কারো সাথে শেয়ার করবেন না</p>
                         </div>

                    </div>
                     {/* enrolment from  */}
                    <div className=" w-full py-3">
                         <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার ইমেইল এড্রেস <span className=' text-red-500'>*</span> </h1>
                         <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">যে ইমেইল এড্রেস দিয়ে একাউন্ট খুলেছিলেন</p>

                         <input
                              className="w-full md:w-[50%] text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-3 rounded-[4px] bg-[#1E293B] "
                              type="email"
                              name=""
                              id=""
                              placeholder="exam@gmail.com"
                         />
                    </div>

                    <div className=" py-4 mt-6">
                         <div className=" inline-block my-2 sm:my-0 ">
                              <button className="  text-[#FFF]  cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                              পাসওয়ার্ড রিসেট লিঙ্ক পাঠান  </button>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default page;