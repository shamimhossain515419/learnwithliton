'use client';

import React, { useState } from 'react';
import login from '../../../public/image/other/IMAGE (15).png';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import Container from '../../components/CommonComponent/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useDispatch } from 'react-redux';
import { ToggleResePassword } from '@/redux/features/resetPasswordSlice/ResetPasswordSlice';
import Link from 'next/link';

const Page = () => {
  const [erorr, setError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  //  login user
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const LoginHandler = async data => {
    const email = data.email;
    const password = data.password;
    try {
      const res = await fetch(`${process.env.BASE_URL}/api/account/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const resultData = await res.json();
      console.log(resultData);

      // if (resultData?.status === 'fail') {
      //   setLoading(false);
      //   setError(resultData?.message);
      //   return;
      //   // toast.error(resultData?.message);
      // }
      const user = {
        email: resultData?.user?.email,
        name: resultData?.user?.name,
        id: resultData?.user?.id,
      };
      if (resultData.status == 'success') {
        const result = await signIn('credentials', {
          ...user,
          callbackUrl: '/',
        });
        setLoading(false);
        toast.success('Login successful');
        window.location.replace('/');
      } else {
        toast.error(resultData.message);
        setError(resultData.message);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <div className=" py-24">
      <Container>
        <div className="grid md:grid-cols-2  gap-3 md:gap-8 ">
          <div>
            <div>
              {/* login title  */}
              <SectionTitle
                title_1={'লগইন'}
                title_2={'করুন'}
                paragraph={'আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না'}
                size={'text-[34px]'}
                alignment={'text-center'}
              ></SectionTitle>
              <div className=" flex items-center justify-center text-[17px] gap-3 text-white text-center">
                <p>কোনো অ্যাকাউন্ট নেই</p>
                <Link
                  href="/register"
                  className=" text-[#0284C7] leading-[14.4px] text-[18px]  font-normal mt-1"
                >
                  রেজিস্টার
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(LoginHandler)} action="">
              <div className=" w-full py-3">
                <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                  {' '}
                  আপনার ইমেইল এড্রেস <span className=" text-[#FF6B6B]">
                    *
                  </span>{' '}
                </h1>
                <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                  যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।
                </p>

                <input
                  {...register('email', { required: true })}
                  className=" w-full  text-[#64748B] md:pl-6 my-2  focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-3 rounded-[4px] bg-[#1E293B] "
                  type="email"
                  name="email"
                  id=""
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email?.type === 'required' && (
                  <p role="alert" className="text-red-500 text-[14px]">
                    Email is required
                  </p>
                )}
              </div>
              {/* input password  */}
              <div className=" w-full py-3">
                <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                  পাসওয়ার্ড দিন <span className=" text-[#FF6B6B]">*</span>
                </h1>
                <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                  পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি
                  লেটার এবং 1 টি নাম্বার থাকতেই হবে।
                </p>
                <div className="  cursor-pointer relative ">
                  <input
                    {...register('password', { required: true })}
                    className="  relative w-full text-[#64748B] md:pl-6 my-2  focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-3 rounded-[4px] bg-[#1E293B]"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id=""
                    aria-invalid={errors.password ? 'true' : 'false'}
                  />
                  {errors.password?.type === 'required' && (
                    <p role="alert" className="text-red-500 text-[14px]">
                      password is required
                    </p>
                  )}
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className=" absolute  text-white top-6 right-2"
                  >
                    <FaEye size={20} />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-red-700">
                    {' '}
                    {erorr ? erorr : ''}{' '}
                  </p>
                </div>
              </div>
              <div className=" flex justify-between items-center gap-2">
                <div className=" py-2">
                  <div className=" inline-block my-2 sm:my-0 ">
                    <button
                      type="submit"
                      className="   text-[#FFF]    cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2"
                    >
                      {loading ? 'Loading...' : 'তথ্য জমা দিন'}
                    </button>
                  </div>
                </div>
                <p
                  onClick={() => dispatch(ToggleResePassword())}
                  className=" text-[#38BDF8] cursor-pointer text-[16px] font-normal "
                >
                  {' '}
                  পাসওয়ার্ড ভুলে গেছেন?
                </p>
              </div>
            </form>
          </div>
          <div>
            <div>
              <Image src={login} alt="img" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
