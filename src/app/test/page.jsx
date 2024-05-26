"use client";
import axios from "axios";
import React from "react";

const page = () => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: 20, course_id: 1, batch_id: 1 },
        { withCredentials: true }
      );

      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const get = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/bkash/payment/callback"
      );

      console.log(data);
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
      <button
        className="text-[50px] block text-red-500 font-bold pt-60"
        onClick={get}
      >
      gt ifo
      </button>
    </div>
  );
};

export default page;
