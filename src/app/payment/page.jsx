"use client"

import Container from '@/components/CommonComponent/Container/Container';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React, { useEffect, useState } from 'react';

import payment from '../../../public/image/other/image 8.png'
import Image from 'next/image';
import initializeAOS from '@/share/aos/aos';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

   
const PaymentPage = () => {
     useEffect(() => {
          initializeAOS();
     })

     const [phone, setPhone] = useState('');

     const handlePhoneChange = (newPhone) => {
          setPhone(newPhone);
     };
 
     return (
          <div className=' py-28 border-b border-[#F8FAFC14]'>
               <Container>
                    {/* payment title  */}
                    <div>
                         <SectionTitle title_1={"পেমেন্ট"} title_2={"করুন"} paragraph={"কোর্স ফি পরিশোধ করতে আপনার মোবাইল নাম্বার দিন"} size={"text-[34px]"} alignment={'text-center'}></SectionTitle>
                    </div>

                    {/* payment  from  */}
                    <div className=' md:grid md:grid-cols-2 gap-3 xl:gap-6 py-8'>
                         <div>

                              <form action="">
                                   <div className=" w-full py-3">
                                        <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0"> আপনার নিবন্ধিত মোবাইল নাম্বার</h1>
                                        <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">যে মোবাইল নাম্বারটি দিয়ে আপনি নিবন্ধন করেছিলেন কিন্তু পেমেন্ট করেন নি। কান্ট্রি কোড লিখতে হবেনা।</p>
                                        <div className=' mt-4 w-full md:w-[80%]'>
                                             <PhoneInput

                                                  country={'bd'}
                                                  value={phone}
                                                  onChange={handlePhoneChange}
                                                  buttonClass={"customButtonClass"}
                                                  dropdownClass={"customDropdownClass react-tel-input"}
                                                  dropdownStyle={{
                                                       backgroundColor: '#1E293B',
                                                       color: '#FFF',
                                                  }}
                                                  containerClass={'containerClass'}
                                                  buttonStyle={{
                                                       backgroundColor: '#1E293B',
                                                       border: "none",
                                                       outline: "none",

                                                  }}
                                                  containerStyle={{
                                                       backgroundColor: '#1E293B',
                                                       color: '#FFF',
                                                  }}
                                                  searchStyle={{
                                                       backgroundColor: 'none',
                                                       color: 'one',
                                                  }}

                                                  inputStyle={{
                                                       width: "100%",
                                                       backgroundColor: '#1E293B',
                                                       color: '#FFF',
                                                       border: "none",
                                                       borderRadius: '4px',
                                                       outline: 'none',

                                                  }}
                                                  inputProps={{
                                                       autoFocus: true
                                                  }}

                                             />
                                        </div>

                                   </div>
                                   <div className=" py-2">
                                        <div className=" inline-block my-2 sm:my-0 ">
                                             <button className="   text-[#FFF]    cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                                                  তথ্য জমা দিন
                                             </button>
                                        </div>
                                   </div>
                              </form>
                         </div>
                         <div data-aos="zoom-out-left" className=' '>
                              <Image src={payment} alt='image'></Image>
                         </div>
                    </div>
               </Container >

          </div >
     );
};

export default PaymentPage; 