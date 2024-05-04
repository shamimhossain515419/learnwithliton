import Image from 'next/image';
import React from 'react';

import UpdateProfile from '../../components/account/updateProfile/UpdateProfile';
export const generateMetadata = () => {
  return {
    title: ' account | Asian It',
  };
};
const page = () => {
  return (
    <div>
      <div>
        <div className=" border-b border-[#F8FAFC14] text-start py-3">
          <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">
            প্রোফাইল আপডেট
          </h1>
          <p className="text-start  font-medium text-[13px] text-[#6B7280]">
            আপনার প্রোফাইল আপডেট করুন
          </p>
        </div>
      </div>
      <UpdateProfile />
    </div>
  );
};

export default page;
