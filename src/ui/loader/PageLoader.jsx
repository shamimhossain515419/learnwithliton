import Image from 'next/image';
import React from 'react';

const PageLoader = () => {
  return (
    <div>
      <div>
        <div className=" h-screen w-screen bg-[#070707e8] flex justify-center items-center fixed top-0  left-0 right-0 bottom-0 ">
          <div className="animate-spin">
            <Image
              width={80}
              height={50}
              src={'https://i.ibb.co/0q2vN2w/asianitinc-2.png'}
              alt="image"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
