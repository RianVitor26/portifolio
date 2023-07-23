"use client"

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { GithubTooltip } from "../Tooltip/github";
import Link from "next/link";

import React from "react";
import { Card1Tooltip } from "../Tooltip/card1";
import { Card2Tooltip } from "../Tooltip/card2";
import { Card3Tooltip } from "../Tooltip/card3";
   
  export const ProjectCard = ({imgSrc, alt, title, desc, srcCode, site}: any) =>  {
    return (
      <Card className="w-full max-w-[25rem] shadow-lg">
        <div className="flex items-center gap-2 p-2 divide-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
         <CardHeader
        floated={false}
        color="blue-gray"
        className="h-52 overflow-hidden"
      >
        <img src={imgSrc} alt={alt} className="h-full w-full bg-contain hover:scale-150 transition-all duration-500"/>
      </CardHeader>
        <CardBody className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
             {title}
            </Typography>
            <GithubTooltip projLink={srcCode}/>  
          </div>
          <Typography color="gray">
           {desc}
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              {title === "Github Repos" ? <Card1Tooltip/> : null}
              {title === "Blog API" ? <Card2Tooltip/> : null}
              {title === "React CRUD" ? <Card3Tooltip/> : null}
          </div>
        </CardBody>
        <CardFooter className="pt-3">
            <Link target="_blank" href={site}>
            <Button size="lg" fullWidth={true} className="bg-blue-600 p-3 text-gray-100">
                Ver projeto
              </Button> 
            </Link>
        
        </CardFooter>
      </Card>
    );
  }