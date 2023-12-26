"use client"
import Container from '@/components/CommonComponent/Container/Container';
import Link from 'next/link';
import React from 'react';
import { GrNotes } from "react-icons/gr";
import { FaBarsStaggered, FaBookOpenReader } from "react-icons/fa6";
import { FaLock, FaUserCheck } from "react-icons/fa";
import { MdOutlineCoronavirus } from 'react-icons/md';
import { usePathname } from 'next/navigation';
const Layout = ({ children }) => {
     const pathname = usePathname();
     console.log(pathname);
     return (
          <div className=' pt-10 overflow-hidden border-b border-[#F8FAFC14] min-h-[50vh] '>

               <Container>
                    <div className='md:flex  gap-3 my-5 '>

                         <div className="  w-full md:w-[250px] md:border-r-2 border-[#F8FAFC14]">
                              <div className="sm:w-10/12 ">
                                   <Link  href={'/account'} className={` ${pathname == '/account' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]" } flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `}>
                                        <FaUserCheck className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[14px]  font-semibold">প্রোফাইল</p>
                                   </Link>
                                   <Link  href={'/account/change-password'} className={` ${pathname == '/account/change-password' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]" } flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `}>
                                        <FaLock className=" text-[#38BDF8]" size={16} />
                                        <p className=" text-[14px]  font-semibold  ">পাসওয়ার্ড</p>
                                   </Link>
                                   <Link  href={'/account/transactions'} className={` ${pathname == '/account/transactions' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]" } flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `}>
                                        <GrNotes className=" text-[#38BDF8]" size={16} />
                                        <p className="  text-[14px]  font-semibold ">ট্রানজেকশন</p>
                                   </Link>
                                   <Link  href={'/account/enrolment'} className={` ${pathname == '/account/enrolment' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]" } flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `}>
                                        <FaBookOpenReader className=" text-[#38BDF8]" size={16} />
                                        <p className="  text-[14px]  font-semibold ">এনরোলমেন্ট</p>
                                   </Link>
                                   <Link  href={'/account/certificate'} className={` ${pathname == '/account/certificate' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]" } flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `}>
                                        <MdOutlineCoronavirus className=" text-[#38BDF8]" size={16} />
                                        <p className="  text-[14px]  font-semibold ">কোর্স সার্টিফিকেট</p>
                                   </Link>

                              </div>
                         </div>


                         <div className=' p-3 w-full'>
                              {children}
                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default Layout;