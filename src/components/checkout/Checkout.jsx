"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Checkout = ({ data }) => {
  const [active, setActive] = useState("bkash");
  console.log(data);

  const pay = async () => {
    try {
      const { data: responsePayment } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: 20, course_id: data?.id, batch_id: 2 },
        { withCredentials: true }
      );

      window.location.href = responsePayment.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className=" max-w-[1000px] mx-auto mt-20 p-5 rounded-[7px]  mb-10 bg-primary-muted">
      <div className=" ">
        <div className=" border-b border-white-muted py-2">
          <h1 className="text-[20px] text-white-base md:text-[25px]">
            কমপ্লিট পেমেন্ট
          </h1>
        </div>
        <div className=" grid  grid-cols-1 md:grid-cols-2 gap-10">
          <div className="mt-6">
            <div className="">
              <div className=" flex items-start gap-5">
                <Image
                  className=" w-[180px] h-[90px]  object-fill rounded-2xl"
                  width={100}
                  height={100}
                  src={`/uploads/courses/${data?.photo_url}`}
                  alt="image"
                />
                <div>
                  <h1 className="text-[18px] text-white-base md:text-[22px] font-medium ">
                    {" "}
                    {data?.name}{" "}
                  </h1>
                </div>
              </div>

              <div className=" pt-5">
                <h1 className="text-[16px] text-white-base md:text-[18px] font-medium">
                  {" "}
                  পেমেন্ট ডিটেইলস{" "}
                </h1>
                <div className=" flex justify-between  items-center gap-4 text-white-muted py-3">
                  <div> কোর্সের মূল্য</div>
                  <div> ${data?.price} </div>
                </div>
                <div className=" flex justify-between  items-center gap-4 text-white-muted">
                  <div>
                    ডিসকাউন্ট <Link href={"/"}>(প্রোমো কোড)</Link>{" "}
                  </div>
                  <div> ${data?.discount} </div>
                </div>
              </div>
              <div className=" border-t border-white-muted mt-3">
                <div className=" flex justify-between  items-center gap-4 pt-3 text-white-muted">
                  <div>টোটাল পেমেন্ট:</div>
                  <div> ${data?.price - data?.discount} </div>
                </div>
              </div>
            </div>

            {/* contact phone  */}
            <div className=" pt-4">
              <div className=" flex items-center gap-2 flex-wrap">
                <div className=" w-[35px] h-[35px] bg-blue-muted rounded-full text-white-base flex justify-center items-center">
                  <FaPhone className="text-[14px] " />
                </div>
                <p className="text-[14px] text-white-base">
                  প্রয়োজনে কল করুন{" "}
                  <span className="text-blue-base px-1">+8801450918</span> (সকাল
                  ১০টা থেকে রাত ১০টা)
                </p>
              </div>
            </div>
          </div>
          <div className=" pt-5  px-4">
            <div>
              <h1 className="text-[16px] text-white-base md:text-[20px]">
                পেমেন্টের মাধ্যম
              </h1>
            </div>

            <div className=" mt-6 space-y-6">
              <div
                onClick={() => setActive("bkash")}
                className=" flex items-center gap-4 cursor-pointer"
              >
                <div
                  className={` ${
                    active == "bkash"
                      ? "border-2 border-blue-base"
                      : "border-2 border-white-base"
                  }   w-[20px] h-[20px] rounded-full flex justify-center items-center`}
                >
                  {active == "bkash" && (
                    <span
                      className={`w-[10px] h-[10px] bg-blue-base rounded-full `}
                    >
                      {" "}
                    </span>
                  )}
                </div>
                <div
                  className={` ${
                    active == "bkash"
                      ? "border-[4px]  border-blue-base"
                      : "    border border-white-base"
                  } w-full  max-h-[80px]  flex bg-white-base justify-center items-center gap-3 py-2 rounded-[17px] px-5`}
                >
                  <Image
                    width={100}
                    height={50}
                    layout="responsive"
                    src={"https://i.ibb.co/zr7nsLK/bkash-payment.png"}
                    alt="image"
                  />
                </div>{" "}
              </div>
              <div
                onClick={() => setActive("nagad")}
                className=" flex items-center gap-4 cursor-pointer"
              >
                <div
                  className={` ${
                    active == "nagad"
                      ? "border-2 border-blue-base"
                      : "border-2 border-white-base"
                  }   w-[20px] h-[20px] rounded-full flex justify-center items-center`}
                >
                  {active == "nagad" && (
                    <span
                      className={`w-[10px] h-[10px] bg-blue-base rounded-full `}
                    >
                      {" "}
                    </span>
                  )}
                </div>
                <div
                  className={`  ${
                    active == "nagad"
                      ? "border-2 border-blue-base"
                      : "border-2 border-white-base"
                  }  max-h-[80px] w-full   flex bg-white-base   justify-between items-center gap-5 py-2 rounded-[17px] px-5`}
                >
                  <Image
                    width={100}
                    className=" w-[50px]"
                    height={50}
                    src={
                      "https://i.ibb.co/f1p0W2Q/2024-04-23-T05-06-13-343-Z-rocket.png"
                    }
                    alt="image"
                  />
                  <Image
                    width={100}
                    className=" w-[50px]"
                    height={50}
                    src={
                      "https://i.ibb.co/z2rXDG3/2024-04-23-T05-05-19-181-Z-visa.png"
                    }
                    alt="image"
                  />
                  <Image
                    width={100}
                    className=" w-[50px]"
                    height={50}
                    src={
                      "https://i.ibb.co/nMhYvRT/2024-04-24-T04-58-50-968-Z-mastercard.png"
                    }
                    alt="image"
                  />
                  <Image
                    width={100}
                    className=" w-[50px]"
                    height={50}
                    src={
                      "https://i.ibb.co/nMhYvRT/2024-04-24-T04-58-50-968-Z-mastercard.png"
                    }
                    alt="image"
                  />
                  <Image
                    width={100}
                    className=" w-[50px]"
                    height={50}
                    src={
                      "https://i.ibb.co/NxdkfwL/2024-04-23-T05-07-00-461-Z-nagad.png"
                    }
                    alt="image"
                  />
                </div>{" "}
              </div>
            </div>

            {/* total payment  */}

            <div>
              <div className=" flex justify-between  items-center gap-5 py-5 mt-5 border-t  border-white-base">
                <h1 className="text-white-base ">টোটাল পেমেন্ট:</h1>
                <h1 className="text-white-base "> $ {data?.price} </h1>
              </div>

              <div
                onClick={pay}
                className=" bg-[#0284C7]  my-6  cursor-pointer  w-full border border-[#f8fafc14] rounded-[32px] px-[25px] py-[8px] flex items-center   justify-center  gap-2"
              >
                <p className=" text-[19px] font-semibold secondColor">
                  পেমেন্ট সম্পন্ন করি
                </p>
                <FaAngleRight className="secondColor" size={"20px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
