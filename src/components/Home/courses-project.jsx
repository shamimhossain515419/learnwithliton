import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

import image1 from "../../../public/image/home/project-image/IMAGE (10).png"
import image2 from "../../../public/image/home/project-image/IMAGE (11).png"
import image3 from "../../../public/image/home/project-image/IMAGE (12).png"
import image4 from "../../../public/image/home/project-image/IMAGE (13).png"
import image5 from "../../../public/image/home/project-image/IMAGE (4).png"
import image6 from "../../../public/image/home/project-image/IMAGE (5).png"
import image7 from "../../../public/image/home/project-image/IMAGE (6).png"
import image8 from "../../../public/image/home/project-image/IMAGE (7).png"
import image9 from "../../../public/image/home/project-image/IMAGE (8).png"
import image10 from "../../../public/image/home/project-image/IMAGE (9).png"
import Image from 'next/image';
import Container from '../CommonComponent/Container/Container';
import HeadingImage from '../../../public/image/home/project-image/peep3.51bcb0bc.svg'

const Courses_project = () => {
     return (
          <div className='  bg-[#0B1120] border-t border-[#FFFFFF4D] py-20'>
               <div className=' mx-auto'>
                    <Image className='block mx-auto py-4' src={HeadingImage} alt="image"></Image>
                    <SectionTitle size={"text-[34px]"} alignment={'text-center'} title_1={'কোর্সে যে'} title_2={"প্রজেক্ট"} title_3={"গুলো করানো হবে"} paragraph={"দশটি প্রজেক্ট আমরা একসাথে করবো"}></SectionTitle>
               </div>



               <Container>
                    <div className=' grid md:grid-cols-2 gap-4 py-12'>

                         <div className=' w-full rounded-md overflow-hidden'>
                              <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image5} alt='image'></Image>
                         </div>
                         <div className=' grid md:grid-cols-2 gap-4'>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image7} alt='image'></Image>
                              </div>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image6} alt='image'></Image>
                              </div>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image4} alt='image'></Image>
                              </div>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image8} alt='image'></Image>
                              </div>

                         </div>
                         <div className=' grid md:grid-cols-2 gap-4'>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image9} alt='image'></Image>
                              </div>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image10} alt='image'></Image>
                              </div>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image1} alt='image'></Image>
                              </div>
                              <div className=' w-full rounded-md  overflow-hidden'>
                                   <Image className='  hover:scale-125 duration-500 cursor-pointer w-full h-full  object-fill' src={image3} alt='image'></Image>
                              </div>

                         </div>
                         <div className=' w-full rounded-md  overflow-hidden'>
                              <Image className='  hover:scale-125 duration-500 cursor-pointer rounded-md w-full h-full  object-fill' src={image2} alt='image'></Image>
                         </div>

                    </div>
               </Container>

               <div>

               </div>
          </div>
     );
};

export default Courses_project;