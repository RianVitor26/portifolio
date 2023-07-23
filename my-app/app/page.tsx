import { AnimatedAccordion } from "@/components/Accordion";
import { ContactPopover } from "@/components/ContactPopover";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
   <div className="max-w-4xl w-11/12 mx-auto flex flex-col md:flex-row relative">
    <div className="w-32 h-32 rounded-full bg-[url('/perfil.png')] bg-cover bg-center bg-no-repeat absolute -top-20 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 shadow-gray-500 md:rounded-xl"></div>
      <div className="w-full flex flex-col items-center md:items-start mt-14">
          <h1 className="text-black">Rian Vitor dos Santos de Almeida</h1>
          <h2 className="text-gray-500">Desenvolvedor Full-Stack</h2>
          <div className="flex gap-3 mt-2">
            <Link target="_blank" href="" className="text-2xl hover:-translate-y-1/3 text-slate-800 transition-all duration-500"><FaGithub/></Link>
            <Link target="_blank" href="" className="text-2xl hover:-translate-y-1/3 text-blue-500 transition-all duration-500"><FaLinkedin/></Link>
          </div>
      </div>
      <div className="w-full mt-10 md:mt-14">
        <AnimatedAccordion/>
        <ContactPopover/>
      </div>
   </div>
  )
}
