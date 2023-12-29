"use client"
import React, { useState } from 'react';
import Container from '../CommonComponent/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FAQData } from '@/utilis';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Collapse } from 'react-collapse';

const FAQ = () => {

     const [active, setActive] = useState(0);
     const handleToggle = (id) => {
          setActive((prevActive) => (prevActive === id ? null : id));
     };
     return (
          <div className=' py-20 md:py-28 bg-[#0F172A]'>

               <Container>
                    <div>
                         <div className=' grid md:grid-cols-2 gap-10 '>
                              <div className='  flex justify-start items-end'>
                                   <div>
                                        {/* FAQ  title  */}
                                        <div className='max-w-[450px]'>
                                             <SectionTitle size={"text-[34px]"} title_1={"সচরাচর জানতে চাওয়া"} title_2={"প্রশ্নের উত্তর"}></SectionTitle>
                                        </div>

                                        <div>
                                             <p className=' text-[#94A3B8]    text-[18px] font-normal mt-4 '>আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং আপনার মূল্যবান সময় বেঁচে যাবে।</p>
                                        </div>
                                   </div>

                              </div>
                              <div>
                                   {/* FAQ  Question  */}
                                   <div className=' h-[400px] overflow-y-scroll FAQscroll'>
                                        {FAQData?.map(item => <div className=' px-2  border-b border-[#F8FAFC14]' key={item?.id}>
                                             <div onClick={() => handleToggle(item?.id)} className={` ${active == item?.id ? " bg-[#0284C7] text-white" : ""} cursor-pointer flex   hover:bg-[#0284C7] text-[#94A3B8] hover:text-[#fff]  duration-200  p-2 py-4   justify-between items-center  gap-4`}>
                                                  <h1 className=' text-[18px]    font-medium '> {item?.title} </h1>
                                                  <div>
                                                       {
                                                            active == item?.id ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />
                                                       }
                                                  </div>
                                             </div>
                                             <div className='' >

                                                  <Collapse isOpened={active === item?.id}>
                                                       <p className='text-[#94A3B8] leading-[24px]  duration-500 text-[16px] font-normal py-2' > {item?.paragraph} </p>
                                                  </Collapse>

                                             </div>
                                        </div>)}
                                   </div>

                              </div>
                         </div>
                         <div></div>
                    </div>

               </Container>

          </div>
     );
};

export default FAQ;