'use client';
import { ToggleResePassword } from '@/redux/features/resetPasswordSlice/ResetPasswordSlice';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ImSpinner3 } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

const Resetpassword = () => {
  const { isFormToggle } = useSelector(state => state.passWordToggle);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('');
  const [error, setError] = useState(false);
  const [email, setEmai] = useState('');
  console.log(email);
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    try {
      const res = await fetch(
        `http://localhost:3000/api/account/resetpassword`,
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
        router.push('/login');
        form.reset();
      } else {
        toast.error('Failed to Add  client');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={` ${
        isFormToggle ? 'w-full bg-black' : ' w-[10px]  hidden '
      } fixed  top-0 left-0 right-0 max-w-full duration-300 h-screen flex justify-center items-center  z-[100] overflow-hidden`}
    >
      <div className=" min-w-[220px]  bg-[#1E293B99] px-8 rounded-xl py-11 sm:min-w-[400px] xl:w-[600px]  mx-auto">
        <div
          onClick={() => dispatch(ToggleResePassword())}
          className=" absolute cursor-pointer right-2 top-1 p-5 text-white"
        >
          <IoMdClose className="text-[25px]" />
        </div>

        <div>
          {/* Enput email  */}
          <div>
            <div className=" w-full">
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
              <form onSubmit={handleSubmit}>
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
                        'ইমেইল সাবমিট করুন'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
