import Link from "next/link";


const MenuBar = ({ setOpen }) => {


     return (
          <div className='  text-white  pt-7  flex flex-col gap-5'>
               <Link onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } href="/">হোম </Link>
               <Link onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } href="/courses/1">কোর্স এক্সেস </Link>
               <Link onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor  px-[12px] py-[9px] text-[14px]"
               } href="/dashboard"> ড্যাশবোর্ড</Link>
               <Link onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } href="/leaderboard">লিডারবোর্ড </Link>
               <Link onClick={() => setOpen(true)} className={({ isActive }) =>
                    isActive ? " text-[14px]  rounded-[6px] bg-[#8194ae6c]  px-[12px] py-[9px] secondColor " : "primaryColor px-[12px] py-[9px] text-[14px]"
               } href="/live-session"> লাইভ সেশনস</Link>
               <Link href={'/profile'} onClick={() => setOpen(true)} className=" inline-block my-2 sm:my-0 ">
                    <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[25px] py-[2px] flex items-center   justify-center  gap-2">
                         <p className=" text-[13px]  text-[#38BDF8]  "> প্রোফাইল </p>
                    </div>
               </Link>


          </div>
     );
};

export default MenuBar;