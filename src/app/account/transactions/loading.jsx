import React from 'react';
import logo from '../../../../public/image/home/asianitinc 2.png'
import Image from 'next/image';

const loading = () => {
     return (
          <div>
               <div className=' h-screen w-screen bg-[#070707e8] flex justify-center items-center fixed top-0  left-0 right-0 bottom-0 '>
                    <div className='animate-spin'>
                         <Image src={logo} alt="image" ></Image>
                    </div>
               </div>
          </div>
     );
};

export default loading;