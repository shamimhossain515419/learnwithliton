'use client';
import profileImage from '../../../public/image/other/profile.png';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import { FaEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
import Container from '../../components/CommonComponent/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Page = () => {
  const [gender, setGender] = useState('male');
  const [showPassword, setShowPassword] = useState(false);
  const [errorGender, setErrorGender] = useState('');
  const [term, setTerm] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [image, setImage] = useState('');
  const router = useRouter();
  const handleCheckboxChange = () => {
    setTerm(!term);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const RegisterHandler = async data => {
    const formData = new FormData();

    if (!gender) {
      setErrorGender(' Pleaes select Gender');
      return;
    }
    if (!image) {
      setImageError(' Please upload photo');
      return;
    }

    formData.append('name', data?.name);
    formData.append('email', data?.email);
    formData.append('password', data?.password);
    formData.append('gender', gender);
    formData.append('photo', image);
    formData.append('term', term);
    formData.append('phone', data?.phone);
    formData.append('address', data?.address);
    formData.append('discord', data?.discord);
    const res = await fetch(`${process.env.BASE_URL}/api/account/register`, {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    console.log(result);
    if (result.status === 'success') {
      toast.success(result?.message);
      router.push('/login');
      reset();
    } else {
      toast.error('Failed to Add  client');
    }
  };

  return (
    <>
      <Container>
        <div className=" py-20">
          <div>
            <SectionTitle
              size={'text-[34px]'}
              alignment={'text-center'}
              title_1={'নিবন্ধন '}
              title_2={'করুন'}
              paragraph={
                'একাউন্ট খোলার জন্য সঠিক তথ্য প্রদান করুন। এই তথ্য গুলো পরবর্তীতে লগইন এর সময় প্রয়োজন হবে।'
              }
            />
          </div>

          <div className=" flex items-center justify-center text-[17px] gap-3 text-white-base text-center">
            <p>ইতিমধ্যে একটি সদস্যপদ আছে</p>
            <Link
              href="/login"
              className=" text-[#0284C7] leading-[14.4px] text-[18px]  font-normal mt-1"
            >
              লগইন করুন
            </Link>
          </div>

          <form
            onSubmit={handleSubmit(RegisterHandler)}
            action=""
            className=" pt-10"
          >
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className=" w-full py-3">
                  {/* input name  */}
                  <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                    {' '}
                    আপনার পুরো নাম <span className="text-red-500">*</span>
                  </h1>
                  <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                    সকল কমিউনিকেশনে এই নামটি ব্যবহৃত হবে। তাই সঠিক নাম প্রদান
                    করুন। কোন ছদ্মনাম ব্যবহার না করার অনুরোধ রইল।
                  </p>

                  <input
                    {...register('name', { required: true })}
                    className=" w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B] "
                    type="text"
                    name="name"
                    id=""
                    placeholder="Ex:  jone"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name?.type === 'required' && (
                    <p role="alert" className="text-red-500 text-[14px]">
                      Name is required
                    </p>
                  )}
                </div>
                {/* input gender   */}
                <div className=" w-full py-3">
                  <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                    {' '}
                    আপনার জেন্ডার সিলেক্ট করুন{' '}
                    <span className="text-red-500">*</span>
                  </h1>
                  <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                    সকল কমিউনিকেশনে উপযুক্ত সম্বোধনের জন্য ব্যবহৃত হবে।
                  </p>

                  <div className="text-[#94A3B8] flex gap-3 items-center mt-4">
                    <div className=" flex items-center gap-2">
                      <div
                        onClick={() => setGender('male')}
                        className={` ${
                          gender == 'male' ? ' bg-blue-500' : ' bg-gray-200  '
                        }  w-[17px] h-[17px] rounded-full cursor-pointer`}
                      ></div>{' '}
                      <span>পুরুষ</span>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div
                        onClick={() => setGender('female')}
                        className={` ${
                          gender == 'female' ? ' bg-blue-500' : ' bg-gray-200  '
                        }  w-[17px] h-[17px] rounded-full  cursor-pointer`}
                      ></div>{' '}
                      <span>নারী</span>
                    </div>
                  </div>
                  {errorGender && (
                    <p className="text-red-500 text-[14px]">{errorGender}</p>
                  )}
                </div>
                {/* input email  */}
                <div className=" w-full py-3">
                  <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                    {' '}
                    আপনার ইমেইল এড্রেস * <span className="text-red-500">*</span>
                  </h1>
                  <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                    সব কমিউনিকেশন এই ইমেইল এড্রেসে করা হবে & এটি আপনার লগইন
                    ইউজারনেম হবে। ইয়াহু ইমেইল গ্রহণযোগ্য নয়!
                  </p>

                  <input
                    {...register('email')}
                    className=" w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B] "
                    type="email"
                    name={'email'}
                    id=""
                    placeholder="Ex:  email@mgail.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email?.type === 'required' && (
                    <p role="alert" className="text-red-500 text-[14px]">
                      Email is required
                    </p>
                  )}
                </div>
                <div className="w-full py-3">
                  <h1 className="font-medium text-[14px] text-[#94A3B8] leading-[21.7px] m-0">
                    পাসওয়ার্ড দিন <span className="text-[#FF6B6B]">*</span>
                  </h1>
                  <p className="text-start text-[#94A3B8] text-[12px] leading-[14.4px] font-normal mt-1">
                    পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি
                    লেটার এবং 1 টি নাম্বার থাকতেই হবে।
                  </p>
                  <div className="cursor-pointer relative">
                    <input
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message:
                            'Password must be at least 8 characters long',
                        },
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                          message:
                            'Password must contain at least one letter and one number',
                        },
                      })}
                      className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="S4346723jdsfs@"
                    />
                    {errors.password && (
                      <p role="alert" className="text-red-500 text-[14px]">
                        {errors.password.message}
                      </p>
                    )}
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-white-base top-5 right-2"
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="w-full py-3">
                  <h1 className="font-medium text-[14px] text-[#94A3B8] leading-[21.7px] m-0">
                    পুনরায় একই পাসওয়ার্ড দিন{' '}
                    <span className="text-[#FF6B6B]">*</span>
                  </h1>
                  <p className="text-start text-[#94A3B8] text-[12px] leading-[14.4px] font-normal mt-1">
                    এই পাসওয়ার্ডটি অবশ্যই উপরের পাসওয়ার্ড এর সাথে মিলতে হবে
                  </p>
                  <div className="cursor-pointer relative">
                    <input
                      {...register('confirmPassword', {
                        required: 'Confirm password is required',
                        validate: value =>
                          value === getValues('password') ||
                          'Passwords do not match',
                      })}
                      className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="S4346723jdsfs@"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-white-base top-5 right-2"
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </div>
                    {errors.confirmPassword && (
                      <p role="alert" className="text-[14px] text-red-600">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* input profile image   */}

                <div className=" w-full py-2">
                  <div className=" flex items-start gap-3 ">
                    <Image
                      width={24}
                      height={24}
                      className=" w-6 h-6 rounded-full "
                      src={image ? URL.createObjectURL(image) : profileImage}
                      alt="image"
                    />
                    <div>
                      <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                        {' '}
                        আপনার একটি প্রোফাইল ছবি{' '}
                        <span className=" text-[#FF6B6B]">*</span>
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                        এই ছবিটি আমরা আমাদের ওয়েবসাইটে কোর্স স্টুডেন্ট দের লিস্ট
                        এ ব্যবহার করতে পারি
                      </p>

                      <div className=" mt-3 w-full overflow-hidden">
                        <input
                          onChange={e => setImage(e.target.files[0])}
                          className="  text-[13px]   border-none outline-none  leading-[16px] f font-semibold text-[#FFFFFF] custom_file"
                          type="file"
                          name=""
                          id=""
                        />
                      </div>
                      {imageError && (
                        <p className="text-red-500 text-[14px]">{imageError}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {/* input discord user name  */}
                <div className=" w-full py-3">
                  <div className="  ">
                    <div>
                      <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                        আপনার ডিসকোর্ড ইউজারনেম{' '}
                        <span className=" text-[#FF6B6B]">*</span>
                      </h1>
                      <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                        কোর্সের{' '}
                        <span className=" text-[#38BDF8]">ডিসকোর্ড</span>{' '}
                        সাপোর্ট চ্যানেলে এই ইউজারনেমকে এক্সেস দেয়া হবে।একবার
                        দেয়ার পর আর পরিবর্তন করতে পারবেন না।ডিসকোর্ড ইউজারনেম
                        খুঁজে না পেলে{' '}
                        <span className=" text-[#38BDF8]">এখান</span> থেকে গাইড
                        দেখে নিন{' '}
                      </p>
                    </div>
                  </div>
                  <div className="  relative ">
                    <input
                      {...register('discord')}
                      className="  relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] placeholder:text-[14px] focus:outline-1 mt-2 border-none outline-none p-3 rounded-[4px] bg-[#1E293B]"
                      type="text"
                      name="discord"
                      id=""
                      placeholder="Ex: asianitinc#3221"
                      aria-invalid={errors.discord ? 'true' : 'false'}
                    />
                    {errors.discord?.type === 'required' && (
                      <p role="alert">discord is required</p>
                    )}

                    <div className=" absolute  top-6 right-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_4_84)">
                          <path
                            d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 5.33331V7.99998"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 10.6667H8.00667"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_84">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-full py-3">
                  <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                    {' '}
                    আপনার মোবাইল নাম্বার
                  </h1>
                  <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                    পরিবর্তন করতে পারবেন না{' '}
                    <span className=" text-[#FF6B6B]">*</span>
                  </p>

                  <input
                    {...register('phone')}
                    className=" w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] placeholder:text-[14px] focus:outline-1 mt-2 border-none outline-none p-3 rounded-[4px] bg-[#1E293B]  "
                    type="number"
                    name="phone"
                    id=""
                    placeholder="+8801723626707"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                  {errors.phone?.type === 'required' && (
                    <p role="alert">phone is required</p>
                  )}
                </div>
                <div className=" w-full py-3">
                  <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                    {' '}
                    আপনার পুরো ঠিকানা <span className=" text-[#FF6B6B]">*</span>
                  </h1>
                  <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                    এই ঠিকানাটিতে কুরিয়ার সার্ভিসের মাধ্যমে প্রয়োজনীয় ডকুমেন্ট
                    পাঠানো হতে পারে। তাই সঠিক ঠিকানা প্রদান করুন।
                  </p>

                  <div className="  relative ">
                    <textarea
                      {...register('address')}
                      className="  relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none placeholder:text-[14px] p-3 rounded-[4px] bg-[#1E293B]"
                      name="address"
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Coloni Bogura Dhaka"
                      aria-invalid={errors.address ? 'true' : 'false'}
                    ></textarea>
                    {errors.address?.type === 'required' && (
                      <p role="alert">address is required</p>
                    )}
                    <div className="absolute top-1/2  right-1 transform -translate-x-1/2 flex justify-end items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_4_84)">
                          <path
                            d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 5.33331V7.99998"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 10.6667H8.00667"
                            stroke="white"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_84">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* আমি লার্ন উইথ সুমিত প্লাটফর্মের সকল শর্ত, প্রাইভেসি পলিসি এবং
                রিফান্ড পলিসি মেনে নিচ্ছি। */}
                <div className=" py-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer w-[15px] h-[15px] bg-gray-500 border border-gray-700 md:accent-blue-500"
                    onChange={handleCheckboxChange}
                    required={true}
                  />
                  <p className="text-[#FFF] text-[15px]">
                    আমি লার্ন উইথ সুমিত প্লাটফর্মের সকল শর্ত,{' '}
                    <Link className="text-[#0284C7]" href={'/'}>
                      প্রাইভেসি পলিসি
                    </Link>
                    এবং{' '}
                    <Link className="text-[#0284C7]" href={'/'}>
                      রিফান্ড পলিসি
                    </Link>
                    মেনে নিচ্ছি।
                  </p>
                </div>
                {/* submit data  */}
                <div className=" py-4">
                  <div className="inline-block my-2 sm:my-0 ">
                    <button
                      type="submit"
                      className="   text-[#FFF]    cursor-pointer bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2"
                    >
                      তথ্য জমা দিন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Page;
