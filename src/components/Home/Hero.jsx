'use client';

import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SlBookOpen } from 'react-icons/sl';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import Container from '../CommonComponent/Container/Container';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import reactIcon from '../../../public/image/home/image 4.png';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Hero = () => {
  const codeString = `
     1 import  createStore  from "redux";
     2
     3 const initialState   { interested :  false };
     4
     5 const  reducer  = ( state == initialState , action) => {
     6      if(action.type ==  "showInterest") {
     7       return  {
     8            ...state ,
     9           interested == true , 
     10       }
     11     }
     12
     13      return state ;
     14   }
     15
     16 const  store =createStore (reducer)

           
   `;

  return (
    <div>
      <div className=" secondBg py-10 pb-24 w-full overflow-hidden">
        <Container>
          <div className=" md:grid md:grid-cols-2  items-start gap-2">
            <div data-aos="fade-right" className="  md:pr-6 w-full ">
              <div className=" ">
                <Image className="  " src={reactIcon} alt="" />
              </div>
              <div className=" mt-5">
                <h1 className=" text-[16px] text-[#0284C7]  pb-3">
                  বাংলা রিয়্যাক্ট-রিডাক্স কোর্স (ভিডিও অনলি & সেলফ-পেসড)
                </h1>

                <SectionTitle
                  size={'text-[46px]'}
                  title_1={'থিংক ইন এ'}
                  title_2={'রিডাক্স'}
                  title_3={'ওয়ে'}
                ></SectionTitle>
                <h2 className=" text-[#94A3B8] text-[14px] py-4">
                  রিডাক্স টুলকিট, আর.টি.কে কুয়ারি এবং থাংক
                </h2>
              </div>
              <div>
                <h4 className="  py-8 text-[18px]  md:w-10/12 leading-[30px]  primaryColor  ">
                  রিডাক্স এর মৌলিক এবং আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই
                  কোর্সের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ
                  রিডাক্স প্রোগ্রামার হয়ে উঠতে সাহায্য করবে বলে আমাদের বিশ্বাস।
                </h4>

                <div className=" sm:flex justify-start   items-center   pt-4 gap-5">
                  <div className=" block sm:inline-block  my-2 sm:my-0 ">
                    <div className=" bg-[#0284C7]   cursor-pointer  w-full border border-[#f8fafc14] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                      <SlBookOpen className=" secondColor" size={'20px'} />
                      <p className=" text-[13px] font-semibold secondColor">
                        কোর্স এক্সেস করুন
                      </p>
                    </div>
                  </div>
                  <div className=" =  block sm:inline-block my-2 sm:my-0 ">
                    <div className="  bg-transparent hover:bg-[#0284C7]  hover:text-[#E2E8F0]   duration-200 cursor-pointer primaryColor  w-full border border-[#f8fafc14] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2">
                      <p className="  text-[13px]  font-semibold     ">
                        ড্যাশবোর্ড এ চলুন
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" my-4">
                  <div className=" mt-3 md:w-9/12  relative">
                    <div className=" my-0 relative">
                      <ProgressBar
                        margin="2px"
                        bgColor={'#099268'}
                        height={'8px'}
                        baseBgColor={'#1E293B'}
                        labelSize="0px"
                        completed={12.5}
                      />
                      ;
                    </div>

                    <div className=" relative text-[#94A3B8]   -top-4 flex items-center gap-1  text-[14px] ">
                      <p>কোর্স অগ্রগতি -</p>
                      <p>7.14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="  pt-9  text-white-base sm:ml-5 w-full"
            >
              <div className=" flex justify-start  gap-0">
                <div className=" border-t border-l  border-[#f8fafc29]  flex justify-start gap-2 items-center p-2 ">
                  <FaReact className=" text-[#61DAFB]" />
                  <p>store.js</p>
                </div>
                <div className=" border border-[#f8fafc29] border-b-0   bg-[#f8fafc0f] flex justify-start gap-2 items-center p-2 ">
                  <IoLogoJavascript />
                  <p>enroll.jsx</p>
                </div>
              </div>
              <div className="rounded-[4px] border border-[#f8fafc29] w-full overflow-hidden">
                <SyntaxHighlighter
                  lineProps="true"
                  language="javascript"
                  customStyle={{
                    background: '#0F172A66',
                    color: '#fff',
                    margin: '0',
                  }}
                  style={a11yDark}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
