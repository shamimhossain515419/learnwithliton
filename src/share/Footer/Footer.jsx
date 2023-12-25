
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import paymentImage from "../../../public/image/home/IMAGE (3).png"
import Container from "@/components/CommonComponent/Container/Container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
     return (
          <div className=" bg-[#0B1120]">
               

               <div className=" pt-[70px]">
                    <Container>
                         <div className=" md:flex   md:flex-row-reverse  justify-between py-5">
                              <div className="  flex justify-center md:justify-start gap-5 items-center">
                                   <Link href={'/'}>
                                        <FaFacebook className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link href={'/'}>
                                        <FaInstagram className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link href={'/'}>
                                        <FaYoutube className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link href={'/'}>
                                        <FaLinkedin className=" text-[#38BDF8]" size={20} />
                                   </Link>
                                   <Link href={'/'}>
                                        <FaGithub className=" text-[#38BDF8]" size={20} />
                                   </Link>
                              </div>
                              <div className="  pt-5 md:pt-0  flex justify-center md:justify-start gap-3 items-center ">
                                   <Link className="  font-medium text-[14px]  text-[#64748B]" href={'/'}> ডিসকোর্ড সাপোর্ট চ্যানেল </Link>
                                   <Link className=" font-medium text-[14px] text-[#64748B]" href={'/'}>  আমাদের সম্পর্কে</Link>
                                   <Link className=" font-medium text-[14px] text-[#64748B]" href={'/'}> যোগাযোগ </Link>

                              </div>

                         </div>
                         <div>
                              <div className="  py-3">
                                   <hr className=" w-full h-[1px] bg-[#CBD5E11A]" />
                              </div>
                              <div className=" w-full py-4">
                                   <Image className=" w-full" src={paymentImage} alt="" />
                              </div>
                         </div>
                         <div className=" sm:flex  justify-between items-center gap-3 py-5">
                              <p className=" text-center sm:text-start text-[#64748B] text-[14px]"> কপিরাইট ©2023 লার্ন উইথ সুমিত। সর্বস্বত্ব সংরক্ষিত।</p>
                              <div className=" flex justify-center sm:justify-start items-center flex-wrap mt-3 sm:mt-0 gap-4">
                                   <Link className=" text-[#64748B] text-[13px]" href={'/'}>সাপোর্টেড ব্রাউজার</Link>
                                   <Link className=" text-[#64748B] text-[13px]" href={'/'}>শর্তাবলি</Link>
                                   <Link className=" text-[#64748B] text-[13px]" href={'/'}>রিফান্ড পলিসি</Link>
                                   <Link className=" text-[#64748B] text-[13px]" href={'/'}>প্রাইভেসি পলিসি</Link>
                              </div>
                         </div>
                    </Container>

               </div>

          </div>
     );
};

export default Footer;