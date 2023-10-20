import { Tooltip, Button } from "@material-tailwind/react";
import { SiNestjs, SiPostman, SiPrisma, SiSwagger, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr"
import { FaNodeJs } from "react-icons/fa";


export const Card4Tooltip = () => {
  return (
    <>
      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="Node.js"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <FaNodeJs className="text-3xl text-green-500" />
        </Button>
      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="Nest.js"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiNestjs className="text-3xl text-rose-500" />
        </Button>
      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="TypeScript"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiTypescript className="text-3xl text-sky-600" />
        </Button>

      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="MySQL"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <GrMysql className="text-3xl text-blue-500" />
        </Button>
      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="Prisma ORM"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiPrisma className="text-3xl text-cyan-900" />
        </Button>
      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="Swagger"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiSwagger className="text-3xl text-lime-600" />
        </Button>
      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="Postman API"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiPostman className="text-3xl text-orange-600" />
        </Button>
      </Tooltip>
    </>
  );
};
