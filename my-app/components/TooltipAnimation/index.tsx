import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface ILinkProps {
  projLink: string
}
 
export const TooltipAnimation = ({projLink}: ILinkProps) =>  {
  return (
    <Tooltip
      className="bg-gray-900 text-gray-100 p-2 rounded-md"
      content="Código fonte do projeto"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Link target="_blank" href={projLink} className="text-4xl text-gray-400 hover:-translate-y-1/3 hover:text-slate-800 transition-all duration-500"><FaGithub/></Link>
    </Tooltip>
  );
}