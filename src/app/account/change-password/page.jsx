'use client';
import { ImSpinner3 } from 'react-icons/im';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ToggleResePassword } from '@/redux/features/resetPasswordSlice/ResetPasswordSlice';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const ChnagePasswordHandler = async data => {
    setLoading(true);
    setError('');
    const res = await fetch(`${process.env.BASE_URL}/api/account/password`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
    if (result.status === 'success') {
      toast.success(result?.message);
      reset();
      setLoading(false);
    } else {
      setError(result?.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=" w-full md:w-[50%]">
        <div>
          {/* enrolment title? */}
          <div className=" border-b border-[#F8FAFC14] text-start py-3">
            <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">
              পাসওয়ার্ড পরিবর্তন করুন
            </h1>
            <p className="text-start  font-medium text-[13px] text-[#6B7280]">
              আপনার পাসওয়ার্ড কারো সাথে শেয়ার করবেন না
            </p>
          </div>
        </div>
        <form action=" " onSubmit={handleSubmit(ChnagePasswordHandler)}>
          {/* Old password  */}
          <div className=" w-full py-3">
            <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
              {' '}
              পুরাতন পাসওয়ার্ড <span className=" text-red-500">*</span>{' '}
            </h1>
            <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
              সে যে পাসওয়ার্ড সেট করেছিলেন
            </p>

            <div className="cursor-pointer relative">
              <input
                {...register('oldPasword', {
                  required: 'confirmPassword is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                    message:
                      'Password must contain at least one letter and one number',
                  },
                })}
                className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                type={showPassword ? 'text' : 'password'}
                name="oldPasword"
                placeholder="^%^$GHJUG*^&@"
              />
              {errors.oldPasword && (
                <p role="alert" className="text-red-500 text-[14px]">
                  {errors.oldPasword.message}
                </p>
              )}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-white top-5 right-2"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </div>
            </div>
          </div>
          {/* new password  */}
          <div className="w-full py-3">
            <h1 className="font-medium text-[14px] text-[#94A3B8] leading-[21.7px] m-0">
              নতুন পাসওয়ার্ড সেট করুন <span className="text-[#FF6B6B]">*</span>
            </h1>
            <p className="text-start text-[#94A3B8] text-[12px] leading-[14.4px] font-normal mt-1">
              পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি লেটার
              এবং 1 টি নাম্বার থাকতেই হবে।
            </p>
            <div className="cursor-pointer relative">
              <input
                {...register('newPassword', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                    message:
                      'Password must contain at least one letter and one number',
                  },
                })}
                className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                type={showPassword ? 'text' : 'password'}
                name="newPassword"
                placeholder="S4346723jdsfs@"
              />
              {errors.newPassword && (
                <p role="alert" className="text-red-500 text-[14px]">
                  {errors.newPassword.message}
                </p>
              )}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-white top-5 right-2"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </div>
            </div>
          </div>

          {/* old  password  */}
          <div className="w-full py-3">
            <h1 className="font-medium text-[14px] text-[#94A3B8] leading-[21.7px] m-0">
              কনফার্ম পাসওয়ার্ড <span className="text-[#FF6B6B]">*</span>
            </h1>
            <p className="text-start text-[#94A3B8] text-[12px] leading-[14.4px] font-normal mt-1">
              পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি লেটার
              এবং 1 টি নাম্বার থাকতেই হবে।
            </p>
            <div className="cursor-pointer relative">
              <input
                {...register('confirmPassword', {
                  required: 'confirmPassword is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                    message:
                      'Password must contain at least one letter and one number',
                  },
                })}
                className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="S4346723jdsfs@"
              />
              {errors.confirmPassword && (
                <p role="alert" className="text-red-500 text-[14px]">
                  {errors.confirmPassword.message}
                </p>
              )}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-white top-5 right-2"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </div>
            </div>
          </div>
          {/* show Error message  */}
          <div className="text-[14px] text-red-500 ">{error}</div>
          <div className=" flex text-[14px] justify-end items-center  py-1 gap-2 text-white duration-300 hover:underline  hover:text-blue-500 ">
            <p
              className="  cursor-pointer"
              onClick={() => dispatch(ToggleResePassword())}
            >
              forget password
            </p>
          </div>
          <div className=" py-4 mt-6">
            <div className=" inline-block my-2 sm:my-0 ">
              <button
                type="submit"
                className="  text-[#FFF]  cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2"
              >
                {loading ? (
                  <>
                    {' '}
                    <ImSpinner3 class="animate-spin  text-[22px]"></ImSpinner3>
                    <span className="text-[15px]">Processing...</span>{' '}
                  </>
                ) : (
                  'পাসওয়ার্ড চেঞ্জ করতে ক্লিক করুন '
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
