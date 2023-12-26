import React from 'react';
import Container from '../CommonComponent/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import success1 from '../../../public/image/home/success1.png'
import { FaGraduationCap } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { FiHome } from 'react-icons/fi';

const Success_story = () => {
     return (
          <div className=' bg-[#1F273D] py-20'>
               <div className=' mt-14'>

                    <Container>
                         <div>
                              {/* success story title  */}
                              <SectionTitle title_1={'কোর্স'} title_2={"সাকসেস"} title_3={"স্টোরি"} paragraph={"যাদের চাকরি প্রাপ্তিতে আমাদের কোর্স সাহায্য করেছে"} alignment={"text-center"} size={"text-[34px]"}> </SectionTitle>


                              <div className=' grid   sm:grid-cols-2  xl:grid-cols-3  gap-2  sm:gap-2 md:gap-5 mt-14'>
                                    {/* success story card  */} 
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex py-2 items-center gap-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex py-2 items-center gap-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Debasree Bhowmik</h1>

                                                  <div className=' text-[#94A3B flex py-2 items-center gap-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> National Institute of Technology</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex py-2 items-center gap-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex items-center gap-2 py-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> National Institute of Technology</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex items-center gap-2 py-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex items-center gap-2 py-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex items-center gap-2 py-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                                   <div className=' p-4 md:p-5 rounded-[12px]  flex items-center gap-4 justify-start  bg-[#0B1120]  border border-[#F8FAFC14]'>
                                        <div>
                                             <Image src={success1} alt='image'></Image>
                                        </div>
                                        <div>
                                             <div>
                                                  <p className=' text-[#94A3B8] text-[14px] font-normal'>Junior Frontend Engineer</p>
                                                  <h1 className=' capitalize text-[#F8FAFC] text-[16px] pt-1 '>Ariful Islam</h1>

                                                  <div className=' text-[#94A3B flex py-2 items-center gap-2'>

                                                       <FiHome className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> HypeScout</p>
                                                  </div>
                                                  <div className=' text-[#94A3B8] flex items-center gap-2' >
                                                       <FaGraduationCap className=' text-[#FFFFFF]' size={20} />
                                                       <p className='text-[#94A3B8] text-[14px] font-normal'> Cumilla Victoria Govt. College (NU)</p>
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className=' flex justify-center items-center  mt-6 '>
                                   <button className=' rounded-[32px] text-[16px] text-[#fff]  font-medium px-8 py-[10px] bg-[#0284C7]'>
                                        আরো সাকসেস স্টোরি দেখুন
                                   </button>
                              </div>
                         </div>
                    </Container>

               </div>

          </div>
     );
};

export default Success_story;