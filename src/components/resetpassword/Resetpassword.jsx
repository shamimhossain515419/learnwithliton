'use client';

import { ToggleResePassword } from '@/redux/features/resetPasswordSlice/ResetPasswordSlice';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';
import { ImSpinner3 } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

const Resetpassword = () => {
  const { isFormToggle } = useSelector(state => state.passWordToggle);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmai] = useState('');
  const [verifyCatetionCode, setVerifyCationCode] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  //  handle  reset password
  const handleSubmitResetPassword = async e => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/account/resetpassword`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );
      const resultData = await res.json();
      console.log(resultData);
      if (resultData.status === 'success') {
        toast.success(resultData?.message);
        setLoading(false);
        setActive('verify');
        form.reset();
      } else {
        setError(resultData?.message);
        toast.error('Failed to Add  client');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  handle submit verify code
  const handleSubmitVeryfication = async e => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/account/confirmPassword`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, verifiedCode: verifyCatetionCode }),
        }
      );
      const resultData = await res.json();
      if (resultData.status === 'success') {
        toast.success(resultData?.message);
        setLoading(false);
        setActive('setnewpassword');
        form.reset();
      } else {
        setError(resultData?.message);
        toast.error('Failed to Add  client');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  handleNePasswordSet;
  async function handleNewPasswordSet(data) {
    try {
      setLoading(true);
      const { password, confirmPassword } = data;

      // Ensure password and confirmPassword match
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }
      const requestData = { email, password }; // Assuming 'email' is defined somewhere

      const response = await fetch(
        `${process.env.BASE_URL}/api/account/setPassword`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        toast.success(responseData?.message);
        dispatch(ToggleResePassword());
      } else {
        setError('Failed to set new password');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={` ${
        isFormToggle ? 'w-full bg-black' : ' w-[10px]  hidden '
      } fixed  top-0 left-0 right-0 max-w-full duration-300 h-screen flex justify-center items-center  z-[100] overflow-hidden`}
    >
      <div className=" min-w-[220px]  bg-[#1E293B99] px-8 rounded-xl py-11 sm:min-w-[400px] xl:w-[600px]  mx-auto">
        <div
          onClick={() => dispatch(ToggleResePassword())}
          className=" absolute cursor-pointer right-2 top-1 p-5 text-white-base"
        >
          <IoMdClose className="text-[25px]" />
        </div>

        <div>
          <h1 className="text-white-base text-[25px]  md:text-[35px] font-bold text-center pb-8">
            ASIAN IT INC
          </h1>
        </div>

        {/* password  reset  */}
        {!active && (
          <div>
            {/* Enput email  */}
            <div>
              <div className=" w-full">
                <div>
                  {/* enrolment title? */}
                  <div className=" border-b border-[#F8FAFC14] text-start py-3">
                    <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">
                      পাসওয়ার্ড রিসেট করুন
                    </h1>
                    <p className="text-start  font-medium text-[13px] text-[#6B7280]">
                      সওয়ার্ড ভুলে গেলে আপনি পাসওয়ার্ড রিসেট করুন
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmitResetPassword}>
                  {/* Email  input  */}
                  <div className=" w-full py-3">
                    <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                      {' '}
                      ইউজার ইমেইল <span className=" text-red-500">*</span>{' '}
                    </h1>
                    <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                      যে মেইল একাউন্ট খোলা হয়েছে সেই মেইলটা দেন
                    </p>

                    <div className="cursor-pointer relative">
                      <input
                        className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                        type="email"
                        name="email"
                        required={true}
                        onChange={e => setEmai(e.target.value)}
                        placeholder="example@example.com"
                      />
                    </div>
                  </div>

                  {/* show Error message  */}
                  <div className="text-[14px] text-red-500 ">{error}</div>

                  <div className=" py-4 mt-6">
                    <div className=" inline-block my-2 sm:my-0 ">
                      <button
                        disabled={!email || loading}
                        type="submit"
                        className=" text-[#FFF]  bg-[#0284C7]   w-full border border-[#0284C7] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2"
                      >
                        {loading ? (
                          <>
                            {' '}
                            <ImSpinner3 class="animate-spin  text-[22px]"></ImSpinner3>
                            <span className="text-[15px]">Processing...</span>{' '}
                          </>
                        ) : (
                          'ইমেইল সাবমিট করুন'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {active == 'verify' && (
          <div>
            {/* Enput email  */}
            <div>
              <div className=" w-full">
                <div>
                  {/* enrolment title? */}
                  <div className=" border-b border-[#F8FAFC14] text-start py-3">
                    <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">
                      ভেরিফিকেশন কোড যাচাই করুন
                    </h1>
                    <p className="text-start  font-medium text-[13px] text-[#6B7280]">
                      ভেরিফিকেশন কোড কাউকে বলবেন না
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmitVeryfication}>
                  {/* Email  input  */}
                  <div className=" w-full py-3">
                    <h1 className="  font-medium text-[14px] text-[#94A3B8]   leading-[21.7px] m-0">
                      ভেরিফিকেশন কোড
                      <span className=" text-red-500">*</span>{' '}
                    </h1>
                    <p className="  text-start text-[#94A3B8] text-[12px] leading-[14.4px]  font-normal mt-1 ">
                      আপনার ইমেইলের ৬ ডিপজিটের ভেরিফিকেশন কোড দেওয়া হয়েছে সেই
                      কোড প্রদান করুন
                    </p>

                    <div className="cursor-pointer relative">
                      <input
                        className="relative w-full text-[#64748B] md:pl-6 my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                        type="number"
                        name="number"
                        onChange={e => setVerifyCationCode(e.target.value)}
                        placeholder="-G: "
                      />
                    </div>
                  </div>

                  {/* show Error message  */}
                  <div className="text-[14px] text-red-500 ">{error}</div>

                  <div className=" py-4 mt-6">
                    <div className=" inline-block my-2 sm:my-0 ">
                      <button
                        disabled={!email}
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
                          'কোড সাবমিট করুন'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* set new password  */}
        {active == 'setnewpassword' && (
          <div>
            {/* Enput email  */}
            <div>
              <div className=" w-full">
                <div>
                  {/* enrolment title? */}
                  <div className=" border-b border-[#F8FAFC14] text-start py-3">
                    <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">
                      নতুন পাসওয়ার্ড সেট করুন
                    </h1>
                    <p className="text-start  font-medium text-[13px] text-[#6B7280]">
                      খুব সতর্কতার সাথে পাসওয়ার্ড সেট করুন
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit(handleNewPasswordSet)}>
                  {/* Email  input  */}
                  <div className=" w-full py-3">
                    {/* new password set  */}
                    <div className="w-full py-3">
                      <h1 className="font-medium text-[14px] text-[#94A3B8] leading-[21.7px] m-0">
                        পাসওয়ার্ড দিন <span className="text-[#FF6B6B]">*</span>
                      </h1>
                      <p className="text-start text-[#94A3B8] text-[12px] leading-[14.4px] font-normal mt-1">
                        পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1
                        টি লেটার এবং 1 টি নাম্বার থাকতেই হবে।
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
                          className="relative w-full text-[#64748B] md:pl-6  my-2 focus:outline-[#0284C7] focus:outline-1 mt-2 border-none outline-none p-2 placeholder:text-[14px] rounded-[4px] bg-[#1E293B]"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="S4346723jdsfs@"
                        />
                        {errors.password && (
                          <p role="alert">{errors.password.message}</p>
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
                          type={showPassword ? 'text' : 'password'}
                          name="confirmPassword"
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
                  </div>

                  {/* show Error message  */}
                  <div className="text-[14px] text-red-500 ">{error}</div>

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
                          'নতুন পাসওয়ার্ড সেট করুন'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resetpassword;
