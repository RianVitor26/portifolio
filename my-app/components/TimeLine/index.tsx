"use client"

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

import { FaLightbulb,FaServer } from "react-icons/fa"
import { IoIosSchool } from "react-icons/io"
 
export const TimeLine = () =>  {
  return (
    <div className="w-full">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <FaLightbulb className="text-xl text-yellow-300" />
            </TimelineIcon>
            <Typography variant="h5" color="black">
              Julho de 2021 | O início
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
             <ul>
                <li className="list-disc">Conheci a programação através do meu primo</li>
                <li className="list-disc">Lógica, estrutura de dados e algorítmos em C e Python mentorado pelo meu primo e o Guanabara do curso em vídeo</li>
                <li className="list-disc">Fundamentos do Front-end, HTML, CSS e JavaScript</li>
                <li className="list-disc">Git e Github, Início no desenvolvimento de projetos versionados</li>
             </ul>
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <IoIosSchool className="text-xl text-blue-900" />
            </TimelineIcon>
            <Typography variant="h5" color="red">
              2022 | Front-End
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            <ul>
                <li className="list-disc">Iniciei o curso de Engenharia de Software na Universidade Unisales de Vitória</li>
                <li className="list-disc">Exercícios de lógica em C, orientação à objetos com Java, Prototipação com Figma e Metologias àgeis</li>
                <li className="list-disc">Cursos e projetos paralelos de Front-end, HTML, CSS e JavaScript</li>
                <li className="list-disc">Início dos estudos da biblioteca React.js e projetos práticos</li>
             </ul>
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <FaServer className="text-lg text-green-600" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              2023 | Back-end
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
            <ul>
                <li className="list-disc">Desenvolvi APIs REST em Springboot, consultas básicas em SQL, testes com Postman e uso dos bancos de dados (MySQL e MongoDB)</li>
                <li className="list-disc">Iniciei os estudos de Back-end em TypeScript com o Node (Express.js e Nest.js) </li>
                <li className="list-disc">Iniciei os estudos no Framework Next.js e no Framework CSS TailwindCSS</li>
                <li className="list-disc">Aprendendo na prática com o desenvolvimento de um Ecommerce com Next e TailwindCSS no Front-end e Nestjs, Prima, MySQL, JWT, Swagger e Jest no Back-end</li>
             </ul>
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}