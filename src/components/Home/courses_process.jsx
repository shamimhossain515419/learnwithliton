import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import headingImage from "../../../public/image/home/peep4.svg"
import Image from 'next/image';
import image1 from '../../../public/image/courses/image 3 (1).png';
import image2 from '../../../public/image/courses/image 4 (1).png';
import image3 from '../../../public/image/courses/image 5.png';
import image4 from '../../../public/image/courses/image 6.png';
import image5 from '../../../public/image/courses/image 7.png';
import vector1 from "../../../public/image/courses/Frame (1).svg";
import vector2 from "../../../public/image/courses/Frame (2).svg";
import vector3 from "../../../public/image/courses/Frame (3).svg";
import vector4 from "../../../public/image/courses/Frame (4).svg";
import vector5 from "../../../public/image/courses/Frame (5).svg";
import frame1 from "../../../public/image/courses/Frame (1).png"
import frame2 from "../../../public/image/courses/Vector (1).png"
import frame3 from "../../../public/image/courses/Vector (2).png"
import frame4 from "../../../public/image/courses/Vector (1).png"
import getImage from "../../../public/image/courses/Frame (6).svg"


import Container from '../CommonComponent/Container/Container';


const CoursesProcess = () => {
     return (
          <div className=' py-20  border-t border-[#FFFFFF4D] '>

               <div>
                    <Image className=" block mx-auto py-3" src={headingImage} alt="" />
                    <div>
                         <SectionTitle alignment={"text-center"} size={"text-[34px]"} title_1={"কোর্সটি"} title_2={"কিভাবে চলবে"} paragraph={"যেভাবে আমরা আপনাকে একজন দক্ষ রিডাক্স প্রোগ্রামার হয়ে উঠতে সাহায্য করতে পারি"}></SectionTitle>
                    </div>
               </div>

               <Container>
                    <div>

                         <div className=' relative   grid md:grid-cols-2 gap-7 my-4 '>
                              <div>
                                   <div className=' text-center md:text-star'>
                                        <div className=' relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px '>
                                             <h1 className="section-title text-3xl font-bold relative z-10  !text-white drop-shadow-[3px_3px_0px_#1e293b]">১</h1>
                                             <Image className=' absolute top-1  ' src={vector1} alt='image'></Image>
                                        </div>
                                   </div>

                                   <div>
                                        <h1 className=' text-center md:text-start heading-28 py-6'>ধাপে ধাপে প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি</h1>
                                        <p className=' text-center md:text-start heading-18'> কোর্স ক্রয় করেই সবগুলো মডিউল দেখতে পাবেন এবং প্রতিটি মডিউলে 10-12 টি প্রি-রেকোর্ডেড ভিডিও থাকবে যেন আপনারা ধাপে ধাপে একটার পর একটা টপিক শিখতে পারেন। ভিডিও গুলো প্রজেক্ট ভিত্তিক লার্নিং প্রসেস ফলো করে বানানো হয়েছে। আপনারা আপনাদের সময় অনুযায়ী ভিডিও গুলো দেখতে পারবেন এবং নিজের গতিতে সেলফ-পেসড ভাবে আগাতে পারবেন। </p>
                                   </div>
                              </div>
                              <div className=' hidden md:flex  items-end overflow-hidden'>
                                   <Image className=' w-full object-fill ' src={image1} alt='image'></Image>
                              </div>

                         </div>
                         <div className=' text-center hidden md:block    relative py-5 '>
                              <Image className=' text-center    absolute left-[25%]  -top-14   inline-block ' src={frame1} alt='image'></Image>
                         </div>

                         <div className='   grid md:grid-cols-2 gap-7 py-10  '>
                              <div className=' hidden md:flex  items-end overflow-hidden'>
                                   <Image className=' w-full object-fill' src={image2} alt='image'></Image>
                              </div>
                              <div>
                                   <div className=' text-center md:text-star'>
                                        <div className=' relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px '>
                                             <h1 className="section-title text-3xl font-bold relative z-10  !text-white drop-shadow-[3px_3px_0px_#1e293b]">২</h1>
                                             <Image className=' absolute top-1  ' src={vector2} alt='image'></Image>
                                        </div>
                                   </div>

                                   <div>
                                        <h1 className=' text-center md:text-start heading-28 py-6'>পরীক্ষার মাধ্যমে নিজেকে যাচাই করার সুযোগ</h1>
                                        <p className=' text-center md:text-start heading-18'>আপনারা ভিডিও দেখে কি শিখলেন সেটা যাচাই করার জন্য প্রতিটি ভিডিওর সাথে কুইজ & প্রতিটি মডিউলে এসাইনমেন্ট থাকছে। কুইজ গুলো আপনারা তাৎক্ষণিক উত্তর দিতে পারবেন এবং নিজেদের সুবিধামতো সময় অনুযায়ী এসাইনমেন্ট গুলো করতে পারবেন প্র্যাকটিস করার জন্য। এসাইনমেন্টের সল্যুশনও গিটহাবে দেয়া থাকবে। যেহেতু এটি 'ভিডিও অনলি' কোর্স, তাই কুইজ বা এসাইনমেন্টের কোন মার্কিং থাকবেনা। সম্পূর্ণ নিজের প্রয়োজনে নিজের গতিতে আপনারা আগাতে পারবেন। </p>
                                   </div>
                              </div>

                         </div>

                         <div className=' text-center  hidden md:block  relative py-5 '>
                              <Image className=' text-center    absolute left-[8%]  p-3 -top-16 w-[50%]   inline-block ' src={frame2} alt='image'></Image>
                         </div>
                         <div className=' relative   grid md:grid-cols-2 gap-7 my-4 pt-11 '>
                              <div>
                                   <div className=' text-center md:text-star'>
                                        <div className=' relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px '>
                                             <h1 className="section-title text-3xl font-bold relative z-10  !text-white drop-shadow-[3px_3px_0px_#1e293b]">৩</h1>
                                             <Image className=' absolute top-1  ' src={vector3} alt='image'></Image>
                                        </div>
                                   </div>

                                   <div>
                                        <h1 className=' text-center md:text-start heading-28 py-6'>পরীক্ষার পরে থাকছে প্রশ্নের সঠিক সমাধান</h1>
                                        <p className=' text-center md:text-start heading-18'>প্রতিটি কুইজ এর শেষে আপনারা সঠিক উত্তর ব্যাখ্যা সহ দেখতে পারবেন। সবগুলো এসাইনমেন্টের সল্যুশন কোর্স শেষে গিটহাব - এ শেয়ার করে দেয়া হবে যেন আপনারা বেস্ট প্র্যাকটিস এবং পদ্ধতি গুলো আরো ভাল করে যাচাই করে নিতে পারেন। এই 'ভিডিও অনলি' কোর্সে কোন এসাইনমেন্ট বা কুইজের মার্কিং করা হবেনা এবং শুধু প্র্যাকটিস হিসেবে নিজেকে যাচাই করবেন আপনি নিজেই।</p>
                                   </div>
                              </div>
                              <div className=' hidden md:flex  items-end overflow-hidden'>
                                   <Image className=' object-fill w-full ' src={image3} alt='image'></Image>
                              </div>

                         </div>


                         <div className=' text-center hidden md:block   relative py-5 '>
                              <Image className=' text-center    absolute left-[24%]  p-3 -top-16   inline-block ' src={frame3} alt='image'></Image>
                         </div>

                         <div className='   grid md:grid-cols-2 gap-7 py-10  mt-10 '>
                              <div className=' hidden md:flex  items-end overflow-hidden'>
                                   <Image className=' w-full  object-fill ' src={image4} alt='image'></Image>
                              </div>
                              <div>
                                   <div className=' text-center md:text-star'>
                                        <div className=' relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px '>
                                             <h1 className="section-title text-3xl font-bold relative z-10  !text-white drop-shadow-[3px_3px_0px_#1e293b]">৪</h1>
                                             <Image className=' absolute top-1  ' src={vector4} alt='image'></Image>
                                        </div>
                                   </div>

                                   <div>
                                        <h1 className=' text-center md:text-start heading-28 py-6'>ডিসকোর্ড কমিউনিটি লিমিটেড সাপোর্ট থাকছে</h1>
                                        <p className=' text-center md:text-start heading-18'>যেহেতু কোর্সটি 'ভিডিও অনলি' কোর্স, তাই সাপোর্ট কমিটমেন্ট থাকছেনা। তবে কোর্স পার্চেস করার পর আমাদের প্রাইভেট ডিস্কোর্ড চ্যানেলে আপনাকে এক্সেস দেয়া হবে যেখানে আমাদের আগের ব্যাচ গুলোর ছাত্ররা আছেন যারা বেশ সহযোগিতাপূর্ণ। কোর্স চলাকালীন কোন সমস্যার সম্মুখীন হলে, কোথাও আটকে গেলে অথবা বুঝতে না পারলে, আপনার প্রশ্নটি আমাদের ডিসকোর্ড সাপোর্ট চ্যানেলে পোস্ট করতে পারবেন। সাপোর্ট কমিটমেন্ট না থাকলেও লিমিটেড কিছু কমিউনিটি সাপোর্ট অবশ্যই আপনারা পেতে পারেন। তবে এক্ষেত্রে আমাদের পক্ষ থেকে কোন সাপোর্ট কমিটমেন্ট থাকছেনা।</p>
                                   </div>
                              </div>

                         </div>

                         <div className=' text-center  hidden md:block   relative py-5 '>
                              <Image className=' text-center    absolute left-[10%]  p-3 -top-16   inline-block ' src={frame4} alt='image'></Image>
                         </div>
                         <div className='   grid md:grid-cols-2 gap-7 py-10  '>
                              <div>
                                   <div className=' text-center md:text-star'>
                                        <div className=' relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px '>
                                             <h1 className="section-title text-3xl font-bold relative z-10  !text-white drop-shadow-[3px_3px_0px_#1e293b]">৫</h1>
                                             <Image className=' absolute top-1  ' src={vector5} alt='image'></Image>
                                        </div>
                                   </div>

                                   <div>
                                        <h1 className=' text-center md:text-start heading-28 py-6'>আরো থাকছে রেকোর্ডেড আলোচনা</h1>
                                        <p className=' text-center md:text-start heading-18'>কোর্স মডিউইলের পাশাপাশি, আমাদের ৫ টি রেকোর্ডেড কনসেপচুয়াল ভিডিও থকবে যেখানে আমরা মডিউল অনুযায়ী এসাইনমেন্টের উপর বিস্তারিত আলোচনা করেছি যেগুলো আপনাদেরকে নিজে নিজে এসাইনমেন্ট করতে সর্বাত্মক সাহায্য করবে বলে আমাদের বিশ্বাস।</p>
                                   </div>
                              </div>
                              <div className=' hidden md:flex  items-end overflow-hidden'>
                                   <Image className=' w-full object-fill ' src={image5} alt='image'></Image>
                              </div>


                         </div>

                    </div>
               </Container>



               {/* কি পাবেন আর কি পাবেন না  */}


               <Container>
                    <div>
                         <div className=' mt-16   md:mt-28'>
                              <SectionTitle size={"text-[34px]"} alignment={"text-center"} title_1={"কোর্স করে"} title_2={"কি পাবেন আর কি পাবেন না"} paragraph={"কোর্সটি শেষ করার পর আপনি আমাদের থেকে যা কিছু পাবেন বা পাবেন না"}></SectionTitle>
                         </div>

                         <div className=' sm:grid  sm:grid-cols-2 xl:grid-cols-3 gap-5  mt-4 py-10 '>
                              <div className=' flex justify-center w-full  items-center gap-4 flex-col  border border-[#F8FAFC14] px-3 py-8 rounded-[12px]'>
                                   <div> <div className=' rounded-full bg-[#38BDF81A] p-4  inline-block'>
                                        <Image className=' ' src={getImage} alt='image'></Image>
                                   </div></div>
                                   <h1 className=' heading-18 '> কোর্স সার্টিফিকেট নেই </h1>
                                   <p className='text-[15px] text-center leading-[24px] font-normal text-[#94A3B8]'>আমাদের কোন কোর্সেই আমরা চাকরির নিশ্চয়তা দেইনা এবং এই কোর্সেও ব্যাতিক্রম নয়। চাকরির বেতনের মতোই চাকরি প্রাপ্তি আপনার নিজের। এক্ষেত্রে আমরা সাহায্য করতে পারি কিন্তু কোন নিশ্চয়তা দিতে পারছিনা।</p>
                              </div>
                              <div className=' flex justify-center w-full  items-center gap-4 flex-col  border border-[#F8FAFC14] px-3 py-8  rounded-[12px]'>
                                   <div> <div className=' rounded-full bg-[#38BDF81A] p-4  inline-block'>
                                        <Image className=' ' src={getImage} alt='image'></Image>
                                   </div></div>
                                   <h1 className=' heading-18 '> কোর্স সার্টিফিকেট নেই </h1>
                                   <p className='text-[15px] text-center leading-[24px] font-normal text-[#94A3B8]'>আমাদের কোন কোর্সেই আমরা চাকরির নিশ্চয়তা দেইনা এবং এই কোর্সেও ব্যাতিক্রম নয়। চাকরির বেতনের মতোই চাকরি প্রাপ্তি আপনার নিজের। এক্ষেত্রে আমরা সাহায্য করতে পারি কিন্তু কোন নিশ্চয়তা দিতে পারছিনা।</p>
                              </div>
                              <div className=' flex justify-center w-full  items-center gap-4 flex-col  border border-[#F8FAFC14] px-3 py-8 rounded-[12px]'>
                                   <div> <div className=' rounded-full bg-[#38BDF81A] p-4  inline-block'>
                                        <Image className=' ' src={getImage} alt='image'></Image>
                                   </div></div>
                                   <h1 className=' heading-18 '> কোর্স সার্টিফিকেট নেই </h1>
                                   <p className='text-[15px] text-center leading-[24px] font-normal text-[#94A3B8]'>আমাদের কোন কোর্সেই আমরা চাকরির নিশ্চয়তা দেইনা এবং এই কোর্সেও ব্যাতিক্রম নয়। চাকরির বেতনের মতোই চাকরি প্রাপ্তি আপনার নিজের। এক্ষেত্রে আমরা সাহায্য করতে পারি কিন্তু কোন নিশ্চয়তা দিতে পারছিনা।</p>
                              </div>
                         </div>
                         <div className=' sm:grid  sm:grid-cols-2 xl:grid-cols-3 gap-5    pt-3 pb-10 '>
                              <div className=' flex justify-center w-full  items-center gap-4 flex-col  border border-[#F8FAFC14] px-3 py-8 rounded-[12px]'>
                                   <div> <div className=' rounded-full bg-[#38BDF81A] p-4  inline-block'>
                                        <Image className=' ' src={getImage} alt='image'></Image>
                                   </div></div>
                                   <h1 className=' heading-18 '> কোর্স সার্টিফিকেট নেই </h1>
                                   <p className='text-[15px] text-center leading-[24px] font-normal text-[#94A3B8]'>আমাদের কোন কোর্সেই আমরা চাকরির নিশ্চয়তা দেইনা এবং এই কোর্সেও ব্যাতিক্রম নয়। চাকরির বেতনের মতোই চাকরি প্রাপ্তি আপনার নিজের। এক্ষেত্রে আমরা সাহায্য করতে পারি কিন্তু কোন নিশ্চয়তা দিতে পারছিনা।</p>
                              </div>
                              <div className=' flex justify-center w-full  items-center gap-4 flex-col  border border-[#F8FAFC14] px-3 py-8  rounded-[12px]'>
                                   <div> <div className=' rounded-full bg-[#38BDF81A] p-4  inline-block'>
                                        <Image className=' ' src={getImage} alt='image'></Image>
                                   </div></div>
                                   <h1 className=' heading-18 '> কোর্স সার্টিফিকেট নেই </h1>
                                   <p className='text-[15px] text-center leading-[24px] font-normal text-[#94A3B8]'>আমাদের কোন কোর্সেই আমরা চাকরির নিশ্চয়তা দেইনা এবং এই কোর্সেও ব্যাতিক্রম নয়। চাকরির বেতনের মতোই চাকরি প্রাপ্তি আপনার নিজের। এক্ষেত্রে আমরা সাহায্য করতে পারি কিন্তু কোন নিশ্চয়তা দিতে পারছিনা।</p>
                              </div>
                              <div className=' flex justify-center w-full  items-center gap-4 flex-col  border border-[#F8FAFC14] px-3 py-8 rounded-[12px]'>
                                   <div> <div className=' rounded-full bg-[#38BDF81A] p-4  inline-block'>
                                        <Image className=' ' src={getImage} alt='image'></Image>
                                   </div></div>
                                   <h1 className=' heading-18 '> কোর্স সার্টিফিকেট নেই </h1>
                                   <p className='text-[15px] text-center leading-[24px] font-normal text-[#94A3B8]'>আমাদের কোন কোর্সেই আমরা চাকরির নিশ্চয়তা দেইনা এবং এই কোর্সেও ব্যাতিক্রম নয়। চাকরির বেতনের মতোই চাকরি প্রাপ্তি আপনার নিজের। এক্ষেত্রে আমরা সাহায্য করতে পারি কিন্তু কোন নিশ্চয়তা দিতে পারছিনা।</p>
                              </div>
                         </div>
                    </div>
               </Container>

          </div>
     );
};

export default CoursesProcess;