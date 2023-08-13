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

import { FaLightbulb, FaServer } from "react-icons/fa"
import { IoIosSchool } from "react-icons/io"

export const TimeLine = () => {
  return (
    <div className="w-full">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-gray-100">
              <FaLightbulb className="text-xl text-yellow-300" />
            </TimelineIcon>
            <Typography variant="h5">
              Julho de 2021 | O início
            </Typography>

          </TimelineHeader>
          <TimelineBody className="pb-8">

            <ul>
              <li className="list-disc">Lógica, estrutura de dados e algorítmos em C e Python mentorado pelo meu primo e o Guanabara do curso em vídeo</li>
              <li className="list-disc">Fundamentos do Front-end, HTML, CSS e JavaScript</li>
              <li className="list-disc">Git e Github, Início no desenvolvimento de projetos versionados</li>
            </ul>

          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-gray-100">
              <IoIosSchool className="text-xl text-blue-900" />
            </TimelineIcon>
            <Typography variant="h5">
              2022 | Front-End
            </Typography>

          </TimelineHeader>
          <TimelineBody className="pb-8">

            <ul>
              <li className="list-disc">Início do curso de Engenharia de Software na Universidade Unisales de Vitória</li>
              <li className="list-disc">Exercícios de lógica em C, orientação à objetos com Java, Prototipação com Figma e Metologias àgeis(Scrum, kanban, TDD)</li>
              <li className="list-disc">Cursos e projetos paralelos de Front-end, HTML, CSS e JavaScript e React</li>
            </ul>

          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-gray-100">
              <FaServer className="text-lg text-green-600" />
            </TimelineIcon>
            <Typography variant="h5">
              2023 | Back-end
            </Typography>

          </TimelineHeader>
          <TimelineBody>

            <ul>
              <li className="list-disc">Desenvolvimento de APIs REST com Spring boot, ORM JPA Hibernate, MySQL e Testes com Postman</li>
              <li className="list-disc">Desenvolvimento de APIs REST em Node com Express, Nest, Prisma, Sequelize, mongoose, Arquiterura MVC, JWT, TypeScript e Swagger</li>
              <li className="list-disc">Desenvolvimento de interfaces com Next e TailwindCSS</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}