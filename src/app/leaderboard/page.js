import Container from '@/components/CommonComponent/Container/Container';
import React from 'react';

import image1 from '../../../public/image/other/IMAGE (17).png'
import image2 from '../../../public/image/other/IMAGE (16).png'
import image3 from '../../../public/image/other/IMAGE (18).png'
import image4 from '../../../public/image/other/IMAGE (19).png'
import image5 from '../../../public/image/other/IMAGE (20).png'
import image6 from '../../../public/image/other/IMAGE (21).png'
import rank from '../../../public/image/other/Frame (7).svg'
import Image from 'next/image';

const page = () => {
     return (
          <div className=' py-20 '>

               <Container>
                    <div>
                         <h1 className=' heading-18'>লিডারবোর্ড - থিংক ইন এ রিডাক্স ও    য়ে</h1>
                         <div className='border border-[#F8FAFC14] p-1  md:p-3 rounded-md mt-5'>
                              <h2 className=' border-b  pb-2 border-[#F8FAFC14]  text-[#F8FAFC] text-[16px] font-medium '>লিডারবোর্ড - থিংক ইন এ রিডাক্স ওয়ে</h2>

                              <div>
                                   {/* leader board table  */}
                                   <table class="min-w-full border border-[#F8FAFC14] text-white">
                                        <thead>
                                             <tr>
                                                  <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium  text-start py-2 px-4">র‍্যাঙ্ক</th>
                                                  <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium  text-start py-2 px-4">নাম</th>
                                                  <th class="border  !hidden lg:!table-cell  border-[#F8FAFC14] text-white text-[13px] text-center  font-medium  py-2 px-4">কুইজ থেকে প্রাপ্ত নাম্বার</th>
                                                  <th class="border  !hidden lg:!table-cell border-[#F8FAFC14] text-white text-[13px]  text-center font-medium   py-2 px-4">এসাইনমেন্ট থেকে প্রাপ্ত নাম্বার</th>
                                                  <th class="border border-[#F8FAFC14] text-white text-[13px]  font-medium   text-center py-2 px-4">মোট নাম্বার</th>
                                             </tr>
                                        </thead>
                                        {/* table data  */}
                                        <tbody>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[12px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       <Image src={rank} alt='rank'></Image>    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image1} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Mks Tamin</p>
                                                  </td>
                                                  <td class="border  !hidden lg:!table-cell  border-[#F8FAFC14] text-[16px] text-center  font-medium  text-[#F8FAFC] py-2 px-4">675</td>
                                                  <td class="border !hidden lg:!table-cell border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] py-2 px-4">1161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  text-center font-medium   text-[#38BDF8] py-2 px-4">1836</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       2    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image2} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>MD OBAIDUL ISLAM</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">65</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">186</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       3    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image3} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Masum Ali</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       4   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image4} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Golam Rabbani</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       5   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Fahim Hasan Mehedi</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       6   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Marzuk Bin Zafar</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>

                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       7   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image2} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>MD OBAIDUL ISLAM</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">65</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">186</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       8    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image3} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Masum Ali</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       9   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image4} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Golam Rabbani</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       10    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Fahim Hasan Mehedi</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] text-center py-2 px-4">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       11    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Marzuk Bin Zafar</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>

                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       12    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image2} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>MD OBAIDUL ISLAM</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">65</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">186</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       13    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image3} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Masum Ali</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       14    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image4} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Golam Rabbani</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       15   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Fahim Hasan Mehedi</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       16    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Marzuk Bin Zafar</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>

                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       17   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image2} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>MD OBAIDUL ISLAM</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">65</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">186</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       18   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image3} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Masum Ali</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       19    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image4} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Golam Rabbani</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       20    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Fahim Hasan Mehedi</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       21   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Marzuk Bin Zafar</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>

                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       22    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image2} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>MD OBAIDUL ISLAM</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">65</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">186</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       23    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image3} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Masum Ali</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       24    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image4} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Golam Rabbani</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       25   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Fahim Hasan Mehedi</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       26    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Marzuk Bin Zafar</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>

                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       27   </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image2} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>MD OBAIDUL ISLAM</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">65</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">161</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">186</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       28    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image3} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Masum Ali</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       29    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image4} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Golam Rabbani</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       30    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Fahim Hasan Mehedi</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>
                                             <tr className=' hover:bg-[#F8FAFC14] duration-200'>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                                                       31    </td>
                                                  <td class=" border border-[#F8FAFC14] text-[12px] flex justify-start items-center gap-2  font-medium  text-[#94A3B8] py-2 px-4">
                                                       <Image className=' w-[20px] h-[20px] rounded-full ' src={image5} alt='image'></Image>
                                                       <p className=' text-[#38BDF8] text-[16px] font-medium'>Marzuk Bin Zafar</p>
                                                  </td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">67</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] !hidden lg:!table-cell text-center py-2 px-4">111</td>
                                                  <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#38BDF8] py-2 px-4  text-center">136</td>
                                             </tr>


                                        </tbody>
                                   </table>
                              </div>

                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default page;