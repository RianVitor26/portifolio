"use client"

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { DiJavascript, DiReact, DiMysql, DiMongodb } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { AccordionTooltip } from "../Tooltip/accordion";


 
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 
export const AnimatedAccordion = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)} className="text-gray-900 font-normal">Resumo sobre mim</AccordionHeader>
        <AccordionBody className="text-gray-600">
        Sou um Programador/Desenvolvedor Full stack com conhecimentos em Front-end e Back-end. Iniciei meus estudos há cerca de 2 anos quando descobri minha paixão pela programação e atualmente estou no 4º período da faculdade de Engenharia de Software.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-gray-900 font-normal">
          Objetivo
        </AccordionHeader>
        <AccordionBody className="text-gray-600">
            Meu objetivo é melhorar constantemente meu trabalho, pois acredito que a tecnologia é um meio poderoso para desenvolver soluções eficazes para pessoas e empresas. Quero me dedicar a aprimorar minhas habilidades tanto no Front-end quanto no Back-end, buscando a excelência em cada aspecto do desenvolvimento web.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-gray-900 font-normal">
          Tecnologias principais
        </AccordionHeader>
        <AccordionBody className="flex gap-3 flex-wrap">
            <AccordionTooltip tecName="JavaScript" icon={<DiJavascript className="text-3xl text-yellow-500"/>}/>
            <AccordionTooltip tecName="TypeScript" icon={<SiTypescript className="text-3xl text-blue-500"/>}/>
            <AccordionTooltip tecName="React.js" icon={<DiReact className="text-3xl text-blue-400"/>}/>
            <AccordionTooltip tecName="Next.js" icon={<TbBrandNextjs className="text-3xl text-black"/>}/>
            <AccordionTooltip tecName="Nest.js" icon={<SiNestjs  className="text-3xl text-rose-500"/>}/>
            <AccordionTooltip tecName="MySQL" icon={<DiMysql className="text-3xl text-sky-400"/>}/>
            <AccordionTooltip tecName="Git" icon={<FaGitAlt className="text-3xl text-orange-600"/>}/>
            <AccordionTooltip tecName="Github" icon={<FaGithub className="text-3xl text-gray-800"/>}/>
        </AccordionBody>
      </Accordion>
    </>
  );
}