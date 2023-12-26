import React from 'react';

const page = () => {
     return (
          <div>
               <div>
                    {/* enrolment title   */}
                    <div className=" border-b border-[#F8FAFC14] text-start py-3">
                         <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">কোর্স এনরোলমেন্ট</h1>
                         <p className="text-start  font-medium text-[13px] text-[#6B7280]">আপনি আমাদের প্লাটফর্মে যে কোর্স গুলোতে এনরোল করেছেন</p>
                    </div>



                    <div className='   mt-12 border border-[#F8FAFC14] rounded-md  p-4'>
                         <table class="min-w-full border border-[#F8FAFC14] text-white">
                              {/* enrolment table  */}
                              <thead>
                                   <tr>
                                        <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium  text-start py-2 px-4">কোর্স</th>
                                        <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium  text-start py-2 px-4">এনরোলমেন্টের সময়</th>
                                        <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium  text-start py-2 px-4">এনরোলমেন্ট আইডি</th>
                                        <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium  text-start py-2 px-4">ব্যাচ</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                        <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">থিংক ইন এ রিডাক্স ওয়ে</td>
                                        <td class="border border-[#F8FAFC14] text-[15px]  font-medium  text-[#F8FAFC] py-2 px-4">08 Aug 2022 09:00:24 PM তারিখে</td>
                                        <td class="border border-[#F8FAFC14] text-[15px]  font-medium  text-[#38BDF8] py-2 px-4">LWSCTXN-0FWSDFDR</td>
                                        <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] py-2 px-4"> batch-2</td>
                                   </tr>

                              </tbody>
                         </table>
                    </div>

               </div>
          </div>
     );
};

export default page;