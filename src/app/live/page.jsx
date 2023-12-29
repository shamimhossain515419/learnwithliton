import Container from '@/components/CommonComponent/Container/Container';
import Link from 'next/link';
import React from 'react';

const page = () => {
     return (
          <div className=' py-20'>
               <Container>
                    <div className='  grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-3 xl:gap-7  '>
                         <div className=' hover:scale-105 duration-300 border border-[#F8FAFC14] rounded-[8px] overflow-hidden'>
                              <div className='  rounded-t-[5px] bg-gradient-to-r w-full h-[200px]  flex justify-center items-center  from-teal-500 to-blue-500'>
                                   <h1 className=' text-[20px]  text-white font-medium'>সাপ্তাহিক লাইভ সেশন 1 - ব্যাচ 2</h1>
                              </div>
                              <div className=' p-2 md:p-4   border-b border-[#F8FAFC14]'>
                                   <p className=' heading-14 py-2 mb-6'>প্রথম সাপ্তাহিক লাইভ সেশনে আমরা আলোচনা করবো মডিউল 1 এবং 2 এ দেয়া ভিডিও এবং এসাইনমেন্ট নিয়ে। সেই সাথে আমরা সপ্তাহ ব্যাপী আপনাদের কাছে পাওয়া কিছু সাধারণ প্রশ্নের উত্তর দিবো। এরপরে আমরা প্রশ্নোত্তর পর্বে চলে যাব এবং আপনাদের কাছ থেকে কমেন্টে প্রশ্ন নিয়ে উত্তর দেয়া হবে। লাইভ সেশনটি শুরু হবার পূর্বে । কোর্স ইন্সট্রাকটর সুমিত সাহা নিজে উপস্থিত থাকবেন।</p>
                              </div>
                              <div className=' p-2  md:p-4'>
                                   <p className=' heading-14  font-medium pb-2 '> যা যা আলোচনা হয়েছে</p>
                                   <div className='  flex justify-start gap-2  flex-wrap'>
                                        <button className=' bg-[#1E293B]  text-[#A5D8FF] text-[11px]   font-normal uppercase px-3 py-1 rounded-lg'>vanilla redux</button>
                                        <button className=' bg-[#1E293B]  text-[#A5D8FF] text-[11px]  font-normal uppercase px-3 py-1 rounded-lg'>redux concept</button>

                                   </div>
                              </div>

                              <div className='border-t p-2  md:px-4 border-[#F8FAFC14]'>
                                   <div className='flex justify-center items-center  py-6 '>
                                        <Link href={'/'} className=' text-center rounded-[8px] w-full text-[16px] text-[#fff]  font-medium px-8 py-[10px] hover:bg-[#07B5D5] bg-[#0284C7]'>
                                             আরো সাকসেস স্টোরি দেখুন
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className='  hover:scale-105 duration-300  border border-[#F8FAFC14] rounded-[8px] overflow-hidden'>
                              <div className='  rounded-t-[5px] bg-gradient-to-r w-full h-[200px]  flex justify-center items-center  from-teal-500 to-blue-500'>
                                   <h1 className=' text-[20px]  text-white font-medium'>সাপ্তাহিক লাইভ সেশন 2 - ব্যাচ 2</h1>
                              </div>
                              <div className=' p-2 md:p-4  border-b border-[#F8FAFC14]'>
                                   <p className=' heading-14 py-2 mb-6'>তৃতীয় সাপ্তাহিক লাইভ সেশনে আমরা আলোচনা করবো মডিউল 5 এবং 6 এ দেয়া ভিডিও এবং এসাইনমেন্ট নিয়ে। সেই সাথে আমরা সপ্তাহ ব্যাপী আপনাদের কাছে পাওয়া কিছু সাধারণ প্রশ্নের উত্তর দিবো। এরপরে আমরা প্রশ্নোত্তর পর্বে চলে যাব এবং আপনাদের কাছ থেকে কমেন্টে প্রশ্ন নিয়ে উত্তর দেয়া হবে। লাইভ সেশনটি শুরু হবার পূর্বে । কোর্স ইন্সট্রাকটর সুমিত সাহা নিজে উপস্থিত থাকবেন।</p>
                              </div>
                              <div className=' p-2  md:p-4 '>
                                   <p className=' heading-14  font-medium pb-2 '> যা যা আলোচনা হয়েছে</p>
                                   <div className='  flex justify-start gap-2  flex-wrap'>
                                        <button className=' bg-[#1E293B]  text-[#A5D8FF] text-[11px]   font-normal uppercase px-3 py-1 rounded-lg'>vanilla redux</button>
                                        <button className=' hover:bg-[#07B5D5] bg-[#1E293B]  text-[#A5D8FF] text-[11px]  font-normal uppercase px-3 py-1 rounded-lg'>redux concept</button>

                                   </div>
                              </div>

                              <div className='border-t p-2  md:px-4 border-[#F8FAFC14]'>
                                   <div className='flex justify-center items-center  py-6 '>
                                        <Link href={'/'} className=' text-center rounded-[8px] hover:bg-[#07B5D5] w-full text-[16px] text-[#fff]  font-medium px-8 py-[10px] bg-[#0284C7]'>
                                             আরো সাকসেস স্টোরি দেখুন
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className='  hover:scale-105 duration-300  border border-[#F8FAFC14] rounded-[8px] overflow-hidden'>
                              <div className='  rounded-t-[5px] bg-gradient-to-r w-full h-[200px]  flex justify-center items-center  from-teal-500 to-blue-500'>
                                   <h1 className=' text-[20px]  text-white font-medium'>সাপ্তাহিক লাইভ সেশন 3 - ব্যাচ 2</h1>
                              </div>
                              <div className=' p-2 md:p-4 pb-7  border-b border-[#F8FAFC14]'>
                                   <p className=' heading-14 py-2 mb-6'>দ্বিতীয় সাপ্তাহিক লাইভ সেশনে আমরা আলোচনা করবো মডিউল 3 এবং 4 এ দেয়া ভিডিও এবং এসাইনমেন্ট নিয়ে। সেই সাথে আমরা সপ্তাহ ব্যাপী আপনাদের কাছে পাওয়া কিছু সাধারণ প্রশ্নের উত্তর দিবো। এরপরে আমরা প্রশ্নোত্তর পর্বে চলে যাব এবং আপনাদের কাছ থেকে কমেন্টে প্রশ্ন নিয়ে উত্তর দেয়া হবে। লাইভ সেশনটি শুরু হবার পূর্বে । কোর্স ইন্সট্রাকটর সুমিত সাহা নিজে উপস্থিত থাকবেন।</p>
                              </div>
                              <div className=' p-2  md:p-4'>
                                   <p className=' heading-14  font-medium pb-2 '> যা যা আলোচনা হয়েছে</p>
                                   <div className='  flex justify-start gap-2  flex-wrap'>
                                        <button className=' bg-[#1E293B]  text-[#A5D8FF] text-[11px]   font-normal uppercase px-3 py-1 rounded-lg'>vanilla redux</button>
                                        <button className=' bg-[#1E293B]   text-[#A5D8FF] text-[11px]  font-normal uppercase px-3 py-1 rounded-lg'>redux concept</button>

                                   </div>
                              </div>

                              <div className='border-t p-2  md:px-4 border-[#F8FAFC14]'>
                                   <div className='flex justify-center items-center  py-6 '>
                                        <Link href={'/'} className=' text-center hover:bg-[#07B5D5] rounded-[8px] w-full text-[16px] text-[#fff]  font-medium px-8 py-[10px] bg-[#0284C7]'>
                                             আরো সাকসেস স্টোরি দেখুন
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className='  hover:scale-105 duration-300  border border-[#F8FAFC14] rounded-[8px] overflow-hidden'>
                              <div className='  rounded-t-[5px] bg-gradient-to-r w-full h-[200px]  flex justify-center items-center  from-teal-500 to-blue-500'>
                                   <h1 className=' text-[20px]  text-white font-medium'>সাপ্তাহিক লাইভ সেশন 4 - ব্যাচ 2</h1>
                              </div>
                              <div className=' p-2 md:p-4 pb-7  border-b border-[#F8FAFC14]'>
                                   <p className=' heading-14 py-2 mb-6'>দ্বিতীয় সাপ্তাহিক লাইভ সেশনে আমরা আলোচনা করবো মডিউল 3 এবং 4 এ দেয়া ভিডিও এবং এসাইনমেন্ট নিয়ে। সেই সাথে আমরা সপ্তাহ ব্যাপী আপনাদের কাছে পাওয়া কিছু সাধারণ প্রশ্নের উত্তর দিবো। এরপরে আমরা প্রশ্নোত্তর পর্বে চলে যাব এবং আপনাদের কাছ থেকে কমেন্টে প্রশ্ন নিয়ে উত্তর দেয়া হবে। লাইভ সেশনটি শুরু হবার পূর্বে । কোর্স ইন্সট্রাকটর সুমিত সাহা নিজে উপস্থিত থাকবেন।</p>
                              </div>
                              <div className=' p-2  md:p-4'>
                                   <p className=' heading-14  font-medium pb-2 '> যা যা আলোচনা হয়েছে</p>
                                   <div className='  flex justify-start gap-2  flex-wrap'>
                                        <button className=' bg-[#1E293B]  text-[#A5D8FF] text-[11px]   font-normal uppercase px-3 py-1 rounded-lg'>vanilla redux</button>
                                        <button className=' bg-[#1E293B]   text-[#A5D8FF] text-[11px]  font-normal uppercase px-3 py-1 rounded-lg'>redux concept</button>

                                   </div>
                              </div>

                              <div className='border-t p-2  md:px-4 border-[#F8FAFC14]'>
                                   <div className='flex justify-center items-center  py-6 '>
                                        <Link href={'/'} className='text-center hover:bg-[#07B5D5] rounded-[8px] w-full text-[16px] text-[#fff]  font-medium px-8 py-[10px] bg-[#0284C7]'>
                                             আরো সাকসেস স্টোরি দেখুন
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className='  hover:scale-105 duration-300  border border-[#F8FAFC14] rounded-[8px] overflow-hidden'>
                              <div className='  rounded-t-[5px] bg-gradient-to-r w-full h-[200px]  flex justify-center items-center  from-teal-500 to-blue-500'>
                                   <h1 className=' text-[20px]  text-white font-medium'>সাপ্তাহিক লাইভ সেশন 4 - ব্যাচ 2</h1>
                              </div>
                              <div className=' p-2 md:p-4 pb-7  border-b border-[#F8FAFC14]'>
                                   <p className=' heading-14 py-2 mb-6'>দ্বিতীয় সাপ্তাহিক লাইভ সেশনে আমরা আলোচনা করবো মডিউল 3 এবং 4 এ দেয়া ভিডিও এবং এসাইনমেন্ট নিয়ে। সেই সাথে আমরা সপ্তাহ ব্যাপী আপনাদের কাছে পাওয়া কিছু সাধারণ প্রশ্নের উত্তর দিবো। এরপরে আমরা প্রশ্নোত্তর পর্বে চলে যাব এবং আপনাদের কাছ থেকে কমেন্টে প্রশ্ন নিয়ে উত্তর দেয়া হবে। লাইভ সেশনটি শুরু হবার পূর্বে । কোর্স ইন্সট্রাকটর সুমিত সাহা নিজে উপস্থিত থাকবেন।</p>
                              </div>
                              <div className=' p-2  md:p-4'>
                                   <p className=' heading-14  font-medium pb-2 '> যা যা আলোচনা হয়েছে</p>
                                   <div className='  flex justify-start gap-2  flex-wrap'>
                                        <button className=' bg-[#1E293B]  text-[#A5D8FF] text-[11px]   font-normal uppercase px-3 py-1 rounded-lg'>vanilla redux</button>
                                        <button className=' bg-[#1E293B]   text-[#A5D8FF] text-[11px]  font-normal uppercase px-3 py-1 rounded-lg'>redux concept</button>

                                   </div>
                              </div>

                              <div className='border-t p-2  md:px-4 border-[#F8FAFC14]'>
                                   <div className='flex justify-center items-center  py-6 '>
                                        <Link href={'/'} className='text-center hover:bg-[#07B5D5] rounded-[8px] w-full text-[16px] text-[#fff]  font-medium px-8 py-[10px] bg-[#0284C7]'>
                                             আরো সাকসেস স্টোরি দেখুন
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         
                    </div>
               </Container>
          </div>
     );
};

export default page;