"use client";
import { useFetchUsersPaymentQuery } from "@/redux/features/payment/paymentApi";
import moment from "moment";
import React from "react";

const Page = async () => {
  const { data } = useFetchUsersPaymentQuery("");
  console.log(data);
  return (
    <div>
      {/* transactions title */}
      <div>
        <div className=" border-b border-[#F8FAFC14] text-start py-3">
          <h1 className="text-start text-[#94A3B8] font-semibold text-[18px]">
            ট্রানজেকশন
          </h1>
          <p className="text-start  font-medium text-[13px] text-[#6B7280]">
            আপনি আমাদের প্লাটফর্মে যে ট্রানজেকশন গুলো করেছেন
          </p>
        </div>
      </div>

      <div className="   mt-12 border border-[#F8FAFC14] rounded-md  p-4">
        <table class="min-w-full border border-[#F8FAFC14] text-white-base">
          {/* transactions table  */}
          <thead>
            <tr>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                কোর্স
              </th>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                তারিখ
              </th>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                পেমেন্ট মেথড
              </th>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                এমাউন্ট
              </th>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                ইনভয়েস নং
              </th>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                পেমেন্ট স্ট্যাটাস
              </th>
              <th class="border border-[#F8FAFC14] text-white-base text-[13px]  font-medium  text-start py-2 px-4">
                অপশন
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((payment, i) => (
              <tr key={i} className=" hover:bg-[#F8FAFC14] duration-200">
                <td class="border border-[#F8FAFC14] text-[16px]  font-medium text-[#0284C7] hover:text-[#38BDF8]  cursor-pointer py-2 px-4">
                  {payment?.courses?.name}
                </td>
                <td class="border border-[#F8FAFC14] text-[15px]  font-medium  text-[#F8FAFC] py-2 px-4">
                  <span>
                    {" "}
                    {moment(payment?.createdAt).format("MMM Do YY")}{" "}
                  </span>
                </td>
                <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] py-2 px-4">
                  {payment?.method_name}
                </td>
                <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] py-2 px-4">
                  {payment?.amount} টাকা
                </td>
                <td class="border border-[#F8FAFC14] text-[15px]  font-medium  text-[#38BDF8] py-2 px-4">
                  {payment?.transaction_id}
                </td>
                <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#FFF] py-2 px-4">
                  {" "}
                  {payment?.status == "success" ? (
                    <span className=" bg-gradient-to-r from-blue-500 via-blue-700 text-[14px] font-medium to-teal-500 mx-2 my-5 w-full rounded-xl px-2 ">
                      Complete
                    </span>
                  ) : (
                    <span className=" bg-gradient-to-r from-red-500 via-red-700 text-[14px] font-medium to-teal-500 mx-2 my-5 w-full rounded-xl px-2 ">
                      panding
                    </span>
                  )}
                </td>
                <td class="border border-[#F8FAFC14] text-[16px]  font-medium  text-[#F8FAFC] py-2 px-4">
                  {" "}
                  N/A
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
