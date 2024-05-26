"use client";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  const message = searchParams.get("message");
  return (
    <div className="  flex justify-center items-center h-[70vh]">
      <div>
        <h1 className="text-blue-500 text-center text-[50px]">
          {" "}
          Payment Success
        </h1>
        <h1 className="text-white-base text-center text-[25px] pt-0">
          {" "}
          {message}{" "}
        </h1>
      </div>
    </div>
  );
};

export default Page;
