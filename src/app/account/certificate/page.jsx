import React from 'react';
export const generateMetadata = () => {
     return {
          title: " certificate | Asian It"
     }
}
const page = () => {
     return (
          <div>

               <div>
                    {/* certificate title */}
                    <div className=" border-b border-[#F8FAFC14] text-start py-3">
                         <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">থিংক ইন এ রিডাক্স ওয়ে - থিংক ইন এ রিডাক্স ওয়ে</h1>
                         <p className="text-start  font-medium text-[13px] text-[#6B7280]">কোর্স রিপোর্ট & সার্টিফিকেট</p>
                    </div>
                    <div className=' py-7 w-full md:w-1/2'>

                         <p className=' heading-16'>থিংক ইন এ রিডাক্স ওয়ে কোর্সের batch-2 এ অংশগ্রহণ করার জন্য আপনাকে লার্ন উইথ সুমিত এর পক্ষ থেকে আন্তরিক শুভেচ্ছা এবং অভিনন্দন। আপনার জন্য সম্পূর্ণ কোর্স রিপোর্ট এবং সার্টিফিকেট রেডি হয়ে গেছে। দেখার জন্য নিচের বাটনে ক্লিক করুন।</p>
                         <p className=' heading-16 mt-4'>আপনি যদি আপনার কোর্স পার্ফরমেন্সে সন্তুষ্ট না হন এবং নিজের পার্ফরমেন্স মার্কিং বাড়াতে আবার নতুন ব্যাচের সাথে সকল পরীক্ষায় অংশগ্রহণ করে রেজাল্ট আপগ্রেড করতে চান, তাহলে পূর্বের কোর্স পার্ফরমেন্স রিসেট করে</p>
                         <p className=' heading-16 mt-4'> <span className=' text-[#F87171]'>মনে রাখবেন, কোর্স রিসেট করলে আগের ব্যাচের আপনার সকল পার্ফরমেন্স এর তথ্য মুছে যাবে এবং আগের ব্যাচের সার্টিফিকেটটি ইনভ্যালিডেট হয়ে যাবে। এটি কোনভাবেই আর ফিরিয়ে দেয়া সম্ভব হবেনা</span>  ।সফলভাবে শেষ করার পর নতুনভাবে আপনার সার্টিফিকেটটি জেনারেট হবে। এছাড়া আপনি প্লাটফর্ম থেকে অটো লগ আউট হয়ে যাবেন এবং আপনাকে নতুন করে লগইন করতে হবে।</p>

                         <div className=' my-5  flex gap-4 items-center flex-wrap'>
                              <button className='inline-flex text-white-base  text-[14px] font-medium px-3 py-1 justify-center items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-400 via-blue-600 to-teal-500'>
                                   <span>কোর্স রিপোর্ট এবং সার্টিফিকেট</span>
                              </button>
                                <button className='inline-flex text-white-base  text-[14px] font-medium px-3 py-1 justify-center items-center gap-4 rounded-2xl  bg-gradient-to-r from-red-500 to-pink-500'>  <span className='text-white-base  text-[14px] font-medium'>কোর্স রিসেট করে বর্তমান ব্যাচে চলুন</span> </button>
                         </div>

                    </div>


               </div>
          </div>
     );
};

export default page;