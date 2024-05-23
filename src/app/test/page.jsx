"use client";
import axios from "axios";
import React from "react";

const page = () => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: 50, orderId: 1 },
        { withCredentials: true }
      );
      console.log(data);
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <button
        className="text-[50px] text-red-500 font-bold pt-60"
        onClick={pay}
      >
        Pay bkash
      </button>
    </div>
  );
};

export default page;
