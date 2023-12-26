import Link from "next/link";
import { usePathname } from "next/navigation";


const MenuBar = ({ setOpen }) => {
     const pathname = usePathname()

     return (
          <div className='  text-white  pt-7  flex flex-col gap-5'>
               <Link onClick={() => setOpen(true)} className={` ${pathname == '/' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]"} flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `} href="/">হোম </Link>
               <Link onClick={() => setOpen(true)} className={` ${pathname == '/courses/1' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]"} flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `} href="/courses/1">কোর্স এক্সেস </Link>
               <Link onClick={() => setOpen(true)} className={` ${pathname == '/dashboard' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]"} flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `} href="/dashboard"> ড্যাশবোর্ড</Link>
               <Link onClick={() => setOpen(true)} className={` ${pathname == '/leaderboard' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]"} flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `} href="/leaderboard">লিডারবোর্ড </Link>
               <Link onClick={() => setOpen(true)} className={` ${pathname == '/live' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]"} flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `} href="/live"> লাইভ সেশনস</Link>
               <Link className={` ${pathname == '/account' ? "bg-[#1E293B] text-[#0284C7]" : "text-[#94A3B8]"} flex items-center gap-3  my-2 hover:bg-[#1E293B] rounded-[3px]  py-2 px-2 `} href="/payment"> পেমেন্ট করুন</Link>
               <Link href={'/profile'} onClick={() => setOpen(true)} className=" inline-block my-2 sm:my-0 ">
                    <div className="  bg-transparent   duration-150  primaryColor  w-full border border-[#0284C7] rounded-[20px] px-[25px] py-[2px] flex items-center   justify-center  gap-2">
                         <p className=" text-[13px]  text-[#38BDF8]  "> প্রোফাইল </p>
                    </div>
               </Link>


          </div>
     );
};

export default MenuBar;